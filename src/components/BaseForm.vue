<template>
  <form :id="formId">
    <slot name="form" :errors="errors"></slot>
  </form>
</template>

<script setup>
import {computed} from "vue";
import useValidateData from "../composables/useValidateData.js";

const props = defineProps({
  formId: {
    required: true
  },
  formSchema: {
    required: true
  },
})
const formData = defineModel('formData')

const {validateData} = useValidateData()

const errors = computed(() => {
  return validateData(props.formSchema, formData.value)
})
defineExpose({
  errors
})
</script>

<style scoped>

</style>