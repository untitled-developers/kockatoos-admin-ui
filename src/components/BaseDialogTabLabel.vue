<template>
    <div :class="['flex items-center gap-x-2', hasErrors && showErrors ? 'text-red-600' : '']">
        <Badge v-if="hasErrors && showErrors" :value="hasErrors" severity="danger"></Badge>
        {{ label }}
    </div>
</template>

<script setup>
import {computed} from "vue";
import {Badge} from "primevue";

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    fields: {
        type: Array,
        required: true
    },
    getErrors: {
        type: Function,
        required: true
    },
    showErrors: {
        type: Boolean,
        required: true
    }
})

const hasErrors = computed(()=> {
    let errorNumber = 0
    props.fields.forEach(field => {
        errorNumber += props.getErrors(field).length
    })
    return errorNumber
})
</script>

<style scoped>

</style>
