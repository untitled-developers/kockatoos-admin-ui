<template>
  <Drawer v-model:visible="isMobileMenuOpen" header="Menu">
    <PanelMenu :model="navigationItems" multiple class="w-full" :pt="{
          panel:{
            style: {
              border: 'none'
            }
          }
        }">
      <template #item="{ item }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" active-class="active-link">
          <a v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
             :href="href" @click="navigate">
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
           :href="item.url" :target="item.target">
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto"/>
        </a>
      </template>
    </PanelMenu>
  </Drawer>
  <div class="flex min-h-screen">
    <!-- Sidebar Navigation -->
    <nav
        :class="['w-64 flex-none border-r border-[--p-primary-300] sticky top-0 h-screen sm:block hidden', darkSideBar ? 'bg-[--sidebar-dark-bg]' : '']">
      <div class="flex items-center px-4 py-2">
        <slot name="logo"></slot>
      </div>
      <div class="mt-4">
        <PanelMenu :model="navigationItems" multiple class="w-full" :pt="{
          panel:{
            style: {
              border: 'none',
              background: darkSideBar ? 'var(--sidebar-dark-nav-bg)' : 'auto'
            }
          },
          headerContent: {
            class: darkSideBar ? 'hover:bg-[--sidebar-dark-nav-hover-bg] focus:bg-[--sidebar-dark-nav-hover-bg]' : ''
          },
          itemContent: {
            class: darkSideBar ? 'hover:bg-[--sidebar-dark-nav-hover-bg] focus:bg-[--sidebar-dark-nav-hover-bg]' : ''
          }
        }">
          <template #item="{ item }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route"
                         :active-class="darkSideBar ? 'active-dark-sidebar-link' : 'active-link'">
              <a v-ripple
                 :class="['flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2', darkSideBar ? 'text-white' : '']"
                 :href="href" @click="navigate">
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </router-link>
            <a v-else v-ripple
               :class="['flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2', darkSideBar ? 'text-white' : '']"
               :href="item.url" :target="item.target">
              <span class="ml-2">{{ item.label }}</span>
              <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto"/>
            </a>
          </template>
        </PanelMenu>
      </div>
    </nav>

    <main
        class="flex-1 flex flex-col min-h-screen bg-gradient-to-br to-[--p-primary-50] from-gray-100 dark:from-gray-800 dark:to[--p-primary-50]">
      <header class="bg-white border-b border-[--p-primary-300] pl-3 pr-4 flex items-center">
        <Button class="block sm:hidden" @click="handleMobileMenuToggle" icon="pi pi-bars" text></Button>
        <div>
          {{ route.name }}
        </div>
        <div class="ml-auto flex gap-x-2 py-1">
          <!--          <Button @click="toggleDarkMode"-->
          <!--                  rounded-->
          <!--                  :severity="isDarkMode ?  'contrast':'warn'"-->
          <!--                  :icon="isDarkMode ? 'pi pi-moon': 'pi pi-sun'"/>-->
          <Button type="button"
                  icon="pi pi-bell"
                  rounded
                  size="large"
                  severity="info"
                  aria-label="User Menu"
                  @click="toggleNotificationPanel"/>
          <Popover ref="notificationPanel">
            <div class="p-2 text-sm">
              Nothing to see here!
            </div>

          </Popover>
          <Button type="button"
                  icon="pi pi-user"
                  rounded
                  size="large"
                  aria-label="User Menu"
                  @click="toggleUserMenuPanel"/>
          <Popover ref="userMenuPanel">
            <ul class="flex flex-col gap-y-2 p-2">

              <li>
                <Button @click="handleLogout" class="w-full" text label="Logout" icon="pi pi-sign-out"/>
              </li>
            </ul>
          </Popover>
        </div>
      </header>
      <div class="flex-1 p-4 overflow-auto">
        <slot name="main"/>
      </div>
    </main>
  </div>
</template>

<script setup>
import {Button} from "primevue";
import {PanelMenu} from "primevue";
import {Popover} from "primevue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import Drawer from "primevue/drawer";

const props = defineProps({
  navigationItems: {
    type: Array,
    required: true
  },
  /**
   * when enabled you must create the correspondent css variables in root
   */
  darkSideBar: {
    type: Boolean,
    default: false
  }
})
const isMobileMenuOpen = ref(false)
const userMenuPanel = ref()
const notificationPanel = ref()
const route = useRoute()
const isDarkMode = ref(false)

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
  isDarkMode.value = document.documentElement.classList.contains('dark')
}

function toggleUserMenuPanel(event) {
  userMenuPanel.value.toggle(event)
}

function toggleNotificationPanel(event) {
  notificationPanel.value.toggle(event)
}

function handleMobileMenuToggle() {
  isMobileMenuOpen.value = true
}

function handleLogout() {
  console.log('Logout')
}

function handleDarkModeToggle() {
  console.log('Dark Mode Toggle')
}
</script>

<style scoped>
.active-dark-sidebar-link a {
  background: var(--sidebar-dark-nav-active-bg);
  border-radius: 6px;
  color: var(--sidebar-dark-nav-active-color);
  font-weight: 600;
  transition: all 0.3s ease;
}
.active-link a {
  background: var(--p-primary-100);
  border-radius: 6px;
  color: var(--p-primary-700);
  font-weight: 600;
  transition: all 0.3s ease;
}

.dark .active-link a {
  background: var(--p-primary-900);
  color: var(--p-primary-100);
}

a {
  transition: all 0.3s ease;
}
</style>