import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import App from "../App.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: App,
            redirect: '/playground',
        },
        {
            path: '/base-form',
            name: 'base-form',
            component: () => import('../views/BaseForm/BaseFormView.vue'),
        },
        {
            path: '/base-input-container',
            name: 'base-input-container',
            component: () => import('../views/BaseInputContainer/BaseInputContainerView.vue'),
        },
        {
            path: '/use-global-loader',
            name: 'useGlobalLoader',
            component: () => import('../views/UseGlobalLoader/UseGlobalLoaderView.vue'),
            meta: {
                title: 'useGlobalLoader',
                url: "https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useGlobalLoader.js",
                description: 'Displays a loader on top of the entire admin panel.',
                tags: [
                    'loader',
                    'global',
                ]
            }
        },
        {
            path: '/base-edit-dialog',
            name: 'BaseEditDialog',
            component: () => import('../views/BaseEditDialog/BaseEditDialogView.vue'),
            meta: {
                title: 'BaseEditDialog',
                url: "https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseEditDialog.vue",
                description: 'Dialog component designed to work with BaseCrudTable for adding, editing, or viewing table records',
                tags: [
                    'dialog',
                    'crud',
                    'table',
                ]
            }
        },
        {
            path: '/functions',
            name: 'functions',
            component: () => import('../views/Functions/FunctionsView.vue'),
        }

    ],
})

export default router
