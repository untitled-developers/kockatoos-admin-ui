<template>
  <BaseDialog :header="header"
              :width="width"
              :full-screen="fullScreen"
              :position="position"
              :full-height="fullHeight"
              @close="emit('close')">
    <template #content>
      <!-- Loading Mode: Replace content entirely with loader -->
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

      <!-- Content Area with potential overlay -->
      <div v-else class="relative overflow-hidden">
        <!-- Regular Content -->
        <div :class="{ 'filter blur-xs': isLoading && loading.mode === 'overlay' }">
          <slot name="content"></slot>
        </div>

        <!-- Loading Mode: Overlay on top of content -->
        <transition name="fade-scale">
          <div v-if="isLoading && loading.mode === 'overlay'"
               class="absolute inset-0 z-10 flex flex-col bg-gray-100/60 backdrop-blur-xs items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-2">
              <div class="animate-spin rounded-full border-4 border-gray-300 border-t-(--p-primary-600) size-8"></div>
              <div v-if="loading.message"
                   class="font-medium text-(--p-primary-600) text-xl animate-fade-in-up">
                {{ loading.message }}
              </div>
            </div>
          </div>
        </transition>
      </div>
    </template>
    <template #footer-start>
      <BaseEditDialogNavigationButtons v-if="withNavigation"
                                       @previous-record="emit('previous-record')"
                                       @next-record="emit('next-record')"/>
    </template>
    <template #footer-end>
      <Button label="Close"
              class="mx-2"
              v-if="withCloseButton"
              severity="secondary"
              @click="emit('close')"/>
      <Button v-if="withSubmit"
              :label="isEditing ? 'Save' : 'Submit'"
              type="submit"
              @click="emit('submit')"
              :form="formId"></Button>
      <slot name="footer-end"></slot>
    </template>
  </BaseDialog>
</template>

<script setup>
import BaseDialog from "./BaseDialog.vue";
import {Button} from "primevue";
import BaseEditDialogNavigationButtons from "./BaseEditDialogNavigationButtons.vue";
import {watch, computed} from "vue";
import useFreezeRay from "../composables/useFreezeRay.js";

const props = defineProps({
  header: {
    type: String,
    required: true
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
  /**
   * Controls the loading/saving state of the component
   * @type {Object} Configuration object for loading state
   * @property {Boolean} active - Whether the loading state is active
   * @property {String} message - Message to display during loading
   * @property {String} height - Height for the loading container when in replace mode
   * @property {String} mode - How the loader should appear: "overlay" (on top of content with blur), "replace" (instead of content), or "freeze" (global app overlay)
   * @property {Boolean} freezeApp - Whether to freeze the entire app (for saving/submitting)
   * @default { active: false, message: 'Loading...', height: 'auto', mode: 'overlay', freezeApp: false }
   */
  loading: {
    type: Object,
    default: () => ({
      active: false,
      message: 'Loading...',
      height: 'auto',
      mode: 'overlay', // 'overlay', 'replace', or 'freeze'
      freezeApp: false
    })
  },
  width: {
    type: String
  },
  withCloseButton: {
    type: Boolean,
    default: true
  },
  isEditing: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'next-record',
  'previous-record',
  'submit',
  'close'
])

// Computed properties
const isLoading = computed(() => props.loading.active);
const isSubmitting = computed(() => props.loading.active && props.loading.freezeApp);

const {
  freezeApp,
  unfreezeApp
} = useFreezeRay();

// Watch for loading state changes that need to freeze the app
watch(() => props.loading, (newLoading) => {
  if (newLoading.active && newLoading.freezeApp) {
    freezeApp({
      useBlur: true,
      text: newLoading.message
    });
  } else {
    unfreezeApp();
  }
}, {immediate: true, deep: true});
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