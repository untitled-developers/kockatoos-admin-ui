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
import BaseGlobalLoader from "../components/BaseGlobalLoader.vue";
import {useDialogStore} from "../stores/DialogStore.js";
import {onMounted} from "vue";
import {useRouter} from "vue-router";

const dialogStore = useDialogStore()
const router = useRouter()

onMounted(() => {
  router.beforeEach(() => {
    dialogStore.dialogsList = []
  })
})
</script>

<style scoped>

</style>