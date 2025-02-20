<template>

  <div class="flex">
    <div>
      <nav v-if="!isCollapsed"
           class="border flex border-right bg-white border-gray-300 w-60 shadow-md h-screen sticky">
        <div v-if="!isCollapsed" class="flex flex-col w-full h-full">
          <div class="flex w-full justify-center h-18 shrink-0  pl-4 py-2 pr-3 mb-4">
            <div>
              <slot name="logo"></slot>
            </div>
          </div>
          <div>
            <div class="card flex justify-center nav-menu">
              <PanelMenu :model="navigationItems" class="w-full md:w-80" :pt="{
                panel: {
                  style: {
                    border: 'none'
                  }
                }
              }">
                <template #item="{ item }">
                  <router-link v-if="item.route" v-slot="{ navigate }" :to="item.route" active-class="active-link">
                    <span class="border-l border-gray-300 hover:border-gray-400 flex items-center cursor-pointer dark:text-surface-0 px-4 py-2"
                          @click="navigate">
                        <span class="font-medium">{{ item.label }}</span>
                    </span>
                  </router-link>
                  <div v-else
                       class="flex border-none items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2">
                    <span class="font-medium">{{ item.label }}</span>
                    <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto"/>
                  </div>
                </template>
              </PanelMenu>
            </div>
          </div>
          <div class="mt-auto text-right p-5">

          </div>
        </div>
      </nav>
    </div>
    <div class="flex-grow max-h-screen overflow-auto">
      <div class="px-2 py-2 pl-4 flex bg-white border-b border-gray-300 shadow-md  mb-4 items-center">
        <Button aria-label="Collapse navbar" text @click="handleToggleNavbar" icon="pi pi-bars"></Button>
        <h2 class="text-lg font-bold">{{ route.meta?.title }}</h2>
        <div class="ml-auto flex items-center gap-x-2">
          <Button type="button"
                  icon="pi pi-bell"
                  rounded
                  severity="info"
                  size="large"
                  aria-label="User Menu"/>
          <div class="card flex justify-content-center justify-end">
            <Button type="button"
                    icon="pi pi-user"
                    rounded
                    size="large"
                    aria-label="User Menu"
                    @click="toggle"/>
            <Popover ref="userDropdown">
              <ul class="flex flex-col gap-y-2 p-2">
                <li>
                  <Button @click="handleLogout" class="w-full" text label="Logout" icon="pi pi-sign-out"/>
                </li>
              </ul>
            </Popover>
          </div>
        </div>
      </div>

      <main class="px-4 bg-gray-100">
        <slot name="main"></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Button from "primevue/button";
import Popover from "primevue/popover";
import PanelMenu from "primevue/panelmenu";
import {useRoute} from "vue-router";

const props = defineProps({
  navigationItems: {
    type: Array,
    required: true
  },
})
const isCollapsed = ref(false);
const route = useRoute()

function handleToggleNavbar() {
  isCollapsed.value = !isCollapsed.value;
}



const userDropdown = ref();

const toggle = (event) => {
  userDropdown.value.toggle(event);
}

function handleLogout() {
  logout().then(() => {
    location.replace('/login')
  })
}
async function logout() {
  return window.axios.post('api/logout')
}


</script>

<style scoped>
.nav-menu .p-panelmenu-panel {
  @apply border-none
}
.active-link span {
  @apply bg-[--p-primary-50] text-[--p-primary-800] font-semibold border-[--p-primary-400]
}

</style>
