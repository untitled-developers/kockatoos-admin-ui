<template>
  <button :class="[
    'text-left px-4 py-2 rounded-xs w-full flex items-center gap-x-2 cursor-pointer',
    severityClasses[severity] || severityClasses.default
  ]">
    <i v-if="icon" :class="['pi size-5', icon]"></i>
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  severity: {
    type: String,
    default: 'default',
    validator: (value) => [
      'default',
      'secondary',
      'success',
      'info',
      'warn',
      'help',
      'danger'
    ].includes(value)
  }
})

const severityClasses = {
  default: 'text-gray-700 hover:bg-gray-100',
  secondary: 'text-gray-700 hover:bg-gray-100',
  success: 'text-green-700 hover:bg-green-50',
  info: 'text-blue-700 hover:bg-blue-50',
  warn: 'text-yellow-700 hover:bg-yellow-50',
  help: 'text-purple-700 hover:bg-purple-50',
  danger: 'text-red-700 hover:bg-red-50'
}
</script>