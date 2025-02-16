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

</template>

<script setup>
import {Button} from "primevue";
import useAlerts from "../composables/useAlerts.js";
import useConfirmDialog from "../composables/useConfirmDialog.js";
import useDialog from "../composables/useDialog.js";
import TestDialog from "../views/components/TestDialog.vue";
import {z} from "zod";
import {ref} from "vue";
import {InputText} from "primevue";
import BaseInputContainer from "../components/BaseInputContainer.vue";
import BaseTableToggleSelect from "../components/BaseTableToggleSelect.vue";

const {confirmSuccess} = useConfirmDialog()
const {
  alertError
} = useAlerts()
const {openDialog} = useDialog()

const formData = ref({
  name: '',
  email: '',
  nested: {
    test: ''
  }
})
console.log('AHHHHHHHHHH')
console.log(Object.keys(formData.value))

const formSchema = z.object({
  name: z.string().min(1).max(5),
  email: z.string().min(1).max(5).email(),
  nested: z.object({
    test: z.string().min(1).max(5)
  })
})
const didSubmit = ref(false)
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
</script>

<style scoped>

</style>