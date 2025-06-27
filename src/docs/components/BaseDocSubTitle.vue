<template>
  <div class="text-xl py-2 font-medium">
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>

<style scoped>

</style>