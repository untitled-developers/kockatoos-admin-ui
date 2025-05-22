<template>
  <div class="flex flex-col gap-2 w-full">
    <div class="flex items-center">
      <label class="font-medium">
        {{ props.label }}
      </label>
      <div>
        <slot name="label-right"></slot>
      </div>
    </div>

    <Fluid>
      <div>
        <slot></slot>
      </div>
      <p class="my-0 text-gray-600 text-sm">
        {{ helpText }}
      </p>
    </Fluid>

    <template v-if="errors.length > 0 && showErrors">
      <p class="text-red-600" v-if="singleError">
        {{ errors[0] }}
      </p>
      <ul v-else>
        <li v-for="(error, index) in errors" :key="index" class="text-red-600">
          {{ error }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import Fluid from "primevue/fluid";
/**
 * BaseInputContainer
 *
 * Wrap input elements with this component to get error messages and consistent label styles.
 * You can also control when errors are showing using the show-errors prop.
 *
 * @slot default - Content slot for the input element
 * @slot label-right - Content displayed to the right of the label
 */

const props = defineProps({
  /**
   * The label text to display above the input
   */
  label: String,

  /**
   * Optional help text to display below the input
   */
  helpText: String,

  /**
   * Controls whether to display validation errors
   * @default false
   */
  showErrors: {
    type: Boolean,
    default: false
  },

  /**
   * Array of error messages to display
   * @default []
   */
  errors: {
    type: Array,
    default: () => []
  },

  /**
   * When true, only displays the first error message
   * When false, displays all error messages as a list
   * @default true
   */
  singleError: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped></style>
