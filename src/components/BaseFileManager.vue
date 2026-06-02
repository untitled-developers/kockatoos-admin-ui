<template>
  <div class="flex flex-col h-full border border-gray-300 rounded-lg overflow-hidden bg-white">

    <!-- Toolbar slot (full-width, above the sidebar/main split) -->
    <div v-if="$slots.toolbar" class="border-b border-gray-300 px-4 py-3">
      <slot name="toolbar" />
    </div>

    <!-- Body: sidebar + main -->
    <div class="flex flex-1 overflow-hidden">

      <!-- Sidebar -->
      <div class="w-64 flex-shrink-0 border-r border-gray-300 overflow-y-auto bg-gray-50 py-2">

        <!-- Loading placeholders -->
        <template v-if="isLoading">
          <div v-for="i in 5" :key="i" class="px-3 py-1.5">
            <Skeleton height="1.75rem" border-radius="0.375rem" />
          </div>
        </template>

        <template v-else>
          <!-- All Files root row -->
          <div
            class="flex items-center gap-1.5 py-1.5 pr-3 rounded-md mx-1 my-0.5 select-none text-sm cursor-pointer"
            :class="currentPath === ''
              ? 'bg-primary-50 text-primary-700 font-medium'
              : 'hover:bg-gray-100 text-gray-700'"
            @click="navigateTo('')"
          >
            <span class="w-4 h-4 flex items-center justify-center flex-shrink-0" />
            <i class="pi pi-home flex-shrink-0" :class="currentPath === '' ? 'text-primary' : 'text-gray-400'" />
            <span class="flex-1 truncate">All Files</span>
            <span class="text-xs text-gray-400 flex-shrink-0">({{ totalRootCount }})</span>
          </div>

          <!-- Recursive folder tree -->
          <FolderTreeNode
            v-for="child in rootSubfoldersArray"
            :key="child.path"
            :node="child"
            :current-path="currentPath"
            :expanded-folders="expandedFolders"
            :depth="1"
            @select="navigateTo"
            @toggle="toggleFolderExpansion"
          />
        </template>
      </div>

      <!-- Main area -->
      <div class="flex-1 flex flex-col overflow-hidden">

        <!-- Breadcrumb -->
        <div class="px-4 py-2 border-b border-gray-300 bg-white">
          <nav class="flex items-center gap-1 text-sm min-h-[1.5rem]">
            <button
              class="hover:underline font-medium"
              :class="currentPath ? 'text-primary' : 'text-gray-500 cursor-default'"
              @click="navigateTo('')"
            >
              All Files
            </button>
            <template v-for="(crumb, i) in breadcrumbSegments" :key="crumb.path">
              <i class="pi pi-chevron-right text-[10px] text-gray-400" />
              <button
                v-if="i < breadcrumbSegments.length - 1"
                class="text-primary hover:underline"
                @click="navigateTo(crumb.path)"
              >
                {{ crumb.label }}
              </button>
              <span v-else class="text-gray-500">{{ crumb.label }}</span>
            </template>
          </nav>
        </div>

        <!-- Card grid / empty state / loading -->
        <div class="flex-1 overflow-y-auto p-4">

          <!-- Loading skeleton grid -->
          <template v-if="isLoading">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                v-for="i in 12"
                :key="i"
                class="aspect-square bg-gray-100 animate-pulse rounded-lg"
              />
            </div>
          </template>

          <!-- Empty state -->
          <template v-else-if="currentSubfolders.length === 0 && currentFiles.length === 0">
            <slot name="empty-state">
              <div class="flex items-center justify-center h-48">
                <p class="text-gray-500">This folder is empty.</p>
              </div>
            </slot>
          </template>

          <!-- Card grid -->
          <template v-else>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

              <!-- Folder cards -->
              <div
                v-for="folder in currentSubfolders"
                :key="folder.path"
                class="relative aspect-square border border-gray-300 rounded-lg p-3 flex flex-col items-center justify-center hover:shadow-md cursor-pointer transition-shadow bg-white"
                @click="handleFolderCardClick(folder)"
              >
                <span
                  v-if="folderStatusMeta(folder)"
                  class="absolute top-1.5 right-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
                  :class="folderStatusMeta(folder).color"
                  :title="folderStatusMeta(folder).label"
                >
                  <i :class="[folderStatusMeta(folder).icon, 'text-base']" />
                </span>
                <i class="pi pi-folder text-5xl text-primary mb-2" />
                <p class="text-sm font-medium truncate w-full text-center m-0" :title="folder.name">
                  {{ folder.name }}
                </p>
                <span class="text-xs text-gray-400 mt-1">
                  {{ Object.keys(folder.subfolders).length + folder.files.length }} items
                </span>
              </div>

              <!-- File cards -->
              <div
                v-for="blob in currentFiles"
                :key="get(blob, idPath)"
                class="flex flex-col border border-gray-300 rounded-lg overflow-hidden hover:shadow-md cursor-pointer transition-shadow bg-white"
                @click="emit('file-click', blob)"
              >
                <!-- Preview area -->
                <div class="relative aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                  <BaseImageDisplay
                    v-if="get(blob, typePath)?.startsWith('image/')"
                    :url="get(blob, urlPath)"
                    size="w-full h-full"
                  />
                  <i v-else :class="[iconClassForBlob(blob), 'text-5xl text-gray-300']" />
                  <span
                    v-if="statusMetaFor(blob)"
                    class="absolute top-1.5 right-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
                    :class="statusMetaFor(blob).color"
                    :title="statusMetaFor(blob).label"
                  >
                    <i :class="[statusMetaFor(blob).icon, 'text-base']" />
                  </span>
                </div>

                <!-- Footer -->
                <div class="px-2 pt-2 pb-1.5 border-t border-gray-300">
                  <div class="flex items-center gap-1">
                    <p class="text-xs font-medium truncate flex-1 m-0" :title="get(blob, namePath)">
                      {{ get(blob, namePath) }}
                    </p>
                    <button
                      class="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                      title="Actions"
                      @click.stop="openCardMenu($event, blob)"
                    >
                      <i class="pi pi-ellipsis-h text-[11px]" />
                    </button>
                  </div>
                  <span class="text-xs text-gray-400">{{ formatBytes(get(blob, sizePath)) }}</span>
                </div>
              </div>

            </div>
          </template>

        </div>
      </div>
    </div>

    <!-- Shared card action menu (one instance, repositioned per click) -->
    <Menu ref="cardMenuRef" :model="cardMenuItems" popup />

    <!-- Details dialog -->
    <Dialog
      v-model:visible="detailsVisible"
      modal
      header="File Details"
      :style="{ width: '28rem' }"
      :draggable="false"
    >
      <template v-if="activeBlob">
        <dl class="divide-y divide-gray-100 text-sm">
          <div
            v-if="statusMetaFor(activeBlob)"
            class="flex items-center gap-2 py-2.5"
            :class="statusMetaFor(activeBlob).color"
          >
            <i :class="statusMetaFor(activeBlob).icon" />
            <span class="text-sm font-medium">{{ statusMetaFor(activeBlob).label }}</span>
          </div>
          <div class="flex py-2.5 gap-4">
            <dt class="w-24 flex-shrink-0 text-gray-500 font-medium">Name</dt>
            <dd class="flex-1 break-all text-gray-800">{{ get(activeBlob, namePath) }}</dd>
          </div>
          <div class="flex py-2.5 gap-4">
            <dt class="w-24 flex-shrink-0 text-gray-500 font-medium">Status</dt>
            <dd class="flex-1 text-gray-800">{{ get(activeBlob, statusPath) || '' }}</dd>
          </div>

          <!-- Blob source -->
          <div class="py-2.5">
            <p class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Blob record</p>
            <template v-if="hasBlobRow(activeBlob)">
              <div class="flex py-1 gap-4">
                <dt class="w-24 flex-shrink-0 text-gray-500">ID</dt>
                <dd class="flex-1 text-gray-800">{{ get(activeBlob, idPath) }}</dd>
              </div>
              <div class="flex py-1 gap-4">
                <dt class="w-24 flex-shrink-0 text-gray-500">Directory</dt>
                <dd class="flex-1 text-gray-800 break-all">{{ get(activeBlob, directoryPath) || '/' }}</dd>
              </div>
              <div class="flex py-1 gap-4">
                <dt class="w-24 flex-shrink-0 text-gray-500">Type</dt>
                <dd class="flex-1 text-gray-800">{{ get(activeBlob, typePath) || '' }}</dd>
              </div>
              <div class="flex py-1 gap-4">
                <dt class="w-24 flex-shrink-0 text-gray-500">Extension</dt>
                <dd class="flex-1 text-gray-800">{{ get(activeBlob, extPath) || '' }}</dd>
              </div>
              <div class="flex py-1 gap-4">
                <dt class="w-24 flex-shrink-0 text-gray-500">Created</dt>
                <dd class="flex-1 text-gray-800">{{ formatDate(get(activeBlob, createdAtPath)) }}</dd>
              </div>
            </template>
            <p v-else class="text-xs text-gray-400 italic">Not in blobs table.</p>
          </div>

          <!-- Disk source -->
          <div class="py-2.5">
            <p class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1.5">On disk</p>
            <template v-if="hasDiskFile(activeBlob)">
              <div class="flex py-1 gap-4">
                <dt class="w-24 flex-shrink-0 text-gray-500">Path</dt>
                <dd class="flex-1 text-gray-800 break-all">{{ get(activeBlob, keyPath) || '' }}</dd>
              </div>
              <div class="flex py-1 gap-4">
                <dt class="w-24 flex-shrink-0 text-gray-500">Size</dt>
                <dd class="flex-1 text-gray-800">{{ formatBytes(get(activeBlob, sizePath)) || '' }}</dd>
              </div>
              <div class="flex py-1 gap-4">
                <dt class="w-24 flex-shrink-0 text-gray-500">Last modified</dt>
                <dd class="flex-1 text-gray-800">{{ formatDate(get(activeBlob, updatedAtPath)) }}</dd>
              </div>
            </template>
            <p v-else class="text-xs text-gray-400 italic">
              {{ get(activeBlob, statusPath) === 'unverifiable' ? 'Cannot verify (external host/bucket).' : 'File missing on disk.' }}
            </p>
          </div>

          <div class="flex py-2.5 gap-4 items-start">
            <dt class="w-24 flex-shrink-0 text-gray-500 font-medium">URL</dt>
            <dd class="flex-1 flex items-start gap-2 min-w-0">
              <span class="flex-1 break-all text-gray-800 text-xs">{{ get(activeBlob, urlPath) || '' }}</span>
              <button
                v-if="get(activeBlob, urlPath)"
                class="flex-shrink-0 text-primary border border-primary rounded-md p-1.5 hover:bg-primary-50 transition-colors"
                title="Copy link"
                @click="copyToClipboard(activeBlob)"
              >
                <i class="pi pi-copy text-[11px]" />
              </button>
            </dd>
          </div>
        </dl>
      </template>
    </Dialog>

  </div>
