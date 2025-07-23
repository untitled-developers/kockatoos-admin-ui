<template>
    <div>
        <input
            type="file"
            @change="handleInputChange"
            id="videoUpload"
            class="hidden"
            name="videoUpload"
            accept="video/*"
            ref="fileUploader"
            :max="maxUploadSize"
        >

        <div v-if="selectedFile" class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <div class="flex justify-between mb-2">
                <span class="font-semibold text-gray-700">File Name:</span>
                <span class="text-gray-600 break-all">{{ selectedFile.name }}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span class="font-semibold text-gray-700">File Size:</span>
                <span class="text-gray-600 break-all">{{ formatFileSize(selectedFile.size) }}</span>
            </div>
            <div class="flex justify-between mb-0">
                <span class="font-semibold text-gray-700">File Type:</span>
                <span class="text-gray-600 break-all">{{ selectedFile.type }}</span>
            </div>
        </div>

        <div v-if="videoPreviewUrl || videoUrl" class="mt-6">
            <div class="relative video-display">
                <video
                    :src="videoPreviewUrl || videoUrl"
                    controls
                    preload="metadata"
                    class="w-full max-h-96 rounded-lg bg-black"
                    @loadedmetadata="onVideoLoaded"
                >
                    Your browser does not support the video tag.
                </video>

                <div
                    class="overlay flex absolute inset-0 h-10  items-center justify-center bg-black bg-opacity-50  cursor-pointer rounded-lg"
                    @click="clickVideoInput"
                >
                    <div class="text-white text-center flex items-center gap-x-2">
                        <i class="pi pi-video text-2xl  block"></i>
                        <span>Click to change video</span>
                    </div>
                </div>
            </div>

            <div v-if="videoDuration" class="mt-2 p-2 bg-gray-50 rounded text-center">
                <span class="text-gray-600 font-medium">Duration: {{ formatDuration(videoDuration) }}</span>
            </div>
        </div>

        <div v-else class="mt-6">
            <div
                class="flex flex-col items-center justify-center bg-gray-50 border text-(--p-primary-600)  border-gray-300 rounded-lg p-8 text-pr cursor-pointer hover:bg-gray-100 transition-colors"
                @click="clickVideoInput"
            >
                <i class="pi pi-video text-4xl text-(--p-primary-800) mb-4"></i>
                <p class="text-(--p-primary-600) text-center">Click here to select a video file</p>
                <p class="text-(--p-primary-600)  mt-2">Supports: MP4, WEBM (Max size:
                    {{ formatFileSize(maxUploadSize) }})</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Button} from "primevue";
import {ref, onMounted, onUnmounted} from 'vue'
import useAlerts from "../composables/useAlerts.js";

// Props
const props = defineProps({
    videoUrl: {
        type: String,
        default: ''
    },
    defaultVideoUrl: {
        type: String,
        default: ''
    },
    maxUploadSize: {
        type: Number,
        default: 31457280 // 30MB in bytes
    }
})

const emit = defineEmits(['change'])
const {alertError} = useAlerts()
const fileUploader = ref(null)
const selectedFile = ref(null)
const videoPreviewUrl = ref('')
const videoDuration = ref(null)

function clickVideoInput() {
    if (fileUploader.value) {
        fileUploader.value.click()
    }
}

function handleInputChange() {
    const newFile = fileUploader.value?.files[0]

    if (!newFile) return

    // Validate file size
    if (newFile.size > props.maxUploadSize) {
        alertError(`File size exceeds maximum allowed size of ${formatFileSize(props.maxUploadSize)}`)
        return
    }

    // Validate file type
    if (!newFile.type.startsWith('video/')) {
        alertError('Please select a valid video file')
        return
    }

    selectedFile.value = newFile

    // Create preview URL
    const reader = new FileReader()
    reader.onload = function () {
        // Clean up previous preview URL
        if (videoPreviewUrl.value) {
            URL.revokeObjectURL(videoPreviewUrl.value)
        }
        videoPreviewUrl.value = reader.result
        emit('change', newFile)
    }
    reader.readAsDataURL(newFile)
}

function onVideoLoaded(event) {
    videoDuration.value = event.target.duration
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function formatDuration(seconds) {
    if (!seconds) return '0:00'

    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    } else {
        return `${minutes}:${secs.toString().padStart(2, '0')}`
    }
}

function getFilenameFromUrl(url) {
    if (!url) return ''
    return url.split('/').pop() || 'video.mp4'
}

/**
 * Set video from URL - useful for loading default videos
 * @param {string} url - The video URL to load
 */
async function setVideoFromUrl(url) {
    try {
        const response = await fetch(url)
        const videoBlob = await response.blob()

        const filename = url.split('/').pop() || 'downloaded-video.mp4'
        const file = new File([videoBlob], filename, {
            type: videoBlob.type || 'video/mp4'
        })

        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(file)

        if (fileUploader.value) {
            fileUploader.value.files = dataTransfer.files
            selectedFile.value = file

            const reader = new FileReader()
            reader.onload = function () {
                videoPreviewUrl.value = reader.result
                emit('change', file)
            }
            reader.readAsDataURL(file)
        }
    } catch (error) {
        console.error('Error loading video from URL:', error)
        alertError('Failed to load video from URL')
    }
}

// Lifecycle
onMounted(function () {
    if (props.defaultVideoUrl && !props.videoUrl) {
        setVideoFromUrl(props.defaultVideoUrl)
    }
})

onUnmounted(function () {
    if (videoPreviewUrl.value) {
        URL.revokeObjectURL(videoPreviewUrl.value)
    }
})

defineExpose({
    setVideoFromUrl
})
</script>

<style scoped>

.overlay {
    opacity: 0;
    transition: opacity 0.2s ease;
}

.video-display:hover .overlay {
    opacity: 1;
}
</style>
