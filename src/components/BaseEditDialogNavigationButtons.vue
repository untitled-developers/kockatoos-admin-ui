<template>
  <div class="flex gap-x-2">
    <Button severity="secondary"
            icon="pi pi-chevron-left"
            @click="handlePreviousRecord"
            aria-label="Filter"/>
    <Button severity="secondary"
            icon="pi pi-chevron-right"
            @click="handleNextRecord"
            aria-label="Filter"/>
  </div>

</template>

<script setup>
import {Button} from "primevue";
const emit = defineEmits(['next-record', 'previous-record'])
function handlePreviousRecord(){
    emit('previous-record')
}
function handleNextRecord(){
    emit('next-record')
}

</script>

<style scoped>

</style>