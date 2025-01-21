<template>
  <BaseAlert></BaseAlert>
  <BaseConfirmDialog></BaseConfirmDialog>
  <BaseDialogFactory></BaseDialogFactory>
  <BaseGlobalLoader></BaseGlobalLoader>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import BaseAlert from "../components/BaseAlert.vue";
import BaseConfirmDialog from "../components/BaseConfirmDialog.vue";
import BaseDialogFactory from "../components/BaseDialogFactory.vue";
import BaseGlobalLoader from "@/components/BaseGlobalLoader.vue";
</script>

<style scoped>

</style>