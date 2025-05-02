<template>
  <div ref="dropZoneRef" class="relative w-full" :class="{ 'min-h-[200px]': !compact }">
    <input type="file"
           class="hidden"
           accept="image/*"
           @change="handleFileSelect"
           multiple
           :key="inputKey"
           ref="fileInput">

    <Button :label="compact ? `Upload${uploadStatus}` : 'Upload'"
            icon="pi pi-cloud-upload"
            class="mb-2 w-full"
            :disabled="isUploading"
            @click="triggerFileInput"></Button>

    <!-- Compact mode: Just show number of files -->
    <div v-if="compact && files.length > 0" class="text-sm text-gray-600 text-center">
      {{ successCount }} file(s) uploaded successfully
      <span v-if="errorCount > 0" class="text-red-600 ml-1">
        ({{ errorCount }} failed)
      </span>
    </div>

    <!-- Standard mode: Dropzone and file previews -->
    <template v-if="!compact">
      <div v-if="files.length === 0"
           class="h-[200px] border-2 border-dashed border-gray-300 hover:border-gray-400 rounded-lg flex items-center text-gray-600 justify-center cursor-pointer transition-colors"
           @click="triggerFileInput">
        <div class="flex items-center gap-x-2">
          <i class="pi pi-cloud-upload text-xl"></i>
          <p class="text-lg m-0">
            Click here or drag and drop to upload
          </p>
        </div>
      </div>

      <ul v-else class="space-y-2 list-none p-0 m-0">
        <li v-for="file in files"
            :key="file.id"
            :class="[
                    'bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center',
                    file.status === STATUS.ERROR ? 'bg-red-50 border-red-200' : null,
                    file.status === STATUS.SUCCESS ? 'bg-green-50 border-green-200' : null
                ]">
          <img v-if="file.preview"
               :src="file.preview"
               class="w-[60px] h-[60px] object-cover rounded-xs mr-3"
               alt="preview">
          <div class="flex-1">
            <p class="font-medium m-0">{{ file.name }}</p>
            <p class="text-sm text-gray-500 my-1">{{ formatSize(file.size) }}</p>
            <div v-if="file.status === STATUS.ERROR" class="text-red-700 text-sm mt-1">
              {{ file.errorMessage || 'Please select a valid image under 8MB.' }}
            </div>
          </div>
          <div v-if="file.status === STATUS.UPLOADING" role="status">
            <svg aria-hidden="true"
                 class="size-8 text-gray-200 animate-spin fill-(--p-primary-600)"
                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"/>
              <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          <div v-else-if="file.status === STATUS.ERROR">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-8 text-red-600">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </div>
          <div v-else-if="file.status === STATUS.SUCCESS">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-8 text-green-600">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </div>
        </li>
      </ul>

      <div v-if="isOverDropZone"
           class="absolute inset-0 bg-white/90 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg z-10">
        <div class="text-center">
          <i class="pi pi-cloud-upload text-3xl animate-bounce"></i>
          <p class="text-lg text-gray-700 m-0">Drop files to upload</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useDropZone } from '@vueuse/core'
import Button from "primevue/button";

const emit = defineEmits([
  'upload-file',
  'upload-success',
  'upload-error',
  'file-removed',
  'all-uploads-complete'
])

const props = defineProps({
  maxFileSize: {
    type: Number,
    default: 8 * 1024 * 1024 // 8MB
  },
  allowedTypes: {
    type: Array,
    default: () => ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const STATUS = {
  UPLOADING: 'uploading',
  SUCCESS: 'success',
  ERROR: 'error'
}

const files = ref([])
const fileInput = ref(null)
const inputKey = ref(0)
const dropZoneRef = ref()
const previousUploadingCount = ref(0)

// Computed properties for compact mode
const successCount = computed(() => files.value.filter(f => f.status === STATUS.SUCCESS).length)
const errorCount = computed(() => files.value.filter(f => f.status === STATUS.ERROR).length)
const uploadingCount = computed(() => files.value.filter(f => f.status === STATUS.UPLOADING).length)
const isUploading = computed(() => uploadingCount.value > 0)
const uploadStatus = computed(() => {
  if (files.value.length === 0) return '';
  if (uploadingCount.value > 0) return ` (${uploadingCount.value} uploading...)`;
  return ` (${successCount.value})`;
})

// Watch for when uploads complete
watch(uploadingCount, (newCount, oldCount) => {
  previousUploadingCount.value = oldCount

  // Check if all uploads have completed (was uploading, now all done)
  if (oldCount > 0 && newCount === 0 && files.value.length > 0) {
    emit('all-uploads-complete', {
      totalFiles: files.value.length,
      successCount: successCount.value,
      errorCount: errorCount.value,
      files: files.value
    })
  }
})

// Only setup dropzone if not in compact mode
const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop: (droppedFiles) => {
    if (!props.compact && droppedFiles) {
      processFiles(droppedFiles)
    }
  },
  dataTypes: props.allowedTypes,
  multiple: true
})

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileSelect(e) {
  const selectedFiles = [...e.target.files]
  processFiles(selectedFiles)
  e.target.value = ''
  inputKey.value++
}

function validateFile(file) {
  if (!props.allowedTypes.includes(file.type)) {
    return {
      valid: false,
      message: `File type not allowed. Accepted formats: ${props.allowedTypes.map(type => type.split('/')[1]).join(', ')}`
    }
  }

  if (file.size > props.maxFileSize) {
    return {
      valid: false,
      message: `File is too large. Maximum size: ${formatSize(props.maxFileSize)}`
    }
  }

  return { valid: true }
}

async function processFiles(newFiles) {
  for (const file of newFiles) {
    const validation = validateFile(file)

    const fileObj = {
      id: generateUniqueId(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      preview: props.compact ? null : await createPreview(file),
      status: validation.valid ? STATUS.UPLOADING : STATUS.ERROR
    }

    if (!validation.valid) {
      fileObj.errorMessage = validation.message
    }

    files.value.push(fileObj)

    if (validation.valid) {
      // Emit event to parent component for handling the upload
      emit('upload-file', {
        file: fileObj,
        index: files.value.length - 1,
        onSuccess: () => updateFileStatus(fileObj.id, STATUS.SUCCESS),
        onError: (errorMessage) => updateFileStatus(fileObj.id, STATUS.ERROR, errorMessage)
      })
    }
  }
}

function updateFileStatus(id, status, errorMessage = null) {
  const index = files.value.findIndex(f => f.id === id)
  if (index !== -1) {
    files.value[index].status = status
    if (errorMessage) {
      files.value[index].errorMessage = errorMessage
    }

    if (status === STATUS.SUCCESS) {
      emit('upload-success', files.value[index])
    } else if (status === STATUS.ERROR) {
      emit('upload-error', files.value[index])
    }
  }
}

function removeFile(id) {
  const index = files.value.findIndex(f => f.id === id)
  if (index !== -1) {
    const removedFile = files.value[index]
    files.value.splice(index, 1)
    emit('file-removed', removedFile)
  }
}

function createPreview(file) {
  // Skip preview generation in compact mode
  if (props.compact) return null

  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.readAsDataURL(file)
  })
}

function formatSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function generateUniqueId() {
  return Date.now() + Math.floor(Math.random() * 1000)
}
</script>