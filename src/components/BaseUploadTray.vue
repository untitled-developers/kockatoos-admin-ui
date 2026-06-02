<template>
  <div class="border border-gray-300 rounded-lg bg-white shadow-lg flex flex-col w-96 max-h-[32rem]">

    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      <span class="text-base font-semibold text-gray-700">{{ headerLabel }}</span>
      <div class="flex items-center gap-1">
        <button
          v-if="allComplete"
          class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          title="Clear"
          @click="emit('clear')"
        >
          <i class="pi pi-check text-sm" />
        </button>
        <button
          class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          title="Close"
          @click="emit('close')"
        >
          <i class="pi pi-times text-sm" />
        </button>
      </div>
    </div>

    <!-- File list -->
    <ul class="flex-1 overflow-y-auto list-none m-0 p-0 divide-y divide-gray-100">
      <li v-for="file in files" :key="file.id" class="px-4 py-3">
        <div class="flex items-center gap-2.5">
          <i :class="[iconFor(file), statusColor(file), 'text-base flex-shrink-0']" />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate m-0" :title="file.name">{{ file.name }}</p>
            <p class="text-xs text-gray-400 m-0">{{ formatSize(file.size) }}</p>
          </div>
          <span class="text-xs font-medium flex-shrink-0" :class="statusColor(file)">{{ statusLabel(file) }}</span>
        </div>

        <!-- Per-file progress bar (uploading only) -->
        <div v-if="file.status === STATUS.UPLOADING" class="mt-1.5 h-1.5 w-full bg-gray-100 rounded overflow-hidden">
          <div class="h-full bg-primary transition-all duration-150" :style="{ width: (file.progress || 0) + '%' }" />
        </div>

        <!-- Failure reason -->
        <p v-if="file.status === STATUS.ERROR && file.errorMessage" class="text-xs text-red-600 mt-1.5 m-0">
          {{ file.errorMessage }}
        </p>
      </li>
    </ul>

    <!-- Batch summary -->
    <div v-if="allComplete" class="px-4 py-3 border-t border-gray-200 text-sm text-gray-600">
      {{ successCount }} uploaded<span v-if="errorCount > 0"> · <span class="text-red-600">{{ errorCount }} failed</span></span>
    </div>
  </div>
</template>

<script setup>
/**
 * BaseUploadTray
 *
 * Presentational, backend-unaware docked tray that shows per-file upload state.
 * The parent owns the file list and mutates each row's `status` / `progress`;
 * this component only renders. Statuses: 'pending', 'uploading', 'success', 'error'.
 *
 * @prop {Array} files  Rows of `{ id, name, size, status, progress, errorMessage }`.
 *
 * @emits close  The user dismissed the tray.
 * @emits clear  The user cleared a completed batch.
 */

import { computed } from 'vue'

const props = defineProps({
  files: { type: Array, default: () => [] },
})

const emit = defineEmits(['close', 'clear'])

const STATUS = {
  PENDING: 'pending',
  UPLOADING: 'uploading',
  SUCCESS: 'success',
  ERROR: 'error',
}

const successCount = computed(() => props.files.filter((f) => f.status === STATUS.SUCCESS).length)
const errorCount = computed(() => props.files.filter((f) => f.status === STATUS.ERROR).length)
const inFlightCount = computed(
  () => props.files.filter((f) => f.status === STATUS.PENDING || f.status === STATUS.UPLOADING).length,
)
const allComplete = computed(() => props.files.length > 0 && inFlightCount.value === 0)

const headerLabel = computed(() => {
  if (allComplete.value) return 'Upload complete'
  if (inFlightCount.value > 0) return `Uploading ${inFlightCount.value} of ${props.files.length}…`
  return 'Uploads'
})

function iconFor(file) {
  switch (file.status) {
    case STATUS.UPLOADING: return 'pi pi-spin pi-spinner'
    case STATUS.SUCCESS: return 'pi pi-check-circle'
    case STATUS.ERROR: return 'pi pi-times-circle'
    default: return 'pi pi-clock'
  }
}

function statusColor(file) {
  switch (file.status) {
    case STATUS.SUCCESS: return 'text-green-600'
    case STATUS.ERROR: return 'text-red-600'
    case STATUS.UPLOADING: return 'text-primary'
    default: return 'text-gray-400'
  }
}

function statusLabel(file) {
  switch (file.status) {
    case STATUS.UPLOADING: return `${file.progress || 0}%`
    case STATUS.SUCCESS: return 'Done'
    case STATUS.ERROR: return 'Failed'
    default: return 'Pending'
  }
}

function formatSize(bytes) {
  if (!bytes) return ''
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}
</script>
