<template>
    <Image :src="url" preview></Image>
</template>

<script setup>
import {Image} from "primevue";

const props = defineProps({
    url: {
        type: String,
        required: true
    }
})

</script>

<style scoped>

</style>
