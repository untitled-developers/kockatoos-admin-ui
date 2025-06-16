// define store syntax
import {defineStore} from 'pinia'
import {ref} from "vue";

export const useDocsStore = defineStore('docs', () => {
        const docsList = ref([
            {
                route: {
                    name: 'useGlobalLoader',
                },
                title: 'useGlobalLoader',
                description: 'Displays a loader on top of the entire admin panel.',
            }

        ])


        return {
            docsList
        }

    }
)