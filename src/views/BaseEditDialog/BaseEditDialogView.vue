<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocFunctionalityPreview>
        <Button @click="handleOpenDialogClick" label="Open Dialog"></Button>
      </BaseDocFunctionalityPreview>
    </BaseDoc>
  </BasePageContent>

</template>

<script setup>
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import Button from "primevue/button";
import useDialog from "../../composables/useDialog.js";
import BaseEditDialogTest from "./components/BaseEditDialogTest.vue";

const {openDialog, closeDialog} = useDialog()

function handleOpenDialogClick() {
const dialogId =  openDialog(BaseEditDialogTest, {
    props: {},
    handlers: {
      close: () => {
        closeDialog(dialogId)
      },
      submit: (data) => {
        console.log('Submitted data:', data)
        closeDialog(dialogId)
      },
      'next-record': (record) => {
        console.log('Next record:', record)
      },
      'previous-record': (record) => {
        console.log('Previous record:', record)
      }
    }
  })
}
</script>

<style scoped>

</style>