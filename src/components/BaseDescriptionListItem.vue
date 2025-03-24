<template>
    <div class="border-t border-gray-100 px-4 py-6 sm:px-0" :class="[gridColsClass]">
        <dt class=" font-medium leading-6 text-gray-900">
            <slot name="label"></slot>
        </dt>
        <dd class="mt-1 leading-6 text-gray-700 sm:mt-2">
            <Skeleton v-if="loading" width="10rem" height="1.2rem" class="mb-2"></Skeleton>
            <slot v-else name="value"></slot>
        </dd>
    </div>
</template>

<script setup>
import Skeleton from "primevue/skeleton";
import {computed} from "vue";

const props = defineProps({
    cols: {
        type: Number,
        default: 1
    },
    loading: {
        type: Boolean,
        default: false
    }
})
const gridColsClass = computed(() => {
    return `col-span-${props.cols}`
})

</script>

<style scoped>

</style>
