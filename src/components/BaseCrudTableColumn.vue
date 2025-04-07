<template>
  <Column key="uid_1" :field="field" :header="header" ref="columnRef">
  </Column>
</template>

<script setup>

// This is currently dropped until a fix is found for building custom wrappers for Column Components
// https://github.com/primefaces/primevue/issues/4940
import {Column} from "primevue";
import {getCurrentInstance, inject, onMounted, ref} from "vue";

const $column = inject('$columns')

const props = defineProps({
  field: {
    type: String,
  },
  header: {
    type: String,
  }
})
defineOptions({
  name: 'test'
})
const parent = getCurrentInstance().parent
const currentInstance = getCurrentInstance()

const columnRef = ref()

onMounted(() => {
  $column.add(columnRef.value.options)
})
</script>

<style scoped>

</style>