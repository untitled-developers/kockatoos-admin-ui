<template>

  <BaseStackedLayout :navigation-items="[
      {
        label: 'Playground',
        route: {
          name: 'playground'
        }
      },
      {
        label: 'Test Page',
        route: {
          name: 'test-page'

      }
      }
  ]">
    <div class="flex flex-col gap-y-4">
      <div>
        <Button>
          <div class="text-left">
            TEST
          </div>
        </Button>
      </div>
      <div>
        <Button label="ALERT" @click="()=>{alertError('AHHHH')}"></Button>
      </div>
      <div>
        <Button label="CONFIRM" @click="()=>{confirmSuccess({message: 'WEEEEeeeee'})}"></Button>
      </div>
      <div>
        <Button label="DIALOG" @click="handleOpenDialog"></Button>
      </div>
      <div>
        <BaseTableToggleSelect :options="[
                        {label: 'Active', value: 1, color: 'green'},
                        {label: 'Blocked', value: 0, color: 'red'}
                    ]" :color-mapping="{
      0: 'red',
      1: 'green'
                    }" :value="1"/>
      </div>
    </div>
    <BaseEditDialogNavigationButtons @next-record="test"
                                     @previous-record="test"/>

    <BaseLoaderOverlay size="large" width="200px" height="200px" text="Loading your stuff"></BaseLoaderOverlay>

    <BaseSingleImageUploader ref="imageUploader"></BaseSingleImageUploader>
  </BaseStackedLayout>

</template>

<script setup>
import {Button} from "primevue";
import useAlerts from "../composables/useAlerts.js";
import useConfirmDialog from "../composables/useConfirmDialog.js";
import useDialog from "../composables/useDialog.js";
import TestDialog from "../views/components/TestDialog.vue";
import * as zod from "zod";
import {onMounted, ref} from "vue";
import {InputText} from "primevue";
import BaseInputContainer from "../components/BaseInputContainer.vue";
import BaseTableToggleSelect from "../components/BaseTableToggleSelect.vue";
import useForm from "../composables/useForm.js";
import BaseCrudTableActionsDropdown from "../components/BaseCrudTableActionsDropdown.vue";
import BaseEditDialogNavigationButtons from "../components/BaseEditDialogNavigationButtons.vue";
import useEditDialog from "../composables/useEditDialog.js";
import BaseStackedLayout from "../components/BaseStackedLayout.vue";
import BaseLoaderOverlay from "../components/BaseLoaderOverlay.vue";
import BaseSingleImageUploader from "../components/BaseSingleImageUploader.vue";
const imageUploader = ref(null)
const {confirmSuccess} = useConfirmDialog()
const {
  alertError
} = useAlerts()
const {openDialog} = useDialog()

function test() {
  console.log('test')
  handleNextRecord()
}

const {handleNextRecord, handlePreviousRecord} = useEditDialog({})
const form = ref({
  name: '',
  username: '',
  phone: '',
  password: '',
  role: ''
})

const formSchema = zod.object({
  username: zod.string().nonempty(),
  password: zod.string().nonempty(),
  role: zod.string().nonempty()
})

const didSubmit = ref(false)

const {getErrors, hasErrors} = useForm(form, formSchema)

getErrors('username')
const showNameError = ref(false)

function handleSubmit() {
  didSubmit.value = true
}

function handleNameBlur() {
  showNameError.value = true
}

function handleOpenDialog() {
  openDialog(TestDialog)
}
onMounted(() => {
  console.log('mounted')
  imageUploader.value.setImageFromUrl('https://s3.eu-west-3.amazonaws.com/pawcuddlze-prd/public/shops/8ee04840-de47-11ef-97a2-0e144b09082d.webp')
})
</script>

<style scoped>

</style>