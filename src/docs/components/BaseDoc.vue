<template>
  <div class="overflow-hidden rounded-lg bg-white shadow px-6 py-3">
    <div class="py-4">
      <div class="flex items-center gap-3">
        <h2 class="text-2xl font-bold">
          {{ title }}
        </h2>
        <a v-if="url"
           :href="url"
           target="_blank"
           rel="noopener noreferrer"
           class="text-blue-600 hover:text-blue-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>

        </a>
      </div>
    </div>
    <BaseDocDescription class="mb-8">
      {{ description }}
    </BaseDocDescription>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import BaseDocDescription from "./BaseDocDescription.vue";
import {useRoute} from "vue-router";

const route = useRoute()

const title = route.meta?.title || "YOU HAVEN'T SET A TITLE IN THE ROUTE META. SHAME!";
const description = route.meta?.description || "YOU HAVEN'T SET A DESCRIPTION IN THE ROUTE META. SHAME!";
const url = route.meta?.url;
</script>

<style scoped>
</style>