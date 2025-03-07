<template>
  <Image :class="sizeClass" :src="url" preview></Image>
</template>

<script setup>
import { Image } from "primevue";
import { computed } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  /**
   * Controls the size of the image.
   * @values small, medium, large
   * @default medium
   * @description Use predefined values: 'small', 'medium', 'large',
   * or provide a custom Tailwind class for more control (e.g. 'size-32', 'w-24 h-16')
   */
  size: {
    type: String,
    default: "medium"
  }
});

const sizeClass = computed(() => {
  // Map predefined sizes to Tailwind classes
  const sizeMap = {
    small: "size-10",    // 40px
    medium: "size-14",   // 56px
    large: "size-20"     // 80px
  };

  // Return mapped size or use the value directly as a Tailwind class
  return sizeMap[props.size] || props.size;
});
</script>

<style scoped>
</style>