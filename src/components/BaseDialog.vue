<template>
  <Dialog
      modal
      :draggable="false"
      block-scroll
      :visible="true"
      :style="{
        maxWidth: width,
        width: '100%',
        height: fullHeight ? '100%' : 'auto',
      }"
      :pt="{
        root: {
          class: [fullScreen ? 'p-dialog-maximized' : ''],
        },
        mask: {
          style: {
            animation: 'none !important'
          }
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
                  rounded
                  @click="handleClose"></Button>
        </div>
      </div>
    </template>
    <slot name="content"></slot>

    <template #footer>
      <Toolbar class="w-full" :pt="{
        root: {
          style:{
            border: 'none'
          }
        }
      }">
        <template #start>
          <slot name="footer-start"></slot>
        </template>
        <template #center>
          <slot name="footer-center"></slot>
        </template>
        <template #end>
          <slot name="footer-end"></slot>
        </template>
      </Toolbar>
    </template>
  </Dialog>
</template>

<script setup>
import Dialog from "primevue/dialog";
import {Toolbar} from "primevue";
import Button from 'primevue/button'

const props = defineProps({
  header: {
    type: String,
    required: false
  },
  position: {
    type: String,
    default: 'center',
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
  },
})

const emit = defineEmits(['close'])

function handleClose() {
  emit('close')
}
</script>

<style>

</style>