import {defineStore} from "pinia";
import useFetch from "../composables/useFetch.js";
import {ref} from "vue";

export const useLanguagesStore = defineStore('languages', () => {
    const languages = ref([])
    const fetch = useFetch()
    const didLoadLanguages = ref(false)

    async function fetchLanguages(apiEndpoint = 'api/languages') {
        try {
            const response = await fetch.get(apiEndpoint, {
                params: {
                    sortBy: 'id',
                    sortAs: 'asc',
                }
            })

            languages.value = response.data.data
            didLoadLanguages.value = true
        } catch (err) {
            console.error('Error fetching languages:', err)
        }
    }


    return {languages, didLoadLanguages, fetchLanguages}
})