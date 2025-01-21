<template>
  <ConfirmDialog group="headless">
    <template #container="{ message, acceptCallback, rejectCallback }">
      <div class="flex flex-col px-6">
        <div class="flex gap-x-4 py-6">
          <div :class="[
  'size-16 flex items-center justify-center rounded-full',
  message.type === 'success'
    ? 'bg-green-100 text-green-500 dark:bg-green-950 dark:text-green-400'
    : message.type === 'info'
    ? 'bg-blue-100 text-blue-500 dark:bg-blue-950 dark:text-blue-400'
    : message.type === 'warning'
    ? 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400'
    : message.type === 'danger'
    ? 'bg-red-100 text-red-500 dark:bg-red-950 dark:text-red-400'
    : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
]">
            <i class="text-3xl" :class="message.icon"></i>
          </div>
          <div class="flex flex-col">
            <div class="font-semibold text-xl">
              {{ message.header }}
            </div>
            <div class="text-lg">
              <div v-html="message.message"></div>
            </div>

          </div>
        </div>
        <div class="flex gap-x-2 justify-end py-6 px-2">
          <Button :label="message.rejectLabel"
                  size="large"
                  @click="rejectCallback"
                  :severity="message.rejectButtonSeverity"/>
          <Button :label="message.acceptLabel"
                  size="large"
                  @click="acceptCallback"
                  :severity="message.acceptButtonSeverity"/>
        </div>
      </div>
    </template>
  </ConfirmDialog>
</template>

<script setup>
import Button from 'primevue/button'
import ConfirmDialog from "primevue/confirmdialog";
</script>

<style scoped>

</style>
