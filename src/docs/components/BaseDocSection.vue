<template>
  <div class="mb-8">
    <div class="py-3">
      <BaseDocSubTitle :title="title"></BaseDocSubTitle>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>

</template>

<script setup>
import BaseDocSubTitle from "./BaseDocSubTitle.vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})

</script>

<style scoped>

</style>