<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-800">BaseFileManager Playground</h1>
        <div class="flex gap-2">
          <Button
            :label="isLoading ? 'Stop Loading' : 'Simulate Loading'"
            :icon="isLoading ? 'pi pi-stop' : 'pi pi-spin pi-spinner'"
            :severity="isLoading ? 'danger' : 'secondary'"
            @click="isLoading = !isLoading"
          />
        </div>
      </div>

      <div class="h-[700px]">
        <BaseFileManager
          :blobs="sampleBlobs"
          :is-loading="isLoading"
          @file-click="onFileClick"
          @folder-click="onFolderClick"
          @navigate="onNavigate"
        >
          <template #toolbar>
            <div class="flex items-center gap-2">
              <Button label="Upload" icon="pi pi-upload" size="small" />
              <Button label="New Folder" icon="pi pi-folder-plus" size="small" severity="secondary" />
            </div>
          </template>
        </BaseFileManager>
      </div>

      <div v-if="log.length > 0" class="bg-white border rounded-lg p-4">
        <p class="text-sm font-semibold text-gray-600 mb-2">Event Log</p>
        <ul class="space-y-1">
          <li v-for="(entry, i) in log" :key="i" class="text-xs font-mono text-gray-500">{{ entry }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import BaseFileManager from '../../components/BaseFileManager.vue'

const isLoading = ref(false)
const log = ref([])

function addLog(msg) {
  log.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`)
  if (log.value.length > 20) log.value.pop()
}

function onFileClick(blob) {
  addLog(`file-click: ${blob.name} (${blob.type})`)
}

function onFolderClick(path) {
  addLog(`folder-click: "${path}"`)
}

function onNavigate(path) {
  addLog(`navigate: "${path || '/'}"`)
}

const sampleBlobs = [
  // Root
  { id: 1,  name: 'readme.md',       url: null,                            directory: null,              type: 'text/markdown',    size: 1024,    ext: 'md',  created_at: '2025-11-12T08:30:00Z', updated_at: '2025-11-12T09:00:00Z', exists: true },
  { id: 2,  name: 'logo.png',        url: 'https://picsum.photos/seed/a/400', directory: null,           type: 'image/png',        size: 45000,   ext: 'png', created_at: '2025-11-13T10:15:00Z', updated_at: '2025-11-13T10:20:00Z', exists: true },
  // blobs/
  { id: 3,  name: 'report.pdf',      url: null,                            directory: 'blobs',           type: 'application/pdf',  size: 102400,  ext: 'pdf', created_at: '2025-11-14T11:00:00Z', updated_at: '2025-11-14T11:05:00Z', exists: true },
  { id: 4,  name: 'photo.jpg',       url: 'https://picsum.photos/seed/b/400', directory: 'blobs',        type: 'image/jpeg',       size: 230400,  ext: 'jpg', created_at: '2025-11-15T12:30:00Z', updated_at: '2025-11-15T12:35:00Z', exists: true },
  { id: 5,  name: 'promo.mp4',       url: null,                            directory: 'blobs',           type: 'video/mp4',        size: 5242880, ext: 'mp4', created_at: '2025-11-16T13:45:00Z', updated_at: '2025-11-16T13:50:00Z', exists: false },
  { id: 6,  name: 'jingle.mp3',      url: null,                            directory: 'blobs',           type: 'audio/mpeg',       size: 3145728, ext: 'mp3', created_at: '2025-11-17T14:00:00Z', updated_at: '2025-11-17T14:10:00Z', exists: true },
  // products/images/
  { id: 7,  name: 'product-1.jpg',   url: 'https://picsum.photos/seed/c/400', directory: 'products/images', type: 'image/jpeg',   size: 125000,  ext: 'jpg', created_at: '2025-11-18T15:20:00Z', updated_at: '2025-11-18T15:25:00Z', exists: true },
  { id: 8,  name: 'product-2.jpg',   url: 'https://picsum.photos/seed/d/400', directory: 'products/images', type: 'image/jpeg',   size: 118000,  ext: 'jpg', created_at: '2025-11-19T16:00:00Z', updated_at: '2025-11-19T16:05:00Z', exists: null },
  { id: 9,  name: 'product-3.png',   url: 'https://picsum.photos/seed/e/400', directory: 'products/images', type: 'image/png',    size: 200000,  ext: 'png', created_at: '2025-11-20T08:00:00Z', updated_at: '2025-11-20T08:30:00Z', exists: true },
  { id: 10, name: 'banner.jpg',      url: 'https://picsum.photos/seed/f/400', directory: 'products/images', type: 'image/jpeg',   size: 350000,  ext: 'jpg', created_at: '2025-11-21T09:15:00Z', updated_at: '2025-11-21T09:20:00Z', exists: true },
  // products/manuals/
  { id: 11, name: 'manual-a.pdf',    url: null,                            directory: 'products/manuals',type: 'application/pdf',  size: 2097152, ext: 'pdf', created_at: '2025-11-22T10:30:00Z', updated_at: '2025-11-22T10:35:00Z', exists: true },
  { id: 12, name: 'manual-b.pdf',    url: null,                            directory: 'products/manuals',type: 'application/pdf',  size: 1572864, ext: 'pdf', created_at: '2025-11-23T11:45:00Z', updated_at: '2025-11-23T11:50:00Z', exists: true },
  // users/avatars/
  { id: 13, name: 'avatar-alice.jpg',url: 'https://picsum.photos/seed/g/400', directory: 'users/avatars', type: 'image/jpeg',    size: 25000,   ext: 'jpg', created_at: '2025-11-24T12:00:00Z', updated_at: '2025-11-24T12:05:00Z', exists: true },
  { id: 14, name: 'avatar-bob.jpg',  url: 'https://picsum.photos/seed/h/400', directory: 'users/avatars', type: 'image/jpeg',    size: 32000,   ext: 'jpg', created_at: '2025-11-25T13:15:00Z', updated_at: '2025-11-25T13:20:00Z', exists: true },
  { id: 15, name: 'avatar-carol.png',url: 'https://picsum.photos/seed/i/400', directory: 'users/avatars', type: 'image/png',     size: 28000,   ext: 'png', created_at: '2025-11-26T14:30:00Z', updated_at: '2025-11-26T14:35:00Z', exists: true },
]
</script>