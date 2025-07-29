<template>
  <div class="card">
    <input type="file" @change="handleInputChange"
           id="imageUpload"
           class="hidden"
           name="imageUpload"
           accept="image/*"
           ref="fileUploader">
    <div class="flex justify-center bg-gray-50 py-3  w-full">
      <img @click="handleImagePlaceholderClick"
           v-if="imagePreviewUrl"
           class="cursor-pointer"
           :class="[objectFit, aspectRatio, height]"
           :src="imagePreviewUrl">
      <img @click="handleImagePlaceholderClick"
           v-else-if="image"
           class="cursor-pointer"
           :class="[objectFit, aspectRatio, height]"
           :src="image">
      <div v-else class="flex items-center justify-center bg-gray-200 shadow-sm cursor-pointer"
           :class="[objectFit, aspectRatio, height]"
           @click="handleImagePlaceholderClick">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor"
             class="size-1/3">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import useAlerts from "@/composables/useAlerts.js";

const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  defaultImageUrl: {
    type: String,
    default: ''
  },
  aspectRatio: {
    type: String,
    default: 'aspect-[1/1]'
  },
  height: {
    type: String,
    default: 'h-72'
  },
  objectFit: {
    type: String,
    default: 'object-scale-down'
  },
  maxImageSize: {
    type: Number,
    default: 2 * 1024 * 1024
  }
})
const emit = defineEmits(['change'])
const fileUploader = ref()
const imagePreviewUrl = ref('')
const {alertError} = useAlerts()

function handleImagePlaceholderClick() {
  fileUploader.value.click()
}

function handleInputChange() {
  const newFile = fileUploader.value.files[0]
  if (newFile.size > props.maxImageSize) {
    alertError('Image size exceeds the maximum limit of 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = () => {
    imagePreviewUrl.value = reader.result
    emit('change', newFile)
  }
  reader.readAsDataURL(newFile)
}

onMounted(() => {
  if (props.defaultImageUrl && !props.image) {
    setImageFromUrl(props.defaultImageUrl)
  }
})

/**
 *
 * @param url
 * @description Use this method to set an image from a URL. Useful in case you want to display a default image
 * @returns {Promise<void>}
 */
async function setImageFromUrl(url) {
  try {
    const response = await fetch(url)
    const imageBlob = await response.blob()

    const filename = url.split('/').pop() || 'downloaded-image.jpg'
    const file = new File([imageBlob], filename, {
      type: imageBlob.type || 'image/jpeg'
    })

    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(file)

    if (fileUploader.value) {
      fileUploader.value.files = dataTransfer.files

      const reader = new FileReader()
      reader.onload = () => {
        imagePreviewUrl.value = reader.result
        emit('change', file)
      }
      reader.readAsDataURL(file)
    }
  } catch (error) {
    console.error('Error loading image from URL:', error)
  }
}

defineExpose({
  setImageFromUrl
})
</script>
