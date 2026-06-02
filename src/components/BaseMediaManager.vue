<template>
  <div ref="rootRef" class="relative h-full">
    <BaseFileManager
      ref="fileManagerRef"
      :blobs="filteredBlobs"
      :is-loading="isLoading"
      :extra-folders="virtualFolders"
      directory-path="tree_directory"
      status-path="status"
      key-path="key"
      @file-click="(b) => emit('file-click', b)"
      @folder-click="(p) => emit('folder-click', p)"
      @navigate="onNavigate"
    >
      <template #toolbar>
        <div class="flex flex-wrap items-center gap-3">
          <div class="flex items-center gap-2">
            <label class="text-xs font-medium text-gray-500 uppercase tracking-wide">Source</label>
            <SelectButton
              v-model="sourceFilter"
              :options="SOURCE_OPTIONS"
              option-label="label"
              option-value="value"
              :allow-empty="false"
              size="small"
            />
          </div>
          <div class="flex items-center gap-2">
            <label class="text-xs font-medium text-gray-500 uppercase tracking-wide">Status</label>
            <Dropdown
              v-model="statusFilter"
              :options="STATUS_OPTIONS"
              option-label="label"
              option-value="value"
              size="small"
            />
          </div>

          <slot name="toolbar" />

          <!-- Upload actions (FR-1) -->
          <div class="flex items-center gap-2 ml-auto">
            <Button label="New Folder" icon="pi pi-folder-plus" size="small" outlined @click="openNewFolder" />
            <Button label="Upload" icon="pi pi-cloud-upload" size="small" @click="triggerFileInput" />
          </div>
        </div>
      </template>
      <template v-if="$slots['empty-state']" #empty-state>
        <slot name="empty-state" />
      </template>
    </BaseFileManager>

    <!-- Hidden multi-file input (FR-2) -->
    <input ref="fileInputRef" type="file" multiple class="hidden" @change="onFileSelect" />

    <!-- Drag-and-drop overlay (FR-2) -->
    <div
      v-if="isOverDropZone"
      class="absolute inset-0 z-20 flex items-center justify-center bg-primary-50/80 border-2 border-dashed border-primary rounded-lg pointer-events-none"
    >
      <div class="text-center">
        <i class="pi pi-cloud-upload text-4xl text-primary animate-bounce" />
        <p class="text-lg text-primary-700 m-0">Drop files to upload to "{{ destinationLabel }}"</p>
      </div>
    </div>

    <!-- Per-file upload tray (FR-4) -->
    <div v-if="trayVisible && uploadFiles.length" class="absolute bottom-4 right-4 z-30">
      <BaseUploadTray :files="uploadFiles" @close="trayVisible = false" @clear="clearTray" />
    </div>

    <!-- New Folder dialog (FR-11, FR-13) -->
    <Dialog v-model:visible="newFolderVisible" modal header="New Folder" :style="{ width: '24rem' }" :draggable="false">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-600">Folder name</label>
        <InputText v-model="newFolderName" autofocus @keyup.enter="confirmNewFolder" />
        <p class="text-xs text-gray-400 m-0">Created under: {{ destinationLabel }}</p>
        <p v-if="newFolderSlug && newFolderSlug !== newFolderName.trim()" class="text-xs text-gray-400 m-0">
          Will be created as: <span class="font-medium text-gray-600">{{ newFolderSlug }}</span>
        </p>
        <p v-if="newFolderError" class="text-xs text-red-600 m-0">{{ newFolderError }}</p>
      </div>
      <template #footer>
        <Button label="Cancel" text size="small" @click="newFolderVisible = false" />
        <Button label="Create" size="small" @click="confirmNewFolder" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
/**
 * BaseMediaManager
 *
 * Smart wrapper around BaseFileManager. The single-component embed that admin
 * panels mount at their /blobs route. Fetches the reconciled blob+disk set
 * in one round-trip (`reconcile=1`) and feeds BaseFileManager with per-file
 * status (matched / disk_only / db_only / unverifiable).
 *
 * Beyond viewing, it orchestrates direct, disk-only uploads: an Upload button
 * and whole-manager drag-and-drop queue files into a docked tray, each file is
 * sent as its own request to `api/blobs/upload` (independent progress/failure),
 * oversize files are rejected client-side per-file, and on batch completion the
 * reconciled view is reloaded so new files appear as "Untracked" without a
 * manual reload. "New Folder" creates a virtual folder that only persists once
 * a file is uploaded into it.
 *
 * @prop {Number} maxFileSize  Client-side per-file size cap in bytes. Oversize
 *                             files are rejected before sending; the backend
 *                             stays authoritative and re-validates. The default
 *                             (5 MB) is only a fallback — wire this from the
 *                             backend's `kockatoos-admin.uploads.max_size` so the
 *                             client and server agree. Default: 5 * 1024 * 1024.
 *
 * @emits file-click(blob)
 * @emits folder-click(path)
 * @emits navigate(path)
 *
 * @slot toolbar     Extra toolbar content rendered after the filters.
 * @slot empty-state
 */

