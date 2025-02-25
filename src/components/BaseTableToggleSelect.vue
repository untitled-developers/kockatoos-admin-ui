<template>
  <Select option-label="label"
          placeholder="Select"
          option-value="value"
          input-id="value"
          @update:model-value="handleValueChange"
          :loading="isLoading"
          v-model="currentValue"
          :pt="getPtOptions(currentValue)"
          :options="options">
  </Select>
</template>

<script setup>
import {Select} from "primevue";
import {onMounted, ref} from "vue";

const COLOR_STYLES = {
  red: {
    root: 'bg-red-100',
    text: 'text-red-700'
  },
  green: {
    root: 'bg-green-100',
    text: 'text-green-700'
  },
  blue: {
    root: 'bg-blue-100',
    text: 'text-blue-700'
  },
  yellow: {
    root: 'bg-yellow-100',
    text: 'text-yellow-700'
  },
  // Add more color combinations as needed
}

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  value: {
    required: true
  },
  colorMapping: {
    type: Object,
  }
})
const emit = defineEmits(['change'])
const currentValue = ref(null)

onMounted(() => {
  currentValue.value = props.value
})

function handleValueChange(event) {
  if (event !== currentValue.value) {
    emit('change', event.value)
  }

}

function getPtOptions(optionValue) {
  if (optionValue === null || optionValue === undefined) {
    return {}
  }

  const colorKey = props.colorMapping[optionValue]
  if (!colorKey || !COLOR_STYLES[colorKey]) {
    return {}
  }
  if (!COLOR_STYLES[colorKey]) {
    throw new Error('Invalid color key, check COLOR_STYLES')
  }

  const colorStyle = COLOR_STYLES[colorKey]
  return {
    root: {
      class: colorStyle.root
    },
    dropdown: {
      class: colorStyle.text
    },
    label: {
      class: `${colorStyle.text} font-medium p-1 pl-2`
    }
  }
}


function findOptionByValue(value) {
  return props.options.find(o => o.value === value)
}


</script>

<style scoped>

</style>
