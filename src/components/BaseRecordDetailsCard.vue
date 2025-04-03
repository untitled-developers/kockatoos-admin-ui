<template>
  <div class="flex items-center p-4 gap-x-4">
    <div class="relative size-24 rounded-full">
      <img :src="profileImage" class="object-cover rounded-full h-full w-full">
      <div
          class="absolute rounded-full inset-0 bg-linear-to-b from-transparent to-teal-400/20 w-full h-full">
      </div>
    </div>

    <div class="flex flex-col">
      <h3 class="text-2xl font-medium text-(--p-primary-600)">{{ title }}</h3>
      <div>
        <slot name="subtitle"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  profileImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

</script>

<style scoped>

</style>