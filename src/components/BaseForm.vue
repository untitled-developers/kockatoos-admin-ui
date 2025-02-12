<template>
  {{ errors }}
  <form :id="formId" @submit.prevent="handleSubmit">
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

const emits = defineEmits(['submit'])

const {
  validateData
} = useValidateData()

const errors = computed(() => {
  return validateData(props.formSchema, formData.value)
})

function hasErrors(errorObj) {
  return Object.values(errorObj).some(value => {
    if (Array.isArray(value._errors) && value._errors.length > 0) {
      return true
    }
    if (typeof value === 'object') {
      return hasErrors(value)
    }
    return false
  })
}

defineExpose({
  errors
})

function handleSubmit() {
  emits('submit', hasErrors(errors.value))
}
</script>

<style scoped>

</style>