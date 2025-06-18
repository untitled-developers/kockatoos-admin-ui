<template>
  <BaseApp>
    <BaseMainLayout :navigation-items="items">
      <template #top-bar-center>
        <BaseDocSearch></BaseDocSearch>
      </template>
      <template #logo>
        <img src="/logo.png" class="h-32 w-auto">
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </BaseMainLayout>
  </BaseApp>
</template>
<script setup>
import BaseApp from "./components/BaseApp.vue";
import { ref} from "vue";
import BaseMainLayout from "./components/BaseMainLayout.vue";
import BaseDocSearch from "./components/BaseDocSearch.vue";


const items = ref([
  {
    label: 'Forms',
    items: [
      {
        label: 'BaseForm',
        route: {
          name: 'base-form'
        }
      },
      {
        label: 'BaseInputContainer',
        route: {
          name: 'base-input-container'
        }
      }
    ]
  },
  {
    label: 'Functions',
    items: [
      {
        label: 'useGlobalLoader',
        route: {
          name: 'useGlobalLoader'
        }
      }
    ]
  }
]);
</script>
<style scoped>

</style>
