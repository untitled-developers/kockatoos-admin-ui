<template>
  <div class="flex flex-col gap-2 w-full">
    <label class="font-medium">
      {{ props.label }}
    </label>
    <Fluid>
      <div>
        <slot></slot>
      </div>
      <p class="my-0 text-gray-600 text-sm">
        {{ helpText }}
      </p>
    </Fluid>

    <template v-if="errors.length > 0 && showErrors">
      <p class="text-red-600">
        {{ errors[0] }}
      </p>
    </template>
  </div>
</template>

<script setup>
import Fluid from "primevue/fluid";

const props = defineProps({
  label: String,
  helpText: String,
  showErrors: {
    type: Boolean,
    default: false
  },
  errors: {
    type: Array,
    default: []
  }
})
</script>

<style scoped></style>
