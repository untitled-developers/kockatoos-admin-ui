<template>
  <div class="border-b shadow-md border-gray-300 pb-5 sm:pb-0 bg-white">
    <div>
      <slot name="content"></slot>
    </div>

    <div class="mt-3 sm:mt-4">
      <div>
        <Menubar :model="navigationItems" :pt="menuRef">
          <template #item="{ item, props, hasSubmenu }">
            <router-link v-if="item.route"
                         v-slot="{ href, navigate }"
                         :to="item.route"
                         custom>
              <a
                  v-ripple
                  :class="['py-4 px-4', isRouteActive(item.route.name) ? 'border-b bg-[--p-primary-50] text-[--p-primary-800] font-semibold border-[--p-primary-400]' : '']"
                  :href="href"
                  v-bind="props.action"
                  @click="navigate">
                <span>{{ item.label }}</span>
              </a>
            </router-link>
            <a class="py-4 px-4" v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <span>{{ item.label }}</span>
              <span v-if="hasSubmenu" class="pi  pi-fw pi-angle-down"/>
            </a>
          </template>
        </Menubar>
      </div>
    </div>
  </div>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
//TODO do some stlign improvements
import {ref} from "vue";
import {Menubar} from "primevue";
import {useRoute} from "vue-router";

const props = defineProps({
  navigationItems: {
    type: Array,
    required: true
  },
})
const route = useRoute()

function isRouteActive(name) {
  return name === route.name
}

const menuRef = ref({
  root: {
    style: {
      padding: '0px 16px',
      borderRadius: 0,
      border: 'none',

    }
  },
  rootList:{
    style: {
      rowGap: 0,
      columnGap: 0
    }
  },
  itemContent: {
    style: {
      borderRadius: 0
    }
  }
})

</script>

<style scoped>

</style>