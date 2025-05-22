<template>
  <BaseDialog :header="dialogHeader"
              :width="width"
              :full-screen="fullScreen"
              :position="position"
              :full-height="fullHeight"
              @close="closeDialog">
    <template #content>
      <div v-if="isLoading && loading.mode === 'replace'"
           :style="{height: loading.height}"
           class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-y-2">
          <div class="animate-spin rounded-full border-4 border-gray-300 border-t-(--p-primary-600) size-8"></div>
          <div v-if="loading.message" class="font-medium text-(--p-primary-600) text-xl animate-fade-in-up">
            {{ loading.message }}
          </div>
        </div>
      </div>

      <transition name="fade-scale">
        <div v-if="isLoading && loading.mode === 'overlay'"
             class="absolute inset-0 z-10 flex flex-col bg-gray-100/60 backdrop-blur-xs items-center justify-center rounded-xl">
          <div class="flex flex-col items-center justify-center gap-y-2">
            <div class="animate-spin rounded-full border-4 border-gray-300 border-t-(--p-primary-600) size-8"></div>
            <div v-if="loading.message"
                 class="font-medium text-(--p-primary-600) text-xl animate-fade-in-up">
              {{ loading.message }}
            </div>
          </div>
        </div>
      </transition>

      <div v-if="!isLoading || loading.mode !== 'replace'" class="relative overflow-hidden">
        <div>
          <slot name="content"
                :getErrors="getErrors"
                :handleSubmit="handleSubmitRecord"
                :didSubmit="didSubmit"></slot>
        </div>

      </div>
    </template>
    <template #footer-start>
      <BaseEditDialogNavigationButtons v-if="withNavigation && isEditingRecord"
                                       @previous-record="handlePreviousRecord"
                                       @next-record="handleNextRecord"/>
    </template>
    <template #footer-end>
      <Button label="Close"
              class="mx-2"
              v-if="withCloseButton"
              severity="secondary"
              @click="emit('close')"/>
      <Button v-if="withSubmit"
              :label="isEditingRecord ? 'Save' : 'Submit'"
              type="submit"
              :form="formId"></Button>
      <slot name="footer-end"></slot>
    </template>
  </BaseDialog>
</template>

<script setup>
import BaseDialog from "./BaseDialog.vue";
import {Button} from "primevue";
import BaseEditDialogNavigationButtons from "./BaseEditDialogNavigationButtons.vue";
import {watch, computed, ref, onMounted} from "vue";
import useFreezeRay from "../composables/useFreezeRay.js";
import useForm from "../composables/useForm.js";
import useCrudApi from "../composables/useCrudApi.js";
import useAlerts from "../composables/useAlerts.js";
import * as zod from 'zod';
import useUtils from "../composables/useUtils.js";

