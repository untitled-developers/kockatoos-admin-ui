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
            path: '/playground',
            name: 'playground',
            component: () => import('../views/Playground.vue'),
            meta: {
                title: 'Payground'
            }
        },
        {
            path: '/test-page',
            name: 'test-page',
            component: () => import('../views/TestPage.vue'),
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
        }

    ],
})

export default router