</template>

<script setup>
/**
 * BaseFileManager
 *
 * Display-only file manager. Accepts a flat list of blob-shaped objects, derives a
 * folder hierarchy from each blob's `directory` value, and renders a sidebar accordion
 * tree alongside a card grid for the currently viewed folder. Backend-unaware, emits
 * click events for consumers to wire operations.
 *
 * @prop {Array}   blobs         Flat list of blob objects (required).
 * @prop {String}  idPath        Key path to each blob's unique id.          Default: 'id'
 * @prop {String}  namePath      Key path to the display name.               Default: 'name'
 * @prop {String}  urlPath       Key path to the file URL (used for image    Default: 'url'
 *                               preview and copy-to-clipboard).
 * @prop {String}  directoryPath Key path to the folder path string          Default: 'directory'
 *                               (e.g. 'products/images').
 * @prop {String}  typePath      Key path to the MIME type string.           Default: 'type'
 * @prop {String}  sizePath      Key path to the file size in bytes.         Default: 'size'
 * @prop {String}  extPath       Key path to the file extension string.      Default: 'ext'
 * @prop {String}  createdAtPath Key path to the created-at timestamp.       Default: 'created_at'
 * @prop {String}  updatedAtPath Key path to the updated-at timestamp.       Default: 'updated_at'
 * @prop {String}  existsPath    Key path to the per-blob backing-file       Default: 'exists'
 *                               existence flag. Resolves to one of
 *                               `true` / `false` / `null`. When `false`,
 *                               the card shows a missing-file badge and
 *                               the details dialog adds an explicit
 *                               "File is missing on disk" row. When `null`
 *                               or the field is absent, no badge is shown.
 * @prop {String}  initialPath   Folder to open on mount. '' = root.        Default: ''
 * @prop {Boolean} isLoading     Show skeleton UI while true.                Default: false
 * @prop {Array}   extraFolders  Folder path strings to inject as (possibly  Default: []
 *                               empty) navigable folder nodes, in addition
 *                               to those derived from `blobs`. Used for
 *                               not-yet-persisted ("virtual") folders.
 *
 * @emits file-click(blob)   A file card was clicked.
 * @emits folder-click(path) A folder card was clicked (fires before internal navigation).
 * @emits navigate(path)     Current folder changed (sidebar, card, or breadcrumb).
 *
 * @slot toolbar     Rendered above the breadcrumb, full width. Receives no slot props.
 *                   Intended for action buttons (upload, new folder, etc.).
 * @slot empty-state Rendered when the current folder has no children.
 *                   Defaults to a centred "This folder is empty." paragraph.
 */

