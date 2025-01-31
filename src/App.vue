<template>
  <BaseApp>
    <BaseSideLayout :navigation-items="items" dark-side-bar>
      <template #logo>
        <img src="https://cdn2.thecatapi.com/images/MTczNzcxNA.jpg" class="h-18 w-auto">
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </BaseSideLayout>
  </BaseApp>
</template>
<script setup>
import Playground from "./views/Playground.vue";
import BaseApp from "./components/BaseApp.vue";
import BaseSideLayout from "./components/BaseSideLayout.vue";
import {ref} from "vue";

const items = ref([
  {
    label: 'Playground',
    route: {
      name: 'playground'
    },
  },
  {
    label: 'Test Page',
    route: {
      name: 'test-page'
    }
  },
  {
    label: 'Dropdown test',
    items: [
      {
        label: 'Test Page',
        route: {
          name: 'test-page'
        }
      },
      {
        label: 'Playground',
        route: {
          name: 'playground'
        },
      },
      {
        label: 'Test Page',
        route: {
          name: 'test-page'
        }
      }
    ]
  },
  {
    label: 'Dropdown test2',
    items: [
      {
        label: 'Test Page',
        route: {
          name: 'test-page'
        }
      },
      {
        label: 'Playground',
        route: {
          name: 'playground'
        },
      },
      {
        label: 'Test Page',
        route: {
          name: 'test-page'
        }
      }
    ]
  },
]);
</script>
<style scoped>

</style>
