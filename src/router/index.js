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
                title: 'useGlobalLoader'
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