import { computed, ref } from 'vue'
import { Dialog, Menu, Skeleton } from 'primevue'
import FolderTreeNode from './FolderTreeNode.vue'
import BaseImageDisplay from './BaseImageDisplay.vue'
import useUtils from '../composables/useUtils.js'
import useAlerts from '../composables/useAlerts.js'

const props = defineProps({
  blobs: { type: Array, required: true },
  idPath: { type: String, default: 'id' },
  namePath: { type: String, default: 'name' },
  urlPath: { type: String, default: 'url' },
  directoryPath: { type: String, default: 'directory' },
  typePath: { type: String, default: 'type' },
  sizePath: { type: String, default: 'size' },
  extPath: { type: String, default: 'ext' },
  createdAtPath: { type: String, default: 'created_at' },
  updatedAtPath: { type: String, default: 'updated_at' },
  existsPath: { type: String, default: 'exists' },
  statusPath: { type: String, default: 'status' },
  keyPath: { type: String, default: 'key' },
  initialPath: { type: String, default: '' },
  isLoading: { type: Boolean, default: false },
  extraFolders: { type: Array, default: () => [] },
})

const emit = defineEmits(['file-click', 'folder-click', 'navigate'])

const { get } = useUtils()

const currentPath = ref(props.initialPath)
const expandedFolders = ref(new Set(ancestorPaths(props.initialPath)))

