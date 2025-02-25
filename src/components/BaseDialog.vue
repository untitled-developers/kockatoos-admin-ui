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
                  v-if="withCloseButton"
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
          <Button label="Close"
                  class="mx-2"
                  v-if="withCloseButton"
                  severity="secondary"
                  @click="handleClose"/>
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
import useFreezeRay from "../composables/useFreezeRay.js";
import {watch} from "vue";

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
  withCloseButton: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close',])

function handleClose() {
  emit('close')
}

</script>

<style>
.loading-overlay {
  position: relative;
}

.loading-overlay::before {
  content: "";
  position: absolute;
  border-radius: var(--p-dialog-border-radius);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
}

.loading-overlay::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.7);
  border-top-color: var(--p-primary-600);
  z-index: 11;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards, spin 1s linear infinite 0.3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
