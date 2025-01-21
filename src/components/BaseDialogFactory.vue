<template>
  <component
      v-for="dialog in dialogStore.dialogsList"
      :is="dialog.component"
      v-on="dialog.handlers"
      v-bind.prop="dialog.props"
  />
</template>

<script setup>
import { useDialogStore } from '../stores/DialogStore'

const dialogStore = useDialogStore()
</script>

<style scoped></style>