// ── Tree building ──────────────────────────────────────────────────────────────

function buildTree(blobs) {
  const root = { name: 'All Files', path: '', subfolders: {}, files: [] }
  for (const blob of blobs) {
    let dir = get(blob, props.directoryPath)
    if (!dir || dir === '/') dir = ''
    else dir = dir.replace(/^\/+|\/+$/g, '')

    if (!dir) {
      root.files.push(blob)
      continue
    }

    const segments = dir.split('/')
    let node = root
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i]
      const path = segments.slice(0, i + 1).join('/')
      if (!node.subfolders[seg]) {
        node.subfolders[seg] = { name: seg, path, subfolders: {}, files: [] }
      }
      node = node.subfolders[seg]
    }
    node.files.push(blob)
  }

  // Inject virtual (not-yet-persisted) folders so they're visible and navigable
  // even before they contain any file.
  for (const folderPath of props.extraFolders) {
    const clean = (folderPath || '').replace(/^\/+|\/+$/g, '')
    if (!clean) continue
    const segments = clean.split('/')
    let node = root
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i]
      const path = segments.slice(0, i + 1).join('/')
      if (!node.subfolders[seg]) {
        node.subfolders[seg] = { name: seg, path, subfolders: {}, files: [] }
      }
      node = node.subfolders[seg]
    }
  }

  rollUpStatus(root)
  return root
}

