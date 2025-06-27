// define store syntax
import {defineStore} from 'pinia'
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

export const useDocsStore = defineStore('docs', () => {
        const router = useRouter()

        // Get all routes and map them to docsList format
        const docsList = computed(() => {
            return router.getRoutes()
                .filter(route => route.meta?.title && route.meta?.description) // Only include routes with title and description
                .map(route => ({
                    route: {
                        name: route.name,
                    },
                    title: route.meta.title,
                    description: route.meta.description,
                    tags: route.meta.tags || [], // Default to empty array if no tags
                }))
        })


        return {
            docsList
        }

    }
)