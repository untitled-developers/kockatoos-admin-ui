import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLoaderStore = defineStore('loader', () => {
    const isLoading = ref(false)
    const message = ref('')

    function startLoader(customMessage) {
        isLoading.value = true
        message.value = customMessage
    }

    function stopLoader() {
        isLoading.value = false
        message.value = ''
    }

    return {isLoading, startLoader, stopLoader, message}
})
