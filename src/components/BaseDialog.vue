<template>
  <Drawer
      style="width: 500px"
      :visible="true"
      :header="props.header"
      :position="isFullScreen ? 'full' : props.position"
  >
    <template #container>
      <div class="dialog-container px-4 py-2 max-h-screen overflow-auto">
        <template v-if="props.withHeader">
          <div v-if="!slots.header" class="px-4 py-3 flex items-center justify-between">
            <div class="flex items-center gap-x-2">
              <h2 class="text-xl font-semibold">{{ props.header }}</h2>
            </div>
            <div class="flex gap-x-2">
              <Button
                  v-if="props.withFullScreen"
                  @click="handleFullScreen"
                  icon="pi pi-window-maximize"
                  severity="secondary"
                  outlined
                  aria-label="Expand"
              />
              <Button
                  @click="emit('close')"
                  icon="pi pi-times"
                  severity="secondary"
                  outlined
                  aria-label="Cancel"
              />
            </div>
          </div>
          <div v-else>
            <slot name="header"></slot>
          </div>
        </template>
        <div class="px-4 py-2">
          <slot name="content"></slot>
        </div>
        <div class="">
          <div class="flex justify-end px-4 py-5">
            <div class="flex items-center gap-x-2">
              <Button v-if="props.withCloseButton"
                      label="Close"
                      severity="secondary"
                      @click="emit('close')"/>
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Drawer>
</template>

<script setup>
import Drawer from 'primevue/drawer'
import {onMounted, onUnmounted, ref, useSlots} from 'vue'
import Button from 'primevue/button'

const props = defineProps({
  header: {
    type: String,
    required: false
  },
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['right', 'left', 'top', 'bottom', 'full'].includes(value)
  },
  withFullScreen: {
    type: Boolean,
    default: false
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  withCloseButton: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close', 'submit', 'full-screen'])
const isFullScreen = ref(false)
const slots = useSlots()

function handleFullScreen() {
  isFullScreen.value = !isFullScreen.value
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped></style>
