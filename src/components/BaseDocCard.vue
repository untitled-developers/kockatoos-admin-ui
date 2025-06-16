<template>
  <div class="overflow-hidden rounded-lg bg-white shadow px-4 py-3">
    <div class="px-4 py-4 ">
      <h2 class="text-xl font-semibold">
        {{ title }}
      </h2>
    </div>
    <div class="px-4  text-gray-700" v-if="$slots.description">
      <slot name="description"></slot>
    </div>
    <div class="px-4 py-5">
      <slot name="content"></slot>
    </div>
    <div class="px-4 py-4">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>