import { computed, onMounted, ref, nextTick } from 'vue'
import { SelectButton, Dropdown, Button, Dialog, InputText } from 'primevue'
import { useDropZone } from '@vueuse/core'
import BaseFileManager from './BaseFileManager.vue'
import BaseUploadTray from './BaseUploadTray.vue'
import useMediaApi from '../composables/useMediaApi.js'
import useAlerts from '../composables/useAlerts.js'

const props = defineProps({
  maxFileSize: { type: Number, default: 5 * 1024 * 1024 },
})

const emit = defineEmits(['file-click', 'folder-click', 'navigate'])

const SOURCE_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'Disk', value: 'disk' },
  { label: 'Blobs', value: 'blobs' },
]

const STATUS_OPTIONS = [
  { label: 'All statuses', value: 'all' },
  { label: 'Matched', value: 'matched' },
  { label: 'Disk-only', value: 'disk_only' },
  { label: 'Db-only', value: 'db_only' },
  { label: 'External', value: 'unverifiable' },
]

const { alertSuccess, alertError } = useAlerts()

const blobs = ref([])
const isLoading = ref(true)
const sourceFilter = ref('all')
const statusFilter = ref('all')

const rootRef = ref(null)
const fileManagerRef = ref(null)
const fileInputRef = ref(null)

const currentPath = ref('')
const destinationLabel = computed(() => currentPath.value || 'All Files')

const filteredBlobs = computed(() => {
  return blobs.value.filter((b) => {
    // Source filter (FR-5)
    if (sourceFilter.value === 'blobs' && b.id == null) return false
    if (sourceFilter.value === 'disk' && !(b.status === 'matched' || b.status === 'disk_only')) return false
    // Status filter
    if (statusFilter.value !== 'all' && b.status !== statusFilter.value) return false
    return true
  })
})

// ── Data load / reconcile ────────────────────────────────────────────────────

async function load() {
  isLoading.value = true
  try {
    const { get } = useMediaApi()
    const response = await get({ paginate: false, reconcile: 1 })
    blobs.value = response.data?.data ?? []
    pruneRealizedVirtualFolders()
  } finally {
    isLoading.value = false
  }
}

onMounted(load)

function onNavigate(path) {
  currentPath.value = path
  emit('navigate', path)
}

// ── Upload orchestration (FR-2, FR-4, FR-6, FR-8, FR-10, FR-15) ───────────────

const uploadFiles = ref([])
const trayVisible = ref(false)
let uploadRowSeq = 0

const { isOverDropZone } = useDropZone(rootRef, {
  onDrop: (files) => { if (files) queueFiles(files) },
  multiple: true,
})

function triggerFileInput() {
  fileInputRef.value?.click()
}

function onFileSelect(event) {
  queueFiles(event.target.files)
  event.target.value = ''
}

function clearTray() {
  uploadFiles.value = []
  trayVisible.value = false
}

async function queueFiles(fileList) {
  const files = Array.from(fileList || [])
  if (files.length === 0) return

  trayVisible.value = true
  const { upload } = useMediaApi()
  const destination = currentPath.value || ''

  const batch = []
  const tasks = []

  for (const file of files) {
    uploadFiles.value.push({
      id: `upload-${++uploadRowSeq}`,
      name: file.name,
      size: file.size,
      status: 'pending',
      progress: 0,
      errorMessage: null,
    })
    // Read the entry back as the reactive proxy so later mutations are tracked.
    const tracked = uploadFiles.value[uploadFiles.value.length - 1]
    batch.push(tracked)

    // Client-side size pre-check (FR-6) — reject per-file, keep the batch going.
    if (file.size > props.maxFileSize) {
      tracked.status = 'error'
      tracked.errorMessage = `File exceeds the ${formatSize(props.maxFileSize)} limit.`
      continue
    }

    tracked.status = 'uploading'

    const formData = new FormData()
    formData.append('file', file)
    formData.append('directory', destination)

    const task = upload(formData, {
      onUploadProgress: (e) => {
        if (e.total) tracked.progress = Math.round((e.loaded / e.total) * 100)
      },
    })
      .then(() => {
        tracked.status = 'success'
        tracked.progress = 100
      })
      .catch((err) => {
        tracked.status = 'error'
        tracked.errorMessage = extractError(err)
      })

    tasks.push(task)
  }

  await Promise.allSettled(tasks)

  // Batch-complete summary (FR-4).
  const success = batch.filter((f) => f.status === 'success').length
  const failed = batch.filter((f) => f.status === 'error').length
  if (success > 0) {
    alertSuccess(`${success} file${success === 1 ? '' : 's'} uploaded${failed ? `, ${failed} failed` : ''}.`)
  } else if (failed > 0) {
    alertError(`${failed} file${failed === 1 ? '' : 's'} failed to upload.`)
  }

  // Re-reconcile so new files appear as disk_only / "Untracked" without a reload (FR-8).
  if (success > 0) await load()
}

