<template>
  <Fluid>
    <DatePicker
        v-if="type=== 'datePicker'"
        v-model="filterValue"
        :manual-input="false"
        :selection-mode="filterConfig.selectionMode"
        :min-date="filterConfig.min"
        :max-date="filterConfig.maxDate"
    ></DatePicker>
    <Select v-else-if="type === 'select'"
            v-model="filterValue"
            :options="filterConfig.options"
            :option-value="filterConfig.optionValue"
            placeholder="Select"
            :option-label="filterConfig.optionLabel">
      <template #option="slotProps">
        <template v-if="filterConfig.tags">
          <Tag :severity="filterConfig.tagsMapping[slotProps.option.value]?.severity"
               :value="slotProps.option.value">
            {{ slotProps.option[filterConfig.optionLabel] }}
          </Tag>
        </template>
        <slot v-else name="option" :slotProps="slotProps"></slot>
      </template>
    </Select>
  </Fluid>

</template>

<script setup>
import {DatePicker, Select, Fluid, Tag} from "primevue";
import {computed} from "vue";

const filterValue = defineModel('filterValue')

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  config: {
    type: Object,
  }
})
const emit = defineEmits(['update:modelValue'])

// Add more types as needed
const filterConfig = computed(() => {
  if (props.type === 'datePicker') {
    return {
      minDate: props.config.minDate ?? null,
      maxDate: props.config.maxDate ?? null,
      selectionMode: props.config.selectionMode ?? 'single'
    }
  } else if (props.type === 'select') {
    return {
      options: props.config.options ?? [],
      optionLabel: props.config.optionLabel ?? 'label',
      optionValue: props.config.optionValue ?? 'value',
      tags: props.config.tags ?? false,
      tagsMapping: props.config.tagsMapping ?? {},
    }
  }
})


</script>

<style scoped>

</style>