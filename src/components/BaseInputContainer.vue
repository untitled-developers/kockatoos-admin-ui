<template>
  <div class="flex flex-col gap-2 w-full">
    <label class="font-medium">
      {{ props.label }}
    </label>
    <Fluid>
      <div>
        <slot></slot>
      </div>
    </Fluid>

    <template v-if="props.invalid.length > 0 && props.shouldShowError">
      <p v-for="error in invalid" class="text-red-600">
        {{ error }}
      </p>
    </template>
  </div>
</template>

<script setup>
import Fluid from "primevue/fluid";

const props = defineProps({
  label: String,
  helpText: String,
  shouldShowError: {
    type: Boolean,
    default: false
  },
  invalid: {
    type: Array,
    default: []
  }
})
</script>

<style scoped></style>
