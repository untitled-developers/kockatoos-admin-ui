<!-- LoaderOverlay.vue -->
<template>
  <div
      :style="{ width, height }"
      class="relative"
  >
    <div class="absolute inset-0 bg-gray-200/50 flex flex-col items-center justify-center">
      <div
          :class="['animate-spin rounded-full border-4 border-gray-300 border-t-[--p-primary-600]',
        {
            'h-6 w-6': size === 'small',
            'h-8 w-8': size === 'medium',
            'h-12 w-12': size === 'large'
          }
      ]"></div>

      <p v-if="text"
         :class="['mt-4 text-gray-800',
      {
            'text-sm': size === 'small',
            'text-base': size === 'medium',
            'text-lg': size === 'large'
          }]">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>

//TODO this needs work
defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  text: {
    type: String,
    default: ''
  }, size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }

})
</script>