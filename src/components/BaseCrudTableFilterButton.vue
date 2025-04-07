<template>
  <Button size="small" icon="pi pi-filter" rounded :severity="isActive ? 'primary' : 'secondary'"></Button>
</template>

<script setup>

import Button from "primevue/button";

const props = defineProps({
  isActive: {
    required: true
  }
})
</script>

<style scoped>

</style>
