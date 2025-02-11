<template>
  <Dialog
      modal
      :draggable="false"
      block-scroll
      :visible="true"
      :style="{
        width: width,
        height: fullHeight ? '100%' : 'auto',
      }"
      :pt="{
        root: {
          class: fullScreen ? 'p-dialog-maximized' : ''
        }
      }"
      :closable="false"
      :position="position"
  >
    <template #header>
      <div class="flex items-center justify-between w-full">
        <h2 class="font-medium text-xl">
          {{ header }}
        </h2>
        <div>
          <Button severity="secondary"
                  icon="pi pi-times"
                  size="large"
                  text
                  @click="handleClose"></Button>
        </div>
      </div>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="flex justify-end gap-x-2 pt-4">
        <Button label="Close"
                severity="secondary"
                @click="handleClose"/>
        <slot name="actions"></slot>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import Dialog from "primevue/dialog";
import {onMounted, onUnmounted, ref, useSlots} from 'vue'
import Button from 'primevue/button'

const props = defineProps({
  header: {
    type: String,
    required: false
  },
  position: {
    type: String,
    default: 'full',
    validator: (value) => ['right', 'left', 'top', 'bottom', 'full'].includes(value)
  },
  fullScreen: {
    type: Boolean,
    default: false
  },
  fullHeight: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '500px'
  }
})

const emit = defineEmits(['close', 'submit', 'full-screen'])
const isFullScreen = ref(false)
const slots = useSlots()

function handleClose() {
  console.log('Closing')
  emit('close')
}

</script>

<style scoped></style>