// Aggregate each folder's status from descendant file statuses (FR-11).
// Rules: 'all-untracked' if every descendant file is disk_only; 'has-missing' if
// any db_only; 'has-untracked' if any disk_only (and not all); else 'ok'.
function rollUpStatus(node) {
  let total = 0, untracked = 0, missing = 0
  for (const f of node.files) {
    total++
    const s = get(f, props.statusPath)
    if (s === 'disk_only') untracked++
    else if (s === 'db_only') missing++
  }
  for (const child of Object.values(node.subfolders)) {
    rollUpStatus(child)
    total += child._fileCount
    untracked += child._untrackedCount
    missing += child._missingCount
  }
  node._fileCount = total
  node._untrackedCount = untracked
  node._missingCount = missing
  if (total === 0) node.status = 'ok'
  else if (missing > 0) node.status = 'has-missing'
  else if (untracked === total) node.status = 'all-untracked'
  else if (untracked > 0) node.status = 'has-untracked'
  else node.status = 'ok'
}

const FOLDER_STATUS_META = {
  'ok': null,
  'has-untracked': { icon: 'pi pi-server', color: 'text-amber-600', label: 'Contains untracked (disk-only) files' },
  'all-untracked': { icon: 'pi pi-server', color: 'text-amber-600', label: 'Entirely untracked (disk-only)' },
  'has-missing': { icon: 'pi pi-database', color: 'text-red-600', label: 'Contains files missing on disk' },
}

function folderStatusMeta(folder) {
  return FOLDER_STATUS_META[folder?.status] ?? null
}

const tree = computed(() => buildTree(props.blobs))

function getFolderAt(root, path) {
  if (!path) return root
  const segments = path.split('/')
  let node = root
  for (const seg of segments) {
    if (!node.subfolders[seg]) return root
    node = node.subfolders[seg]
  }
  return node
}

function recursiveFileCount(node) {
  let n = node.files.length
  for (const c of Object.values(node.subfolders)) n += recursiveFileCount(c)
  return n
}

const currentFolder = computed(() => getFolderAt(tree.value, currentPath.value))
const currentSubfolders = computed(() => Object.values(currentFolder.value.subfolders))
const currentFiles = computed(() => currentFolder.value.files)
const totalRootCount = computed(() => recursiveFileCount(tree.value))
const rootSubfoldersArray = computed(() => Object.values(tree.value.subfolders))

// ── Navigation ─────────────────────────────────────────────────────────────────

function ancestorPaths(path) {
  if (!path) return []
  const segments = path.split('/')
  return segments.map((_, i) => segments.slice(0, i + 1).join('/'))
}

function navigateTo(path) {
  currentPath.value = path
  const next = new Set(expandedFolders.value)
  for (const p of ancestorPaths(path)) next.add(p)
  expandedFolders.value = next
  emit('navigate', path)
}

