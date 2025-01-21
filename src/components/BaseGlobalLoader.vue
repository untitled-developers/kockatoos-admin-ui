<template>
  <Dialog
      v-model:visible="loaderStore.isLoading"
      :show-header="false"
      position="center"
      modal
      pt:root:class="spinner-dialog"
  >
    <div class="flex items-center justify-center">
      <div class="flex flex-col gap-y-2">
        <ProgressSpinner :dt="progressSpinner"/>
        <span v-if="loaderStore.message.length > 0" class="text-white font-medium text-2xl">
        {{ loaderStore.message }}
      </span>
      </div>

    </div>
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog'
import ProgressSpinner from 'primevue/progressspinner'
import {ref} from 'vue'
import {useLoaderStore} from "../stores/LoaderStore.js";


const loaderStore = useLoaderStore()

const progressSpinner = ref({
  color: {
    1: 'white',
    2: 'white',
    3: 'white',
    4: 'white'
  }
})
</script>

<style>
.spinner-dialog {
  background: transparent;
  border: none;
  overflow: hidden;
  border-radius: unset;
  box-shadow: none;
}

.spinner-dialog .p-dialog-content {
  overflow-y: unset;
}
</style>
