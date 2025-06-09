import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    base: '/admin-ui/',
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss()
    ],
})