function toggleFolderExpansion(path) {
  const next = new Set(expandedFolders.value)
  if (next.has(path)) next.delete(path)
  else next.add(path)
  expandedFolders.value = next
}

function handleFolderCardClick(folder) {
  emit('folder-click', folder.path)
  navigateTo(folder.path)
}

// Allow a parent (e.g. BaseMediaManager) to drive navigation programmatically,
// e.g. to jump into a just-created folder.
defineExpose({ navigateTo })

// ── Breadcrumb ─────────────────────────────────────────────────────────────────

const breadcrumbSegments = computed(() => {
  if (!currentPath.value) return []
  const segments = currentPath.value.split('/')
  return segments.map((label, i) => ({
    label,
    path: segments.slice(0, i + 1).join('/'),
  }))
})

// ── Card menu ──────────────────────────────────────────────────────────────────

const cardMenuRef = ref(null)
const activeBlob = ref(null)

const cardMenuItems = [
  {
    label: 'Copy Link',
    icon: 'pi pi-link',
    command: () => copyToClipboard(activeBlob.value),
  },
  {
    label: 'Details',
    icon: 'pi pi-info-circle',
    command: () => { detailsVisible.value = true },
  },
]

function openCardMenu(event, blob) {
  activeBlob.value = blob
  cardMenuRef.value.toggle(event)
}

// ── Details dialog ─────────────────────────────────────────────────────────────

const detailsVisible = ref(false)

// ── Clipboard ──────────────────────────────────────────────────────────────────

const { alertSuccess } = useAlerts()

function copyToClipboard(blob) {
  const url = get(blob, props.urlPath)
  if (!url) return
  navigator.clipboard.writeText(url).then(() => {
    alertSuccess('Link copied to clipboard.')
  })
}

// ── Reconciliation status ─────────────────────────────────────────────────────

const STATUS_META = {
  matched: null, // healthy: lives on disk and in the DB — no indicator
  disk_only: { icon: 'pi pi-server', color: 'text-amber-600', label: 'Untracked: on disk, no blob row' },
  db_only: { icon: 'pi pi-database', color: 'text-red-600', label: 'Missing: blob row, no file on disk' },
  unverifiable: { icon: 'pi pi-globe', color: 'text-sky-600', label: 'External: cannot verify against this disk' },
}

function hasBlobRow(blob) {
  const status = get(blob, props.statusPath)
  if (status === 'disk_only') return false
  return get(blob, props.idPath) != null
}

function hasDiskFile(blob) {
  const status = get(blob, props.statusPath)
  if (status === 'matched' || status === 'disk_only') return true
  if (status === 'db_only' || status === 'unverifiable') return false
  // No status field, fall back to exists
  return get(blob, props.existsPath) !== false
}

function statusMetaFor(blob) {
  const status = get(blob, props.statusPath)
  if (status && status in STATUS_META) return STATUS_META[status]
  // Back-compat: fall back to the legacy exists flag.
  if (get(blob, props.existsPath) === false) return STATUS_META.db_only
  return null
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function formatBytes(n) {
  if (!n) return ''
  const units = ['B', 'KB', 'MB', 'GB']
  let size = Number(n)
  let i = 0
  while (size >= 1024 && i < units.length - 1) { size /= 1024; i++ }
  return `${size.toFixed(i === 0 ? 0 : 1)} ${units[i]}`
}

function formatDate(value) {
  if (!value) return ''
  const d = new Date(value)
  return isNaN(d.getTime()) ? '' : d.toLocaleString()
}

function iconClassForBlob(blob) {
  const type = get(blob, props.typePath) ?? ''
  if (type.startsWith('video/')) return 'pi pi-video'
  if (type.startsWith('audio/')) return 'pi pi-volume-up'
  if (type === 'application/pdf') return 'pi pi-file-pdf'
  return 'pi pi-file'
}
</script>