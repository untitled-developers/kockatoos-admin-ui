<template>

  <div class="flex flex-col gap-y-4">
    <div>
      <Button label="ALERT" @click="()=>{alertError('AHHHH')}"></Button>
    </div>
    <div>
      <Button label="CONFIRM" @click="()=>{confirmSuccess({message: 'WEEEEeeeee'})}"></Button>
    </div>
    <div>
      <Button label="DIALOG" @click="handleOpenDialog"></Button>
    </div>
  </div>

</template>

<script setup>
import {Button} from "primevue";
import BaseApp from "../components/BaseApp.vue";
import useAlerts from "../composables/useAlerts.js";
import useConfirmDialog from "../composables/useConfirmDialog.js";
import useDialog from "../composables/useDialog.js";
import TestDialog from "../views/components/TestDialog.vue";
import BaseSideLayout from "../components/BaseSideLayout.vue";

const {confirmSuccess} = useConfirmDialog()
const {
  alertError
} = useAlerts()
const {openDialog} = useDialog()

function handleOpenDialog() {
  openDialog(TestDialog)
}
</script>

<style scoped>

</style>