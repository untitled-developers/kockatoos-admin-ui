<template>
  <Toast base-z-index="9999" :auto-z-index="false"></Toast>
</template>

<script setup>
import {Toast} from "primevue";
// Added the z-index stuff because when re-rendering a dialog ( to reset the state it's overlaying the toast component because of the auto layering)
</script>

<style scoped>

</style>