function extractError(err) {
  // A file past the gateway/body-size ceiling often returns 413 with no JSON
  // body, so surface a size reason rather than a generic failure (FR-15).
  if (err?.response?.status === 413) return 'File is too large to upload.'
  const data = err?.response?.data
  return (
    data?.errors?.file?.[0] ||
    data?.message ||
    err?.message ||
    'Upload failed.'
  )
}

// ── Virtual folders (FR-11, FR-12, FR-13) ─────────────────────────────────────

const virtualFolders = ref([])
const newFolderVisible = ref(false)
const newFolderName = ref('')
const newFolderError = ref('')

// Names of folders that already exist directly under the current path
// (from reconciled data or pending virtual folders) — for collision checks.
const existingSubfolderNames = computed(() => {
  const prefix = currentPath.value ? `${currentPath.value}/` : ''
  const names = new Set()

  const addFrom = (dir) => {
    if (!dir) return
    if (currentPath.value === '') {
      names.add(dir.split('/')[0])
    } else if (dir === currentPath.value) {
      // exact match contributes no child name
    } else if (dir.startsWith(prefix)) {
      names.add(dir.slice(prefix.length).split('/')[0])
    }
  }

  for (const b of blobs.value) addFrom(b.tree_directory || '')
  for (const vf of virtualFolders.value) addFrom(vf)

  return [...names]
})

function openNewFolder() {
  newFolderName.value = ''
  newFolderError.value = ''
  newFolderVisible.value = true
}

// Normalize a folder name to the same slug the backend's sanitizeDirectory()
// will store it as, so the virtual folder path matches the reconciled
// tree_directory after upload (otherwise the file would surface in a separate,
// lowercased folder and the empty virtual node would linger). For the validated
// input charset ([A-Za-z0-9 _-]) this mirrors Laravel's Str::slug.
function slugifyFolderName(value) {
  return value
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Live preview of the normalized name shown in the dialog.
const newFolderSlug = computed(() => slugifyFolderName(newFolderName.value.trim()))

function confirmNewFolder() {
  const raw = newFolderName.value.trim()

  if (!raw) {
    newFolderError.value = 'Folder name is required.'
    return
  }
  if (/[/\\]/.test(raw) || raw.includes('..')) {
    newFolderError.value = 'Name cannot contain slashes or "..".'
    return
  }
  if (!/^[A-Za-z0-9 _-]+$/.test(raw)) {
    newFolderError.value = 'Use only letters, numbers, spaces, hyphens and underscores.'
    return
  }

  // Normalize to match how the backend will store the directory.
  const name = slugifyFolderName(raw)
  if (!name) {
    newFolderError.value = 'Enter a name with at least one letter or number.'
    return
  }
  if (existingSubfolderNames.value.includes(name)) {
    newFolderError.value = 'A folder with this name already exists here.'
    return
  }

  const fullPath = currentPath.value ? `${currentPath.value}/${name}` : name
  virtualFolders.value = [...virtualFolders.value, fullPath]
  newFolderVisible.value = false

  // Navigate into the new folder so it's the upload destination (FR-11).
  nextTick(() => fileManagerRef.value?.navigateTo(fullPath))
}

// Drop virtual folders that have become real (a reconciled file now lives in
// them or a descendant). Empty ones are kept until the next full reload, which
// resets this client-only state — so they vanish on reload (FR-12).
function pruneRealizedVirtualFolders() {
  const realDirs = blobs.value.map((b) => b.tree_directory || '').filter(Boolean)
  virtualFolders.value = virtualFolders.value.filter((vf) => {
    return !realDirs.some((dir) => dir === vf || dir.startsWith(`${vf}/`))
  })
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatSize(bytes) {
  if (!bytes) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}
</script>
