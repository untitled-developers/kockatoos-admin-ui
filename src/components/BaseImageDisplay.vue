<template>
  <Image v-if="url" :class="[sizeClass]" image-class="object-contain" :src="url" preview></Image>
  <div
      v-else
      :class="['bg-gray-200 flex items-center justify-center rounded-md', sizeClass]"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#a1a1a1" class="w-[85%] h-[85%]">
      <path
          d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/>
    </svg>

  </div>
</template>

<script setup>
import {Image} from "primevue";
import {computed} from "vue";

const props = defineProps({
  url: {
    required: true
  },
  /**
   * Controls the size of the image.
   * @values small, medium, large
   * @default small
   * @description Use predefined values: 'small', 'medium', 'large',
   * or provide a custom Tailwind class for more control (e.g. 'size-32', 'w-24 h-16')
   */
  size: {
    type: String,
    default: "small"
  }
});

const sizeClass = computed(() => {
  // Map predefined sizes to Tailwind classes
  const sizeMap = {
    small: "size-10",    // 40px
    medium: "size-14",   // 56px
    large: "size-20"     // 80px
  };

  return sizeMap[props.size] || props.size;
});
</script>

<style scoped>
</style>