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
        },
        {
            path: '/test-page',
            name: 'test-page',
            component: () => import('../views/TestPage.vue'),
        }

    ],
})

export default router
