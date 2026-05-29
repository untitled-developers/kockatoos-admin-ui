<template>
  <BaseFileManager
    :blobs="filteredBlobs"
    :is-loading="isLoading"
    directory-path="tree_directory"
    status-path="status"
    key-path="key"
    @file-click="(b) => emit('file-click', b)"
    @folder-click="(p) => emit('folder-click', p)"
    @navigate="(p) => emit('navigate', p)"
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
      </div>
    </template>
    <template v-if="$slots['empty-state']" #empty-state>
      <slot name="empty-state" />
    </template>
  </BaseFileManager>
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
 * The toolbar exposes Source and Status filters (FR-5). "Disk only" the
 * *source* means every entry physically present on disk (matched + disk_only);
 * "disk-only" the *status* means only untracked files.
 *
 * @emits file-click(blob)
 * @emits folder-click(path)
 * @emits navigate(path)
 *
 * @slot toolbar     Extra toolbar content rendered after the filters.
 * @slot empty-state
 */

import { computed, onMounted, ref } from 'vue'
import { SelectButton, Dropdown } from 'primevue'
import BaseFileManager from './BaseFileManager.vue'
import useMediaApi from '../composables/useMediaApi.js'

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

const blobs = ref([])
const isLoading = ref(true)
const sourceFilter = ref('all')
const statusFilter = ref('all')

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

onMounted(async () => {
  try {
    const { get } = useMediaApi()
    const response = await get({ paginate: false, reconcile: 1 })
    blobs.value = response.data?.data ?? []
  } finally {
    isLoading.value = false
  }
})
</script>
