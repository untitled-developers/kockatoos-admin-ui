<template>
  <BaseDialog :header="header"
              :with-close-button="!isLoading"
              @close="emit('close')">
    <template #content>
      <div :style="{height: loaderHeight }" v-if="isLoading">
        <BaseLoaderOverlay size="medium"></BaseLoaderOverlay>
      </div>
      <slot v-else name="content"></slot>
    </template>
    <template #footer-start>
      <BaseEditDialogNavigationButtons v-if="withNavigation && !isLoading"
                                       @previous-record="emit('previous-record')"
                                       @next-record="emit('next-record')"/>
    </template>
    <template #footer-end>
      <Button v-if="withSubmit && !isLoading"
              :loading="isSubmitting"
              label="Submit"
              type="submit"
              @click="emit('submit')"
              :form="formId"></Button>
    </template>

  </BaseDialog>
</template>

<script setup>
import BaseDialog from "./BaseDialog.vue";
import {Button} from "primevue";
import BaseEditDialogNavigationButtons from "./BaseEditDialogNavigationButtons.vue";
import {watch} from "vue";
import useFreezeRay from "../composables/useFreezeRay.js";
import BaseLoaderOverlay from "../components/BaseLoaderOverlay.vue";

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
  },
  isFrozen: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  loaderHeight: {
    type: String,
    default: '200px'
  }
})
const emit = defineEmits([
  'next-record',
  'previous-record',
  'submit',
  'close'])

const {freezeApp, unfreezeApp} = useFreezeRay()
watch(() => props.isFrozen, (value) => {
  if (value) {
    freezeApp()
  } else {
    unfreezeApp()
  }
})
</script>

<style scoped>

</style>