<template>
  <BaseDialog :header="header"
              @close="emit('close')">
    <template #content>
      <slot name="content"></slot>
    </template>
    <template #footer-start>
      <BaseEditDialogNavigationButtons v-if="withNavigation"
                                       @previous-record="emit('previous-record')"
                                       @next-record="emit('next-record')"/>
    </template>
    <template #footer-end>
      <Button v-if="withSubmit"
              :loading="isSubmitting"
              label="Submit"
              @click="emit('submit')"
              :form="formId"></Button>
    </template>

  </BaseDialog>
</template>

<script setup>
import BaseDialog from "./BaseDialog.vue";
import BaseEditDialogNavigationButtons from "./BaseEditDialogNavigationButtons.vue";
import {watch} from "vue";

const props = defineProps({
  header: {
    type: String,
    required: true
  },
  withNavigation: {
    type: Boolean,
    default: true
  },
  withSubmit: {
    type: Boolean,
    default: true
  },
  formId: {
    type: String
  },
  isSubmitting: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits([
  'next-record',
  'previous-record',
  'submit',
  'close'])

watch(() => props.isSubmitting, (value) => {
  console.log('Changed isSubmitting')
  console.log(value)

})
</script>

<style scoped>

</style>