//---------------------------------------------------
// Props and Emits
//---------------------------------------------------
const props = defineProps({
  record: {
    type: Object
  },
  header: {
    type: String
  },
  recordType: {
    type: String,
    default: ''
  },
  endpoint: {
    type: String
  },
  requestBodyMapper: {
    type: Function,
    default: null
  },
  recordMapper: {
    type: Function,
    default: null
  },
  fullHeight: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'center'
  },
  fullScreen: {
    type: Boolean,
    default: false
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
  width: {
    type: String
  },
  withCloseButton: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits([
  'next-record',
  'previous-record',
  'submit',
  'close'
])

//---------------------------------------------------
// Models
//---------------------------------------------------
const formData = defineModel('form')
const formSchema = defineModel('formSchema', {default: () => zod.object({})})

//---------------------------------------------------
// Composables
//---------------------------------------------------
const {
  getErrors,
  hasErrors
} = useForm(form, formSchema.value)

const {
  alertError
} = useAlerts()

const {
  freezeApp,
  unfreezeApp
} = useFreezeRay();

const {
  create,
  update
} = useCrudApi(props.endpoint)

const {
  cloneDeep
} = useUtils()

//---------------------------------------------------
// Refs
//---------------------------------------------------
const didSubmit = ref(false)

const loading = ref({
  active: false,
  message: '',
  height: '',
  mode: '',
  freezeApp: false
})

//---------------------------------------------------
// Computed Properties
//---------------------------------------------------
const isEditingRecord = computed(() => {
  return !!props.record
})

const isLoading = computed(() => {
  return loading.value.active
});

const dialogHeader = computed(() => {
  if (props.header) {
    return props.header
  }
  if (props.recordType) {
    if (isEditingRecord.value) {
      return `Edit ${props.recordType} #${props.record?.id}`
    } else {
      return `Create ${props.recordType}`
    }
  }
  return ``
})

//---------------------------------------------------
// Navigation Methods
//---------------------------------------------------
function handleNextRecord() {
  if (!props.record) {
    return
  }
  emit('next-record', props.record)
}

function handlePreviousRecord() {
  if (!props.record) {
    return
  }
  emit('previous-record', props.record)
}

function closeDialog() {
  emit('close')
}

//---------------------------------------------------
// Form Handling Methods
//---------------------------------------------------
async function handleSubmitRecord() {
  if (hasErrors()) {
    didSubmit.value = true
    return
  }
  const formPayload = createFormPayload(form.value)
  try {
    startDialogLoading()
    await submitData(formPayload)
    emit('submit')
    closeDialog()
  } catch (error) {
    alertError('Error submitting formData')
    console.log(error)
  } finally {
    stopDialogLoading()
  }
}

async function submitData(formData) {
  if (isEditingRecord.value) {
    return await update(props.record.id, formData)
  }
  return await create(formData)
}

function createFormPayload(data = {}) {
  let mappedData = data

  let didMapData = false
  if (props.requestBodyMapper && typeof props.requestBodyMapper === 'function') {
    mappedData = props.requestBodyMapper(data)
    didMapData = true
  }

  const formData = new FormData()

  if (!didMapData) {
    if (Object.keys(data).length > 0) {
      formData.append('data', JSON.stringify(data))
    }

    return formData
  }
  Object.keys(mappedData).forEach(mappedDataKey => {
    if (mappedDataKey === 'data') {
      formData.append('data', JSON.stringify(mappedData.data))
    } else {
      formData.append(mappedDataKey, mappedData[mappedDataKey])
    }
  })

  return formData


}

async function populateForm(formRef, record) {
  if (!formRef?.value || !record) {
    return
  }
  let mappedRecord = record

  if (props.recordMapper && typeof props.recordMapper === 'function') {
    mappedRecord = await props.recordMapper(record)
  }

  const filteredData = {}
  Object.keys(formRef.value).forEach(key => {
    if (key in mappedRecord) {
      switch (true) {
        case mappedRecord[key] === null:
          filteredData[key] = null;
          break;

        case Array.isArray(mappedRecord[key]):
          filteredData[key] = cloneDeep(mappedRecord[key]);
          break;

        case typeof mappedRecord[key] === 'object':
          filteredData[key] = cloneDeep(mappedRecord[key]);
          break;

        case typeof mappedRecord[key] === 'string':
        case typeof mappedRecord[key] === 'number':
        case typeof mappedRecord[key] === 'boolean':
        case typeof mappedRecord[key] === 'undefined':
          filteredData[key] = mappedRecord[key];
          break;

        default:
          console.warn(`Unexpected type for key "${key}": ${typeof mappedRecord[key]}`);
          break;
      }
    }
  })

  if (mappedRecord?.id) {
    filteredData.id = mappedRecord.id
  }
  Object.assign(formRef.value, filteredData)
}

//---------------------------------------------------
// Loading State Management
//---------------------------------------------------
/**
 * Start loading with predefined templates and customizable options
 * @param {Object} options - Loading options
 * @param {string} [options.template='default'] - Template type: 'blocking', or 'overlay'
 * @param {string} [options.message] - Custom loading message
 * @param {string} [options.height] - Custom height (only relevant for overlay template)
 * @param {Object} [options.customOptions] - Any additional loading options to override defaults
 */
function startDialogLoading(options = {}) {
  const {
    template = 'blocking',
    message,
    height,
    customOptions = {}
  } = options;

  const templates = {
    // For blocking operations (formData submissions, API calls, etc.)
    blocking: {
      active: true,
      message: message ?? 'Processing request',
      height: 'auto',
      mode: 'overlay',
      freezeApp: true
    },
    // For content loading within a dialog
    embedded: {
      active: true,
      message: message ?? 'Loading content',
      height: height ?? '500px',
      mode: 'replace',
      freezeApp: false
    }
  };
  const baseConfig = templates[template]
  loading.value = {
    ...baseConfig,
    ...customOptions
  };
}

function stopDialogLoading() {
  loading.value.active = false
  loading.value.freezeApp = false
}

//---------------------------------------------------
// Watchers
//---------------------------------------------------
// Watch for loading state changes that need to freeze the app
watch(() => loading, (newLoading) => {
  if (newLoading.value.active && newLoading.value.freezeApp) {
    freezeApp({
      useBlur: true,
      text: newLoading.message
    });
  } else {
    unfreezeApp();
  }
}, {immediate: true, deep: true});

//---------------------------------------------------
// Lifecycle Hooks
//---------------------------------------------------
onMounted(async () => {
  if (isEditingRecord.value) {
    await populateForm(form, props.record)
  }
})

defineExpose({
  startDialogLoading,
  stopDialogLoading
})
</script>

<style scoped>
/* Fade-scale transition for the loading overlay */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.2s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
}
</style>
