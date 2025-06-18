<template>
  <div class="card flex justify-center">
    <Drawer v-model:visible="mobileDrawer" header="Menu">
      <div class="flex flex-col w-full h-full">
        <div>
          <div class="card flex justify-center nav-menu">
            <PanelMenu :model="navigationItems" multiple class="w-full md:w-80" :pt="{
                root:{
                  style: {
                    borderRadius: 0,
                    rowGap: 0,
                  }
                },
                itemContent: {
                  style: {
                    borderRadius: 0
                  },
                  class: ['menu-sub-item']
                },
                headerContent:{
                  style: {
                    borderRadius: 0
                  },
                },
                panel: {
                  style: {
                    border: 'none',
                    borderRadius: '0',
                    background: 'none',
                    padding: 0

                  }
                },
                rootList: {
                  style: {
                    padding: 0
                  }
                }

              }">
              <template #item="{ item , root, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ navigate }" :to="item.route"
                             @click="mobileDrawer = false"
                             :active-class="isDark ? 'active-link-dark' : 'active-link'">
                    <span
                        :class="[
                       'border-l border-gray-300 hover:border-gray-400 flex items-center cursor-pointer px-2 py-4',
                        isDark ? 'text-white': 'text-surface-700',
                        !root ? 'pl-6' : ''
                  ]"
                        @click="navigate">
                        <span class="font-medium">{{ item.label }}</span>
                    </span>
                </router-link>
                <div v-else-if="item.type === 'heading'"
                     class=" font-semibold text-gray-400 bg-white pt-6 pb-2 pl-1 cursor-default">
                  {{ item.label }}
                </div>
                <div v-else
                     :class="[
  'flex items-center cursor-pointer px-2 py-4',
  isDark ? 'text-white': 'text-gray-600',
  !root ? 'pl-6' : ''
]">
                  <span class="font-medium">{{ item.label }} </span>
                  <span v-if="item.items" class="pi pi-angle-down ml-auto"/>
                </div>
              </template>
            </PanelMenu>
          </div>
        </div>
      </div>
    </Drawer>
  </div>
  <div class="flex">
    <div>
      <Transition name="slide">
        <nav v-if="!isCollapsed"
             :class="[' shadow-sm  w-64 md:flex hidden  overflow-y-auto  h-screen sticky', isDark ? 'bg-stone-700':'bg-white']">
          <div class="flex flex-col w-full h-full">
            <div class="flex w-full justify-center shrink-0  pl-4 py-2 pr-3 mb-4">
              <div>
                <slot name="logo"></slot>
              </div>
            </div>
            <div>
              <div class="card flex justify-center nav-menu pl-2">
                <PanelMenu :model="navigationItems" multiple class="w-full md:w-80" :pt="{
                root:{
                  style: {
                    borderRadius: 0,
                    rowGap: 0,
                  }
                },
                itemContent: {
                  style: {
                    borderRadius: 0
                  },
                  class: ['menu-sub-item']
                },
                headerContent:{
                  style: {
                    borderRadius: 0
                  },
                },
                panel: {
                  style: {
                    border: 'none',
                    borderRadius: '0',
                    background: 'none',
                    padding: 0

                  }
                },
                rootList: {
                  style: {
                    padding: 0
                  }
                }

              }">
                  <template #item="{ item , root, hasSubmenu }">
                    <router-link v-if="item.route" v-slot="{ navigate }" :to="item.route"
                                 :active-class="isDark ? 'active-link-dark' : 'active-link'">
                    <span
                        :class="[
                       'border-l border-gray-300 hover:border-gray-400 flex items-center cursor-pointer px-2 py-3',
                        isDark ? 'text-white': 'text-surface-700',
                        !root ? 'pl-6' : ''
                  ]"
                        @click="navigate">
                        <span class="font-medium">{{ item.label }}</span>
                    </span>
                    </router-link>
                    <div v-else-if="item.type === 'heading'"
                         class=" font-semibold text-gray-400 bg-white pt-6 pb-2 pl-1 cursor-default">
                      {{ item.label }}
                    </div>
                    <div v-else
                         :class="[
  'flex items-center cursor-pointer px-2 py-3',
  isDark ? 'text-white': 'text-gray-600',
  !root ? 'pl-6' : ''
]">
                      <span class="font-medium">{{ item.label }} </span>
                      <span v-if="item.items" class="pi pi-angle-down ml-auto"/>
                    </div>
                  </template>
                </PanelMenu>
              </div>
            </div>
            <div class="mt-auto text-right p-5">

            </div>
          </div>
        </nav>
      </Transition>

    </div>
    <div
        :class="['flex-grow max-h-screen overflow-auto'
         ]">
      <div
          class="px-2 py-2 pl-4 flex justify-between relative border-gray-200 border  bg-white  shadow-sm items-center">
        <div class="flex-1 flex items-center justify-start">
          <Button class="md:block hidden" aria-label="Collapse navbar" text @click="handleToggleNavbar"
                  icon="pi pi-bars"></Button>
          <button type="button"
                  @click="mobileDrawer = true"
                  class="flex items-center cursor-pointer md:hidden rounded-sm  bg-(--p-primary-500) px-2 py-2 mr-2 text-xs font-semibold text-white shadow-xs hover:bg-(--p-primary-400) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--p-primary-500)">
            <i class="pi pi-bars"></i>
          </button>
          <h2 class="text-lg font-bol text-gray-700">{{ route.meta?.title }}</h2>
        </div>
        <div class="flex-none justify-center">
          <slot name="top-bar-center"></slot>
        </div>
        <div class="flex-1 justify-end flex items-center gap-x-2">
          <slot name="right-top"></slot>
          <Button type="button"
                  v-if="withNotifications"
                  icon="pi pi-bell"
                  rounded
                  severity="info"
                  aria-label="User Menu"/>
          <div class="card flex justify-content-center justify-end">
            <Button type="button"
                    icon="pi pi-user"
                    rounded
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

      <main>
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
import {Drawer} from "primevue";
import {useRoute} from "vue-router";

const props = defineProps({
  navigationItems: {
    type: Array,
    required: true
  },
  /**
   * Wont be using this for now. Will be implemented later
   */
  isDark: {
    type: Boolean,
    default: false
  },
  withNotifications: {
    type: Boolean,
    default: false
  }
})
const isCollapsed = ref(false);
const route = useRoute()

function handleToggleNavbar() {
  isCollapsed.value = !isCollapsed.value;
}

const mobileDrawer = ref(false)
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
@reference "tailwindcss/theme.css";

.nav-menu .p-panelmenu-panel {
  @apply border-none
}

.active-link span {
  @apply bg-(--p-primary-50) text-(--p-primary-800) font-semibold border-(--p-primary-400)
}

.active-link-dark span {
  @apply bg-stone-800 text-(--p-primary-100) font-semibold
}

:deep(.p-submenu-list .menu-sub-item) {
  @apply pl-6
}

.slide-enter-active,
.slide-leave-active {
  transition: width 0.3s ease, transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  width: 0;
}

</style>
