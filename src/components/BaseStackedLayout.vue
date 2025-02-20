<template>
  <div class="border-b border-[--p-primary-300] rounded-md pb-5 sm:pb-0 bg-white">
    <div class="flex items-center justify-between px-4 py-4">
      <slot name="title"></slot>
      <div>
        <slot name="action"></slot>
      </div>
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
                  :class="['py-4 pl-0', isRouteActive(item.route.name) ? 'text-[--p-primary-700] bg-[--p-primary-50] font-medium transition-all ease-out duration-300 scale-110' : '']"
                  :href="href"
                  v-bind="props.action"
                  @click="navigate">
                <span :class="item.icon"/>
                <span>{{ item.label }}</span>
              </a>
            </router-link>
            <a class="py-4" v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <span :class="item.icon"/>
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