<template>
  <BaseDialog :header="getDialogHeader()"
              :full-height="fullHeight"
              :full-screen="fullScreen"
              :width="width"
              :position="position"
              @close="closeDialog">
    <template #content>
      <BaseForm :form-schema="formSchema"
                :form-id="formId"
                v-model:form-data="formData">
        <template #form="{errors}">
          <slot name="form" :errors="errors"></slot>
        </template>
      </BaseForm>
    </template>
    <template #footer-start>
      <template v-if="withNavigation && isEditing()">
        <Button severity="secondary"
                class="ml-2"
                icon="pi pi-chevron-left"
                @click="handlePreviousRecord"
                aria-label="previous page"/>
        <Button severity="secondary"
                icon="pi pi-chevron-right"
                @click="handleNextRecord"
                aria-label="next page"/>
      </template>

    </template>
    <template #footer-end>
      <Button label="Submit"
              type="submit"
              :loading="isSubmitting"
              :form="formId"
              @click="handleSubmitButton"></Button>
    </template>
  </BaseDialog>
</template>

<script setup>
import useAlerts from "../composables/useAlerts.js";
import useCrudApi from "../composables/useCrudApi.js";
import BaseForm from "./BaseForm.vue";
import BaseDialog from "./BaseDialog.vue";
import {onMounted, ref} from "vue";
import {record} from "zod";

const props = defineProps({
  modelName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'center'
  },
  endpoint: {
    type: String,
    required: true
  },
  fullScreen: {
    type: Boolean,
    default: false
  },
  fullHeight: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '500px'
  },
  formId: {
    type: String,
    required: true
  },
  record: {
    type: Object
  },
  closeOnEdit: {
    type: Boolean,
    default: false
  },
  withNavigation: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['close', 'previous-record', 'next-record'])
const formData = defineModel('formData')
const formSchema = defineModel('formSchema')

const {
  alertError,
  alertSuccess
} = useAlerts()
const {
  create,
  update
} = useCrudApi(props.endpoint)

const isSubmitting = ref(false)

function handlePreviousRecord() {
  if (!props.record) {
    return
  }
  emit('previous-record', props.record)
}

function handleNextRecord() {
  if (!props.record) {
    return
  }
  emit('next-record', props.record)
}

function closeDialog() {
  if (!props.closeOnEdit && isEditing()) {
    return
  }
  emit('close')
}

function isEditing() {
  return props.record
}

function getDialogHeader() {
  return props.record ? `Edit ${props.modelName}` : `Create ${props.modelName}`
}

async function createRecord() {
  try {
    await create(formData.value)
    alertSuccess(`${props.modelName} created successfully`)
    closeDialog()
  } catch (error) {
    alertError(error)
  }
}

async function editRecord() {
  try {
    await update(props.record.id, formData.value)
    alertSuccess(`${props.modelName} updated successfully`)
    closeDialog()
  } catch (error) {
    alertError(error)
  }
}

async function submitData() {
  if (isEditing()) {
    await editRecord()
  } else {
    await createRecord()
  }
}

function populateForm() {
  if (props.record) {
    Object.keys(props.record).forEach(key => {
      formData.value[key] = props.record[key]
    })
  }
}

async function handleSubmitButton() {
  if (isSubmitting.value) {
    return
  }
  isSubmitting.value = true
  await submitData()
  isSubmitting.value = false
}

onMounted(() => {
  populateForm()
})


</script>

<style scoped>

</style>