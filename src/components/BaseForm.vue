<template>
  <form :id="formId"
        @submit.prevent="handleSubmit">
    <slot :getErrors="getErrors"
          :hasError="hasErrors"></slot>
  </form>
</template>

<script setup>
import {computed} from "vue";
import useUtils from "../composables/useUtils.js";
import useDevLogger from "../composables/useDevLogger.js";

/**
 * BaseForm
 *
 * A form component that handles validation using Zod schema.
 * It provides validation error handling and form submission functionality.
 *
 */
const props = defineProps({
  /**
   * The id of the form
   */
  formId: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['submit']);
const {consoleDevLog} = useDevLogger()
const {get} = useUtils();
/**
 * Form data model
 */
const formData = defineModel('formData');

/**
 * Zod schema for validation
 */
const formSchema = defineModel('formSchema');

const errors = computed(() => {
  return getValidatedData();
});


function handleSubmit(event) {
  consoleDevLog(`Form ${props.formId} submitted`, event, errors.value);
  emit('submit', event, errors.value);
}

function getErrors(path) {
  if (!errors.value || errors.value.success) {
    return [];
  }

  // Handle nested paths
  const fieldErrors = get(errors.value, path);

  if (!fieldErrors) {
    return [];
  }

  return fieldErrors._errors || [];
}

function getValidatedData() {
  if (!formSchema.value) {
    throw new Error('BaseForm error: formSchema is not defined');
  }

  if (!formData.value) {
    throw new Error('BaseForm error: formData is not defined');
  }

  const result = formSchema.value.safeParse(formData.value);
  if (result.success) {
    return {
      success: true
    };
  }
  return result.error.format();
}

/**
 * Checks if the form has any validation errors
 * @returns {boolean} True if form has errors, false otherwise
 */
function hasErrors() {
  return errors.value && !errors.value.success;
}

defineExpose({
  errors
})
</script>

<style scoped>

</style>