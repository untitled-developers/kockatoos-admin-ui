<template>
  <BaseApp>
    <BaseMainLayout :navigation-items="items">
      <template #logo>
        <img src="https://cdn2.thecatapi.com/images/MTczNzcxNA.jpg" class="h-32 w-auto">
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </BaseMainLayout>
  </BaseApp>
</template>
<script setup>
import Playground from "./views/Playground.vue";
import BaseApp from "./components/BaseApp.vue";
import {ref} from "vue";
import BaseMainLayout from "./components/BaseMainLayout.vue";

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
    label: 'Management',
    type: 'heading'
  },
  // {
  //   label: 'Dropdown test',
  //   items: [
  //     {
  //       label: 'Test Page',
  //       items: [
  //         {
  //           label: 'Test Page',
  //           route: {
  //             name: 'test-page'
  //           }
  //         },
  //         {
  //           label: 'Playground',
  //           route: {
  //             name: 'playground'
  //           },
  //         },
  //         {
  //           label: 'Test Page',
  //           route: {
  //             name: 'test-page'
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       label: 'Playground',
  //       route: {
  //         name: 'playground'
  //       },
  //     },
  //     {
  //       label: 'Test Page',
  //       route: {
  //         name: 'test-page'
  //       }
  //     }
  //   ]
  // },
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
  {
    label: 'Management',
    type: 'heading'
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
