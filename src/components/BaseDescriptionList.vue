<template>
    <div>
        <div class="px-4 sm:px-0">
            <h3 class="text-lg font-semibold leading-7 text-gray-900">{{title}}</h3>
            <p class="mt-1 max-w-2xl leading-6 text-gray-500">{{subtitle}}</p>
        </div>
        <div class="mt-6">
            <dl :class="[gridColsClass]">
                <slot></slot>
            </dl>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
    title: String,
    subtitle: String,
    cols: {
        type: Number,
        default: 2
    }
})
const gridColsClass = computed(() => {
    return `grid grid-cols-1 sm:grid-cols-${props.cols}`
})


</script>

<style scoped>

</style>
