<template>
  <div class="divide-y divide-gray-200 overflow-hidden rounded-sm bg-white shadow-md">
    <div v-if="$slots.header" class="px-4 py-5 sm:px-6">
      <slot name="header"></slot>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="px-4 py-4 sm:px-6">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>