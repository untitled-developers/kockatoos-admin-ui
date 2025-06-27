<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocFunctionalityPreview>
        <div class="flex flex-col gap-y-2">
          <div class="flex items-center">
            <SelectButton v-model="editDialogTypeValue"
                          :options="editDialogTypeOptions"
                          option-value="value"
                          optionLabel="name"/>
          </div>
          <Button @click="handleOpenDialogClick" label="Open Dialog"></Button>
        </div>
      </BaseDocFunctionalityPreview>
      <BaseDocSection title="Usage">
        WORK IN PROGRESS
      </BaseDocSection>
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
import SelectButton from "primevue/selectbutton";
import {ref} from "vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";

const {openDialog, closeDialog} = useDialog()

const editDialogTypeOptions = [
  {name: 'Add', value: 'Add'},
  {name: 'Edit', value: 'Edit'},
]
const editDialogTypeValue = ref('Add')

const record = ref({
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  phone: '123-456-7890',
  password: 'password123'
})

function handleOpenDialogClick() {
  const dialogId = openDialog(BaseEditDialogTest, {
    props: {
      record: editDialogTypeValue.value === 'Edit' ? record.value : null,
    },
    handlers: {
      close: () => {
        console.log('Dialog closed')
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