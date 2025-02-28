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
      <BaseCrudTableActionsButton text="test"></BaseCrudTableActionsButton>
      <div>
        <Button label="ALERT" @click="isLoadingFn"></Button>
      </div>
      <div>
        <Button label="CONFIRM" @click="()=>{confirmSuccess({message: 'WEEEEeeeee'})}"></Button>
      </div>
      <div>
        <Button label="DIALOG" @click="handleOpenDialog"></Button>
      </div>
      <div>
        <BaseTableToggleSelect @change="handleToggle" :options="[
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

    <BaseLoaderOverlay width="200px" height="200px"></BaseLoaderOverlay>

    <div class="bg-white">
      <BaseMultiImageUploader @upload-file="handleUploadFile"></BaseMultiImageUploader>
    </div>

    <BaseGallery :is-loading="isGalleryLoading" @delete-items="handleDeleteImage" url-path=""
                 v-model="images"></BaseGallery>

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
import BaseCrudTableActionsButton from "../components/BaseCrudTableActionsButton.vue";
import useGlobalLoader from "../composables/useGlobalLoader.js";
import useFreezeRay from "../composables/useFreezeRay.js";
import BaseMultiImageUploader from "../components/BaseMultiImageUploader.vue";
import BaseGallery from "../components/BaseGallery.vue";

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

const isGalleryLoading = ref(false)

function handleDeleteImage(event) {

  const {ids, onSuccess, onError} = event
  console.log(ids)
  isGalleryLoading.value = true
  setTimeout(() => {
    onSuccess()
    isGalleryLoading.value = false
  }, 2000)

}

const {freezeApp, unfreezeApp} = useFreezeRay()

function isLoadingFn() {
  freezeApp()
  setTimeout(() => {
    unfreezeApp()
  }, 4000)
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

function handleUploadFile(event) {
  const {fileObj, index, onSuccess, onError} = event
  setTimeout(() => {
    console.log(fileObj)
    onError('AHHHHHHHH')
  }, 2000)
}

const {getErrors, hasErrors} = useForm(form, formSchema)

getErrors('username')
const showNameError = ref(false)

function handleSubmit() {
  didSubmit.value = true
}

const images = ref([
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1682687982141-0143020ed57a',
    title: 'Mountain Landscape',
    size: '1.2MB'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1682695794947-17061df4ccfc',
    title: 'Beach Sunset',
    size: '2.4MB'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1682687218147-9806132dc697',
    title: 'City Skyline',
    size: '1.8MB'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1682685797741-f0213d24418c',
    title: 'Forest Trail',
    size: '3.1MB'
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1682686581498-5e85c7228119',
    title: 'Desert Dunes',
    size: '2.2MB'
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1682686578842-00ba49b0a71a',
    title: 'Snow Cabin',
    size: '1.5MB'
  }
]);

function handleNameBlur() {
  showNameError.value = true
}

function handleOpenDialog() {
  openDialog(TestDialog)
}

function handleToggle() {
  console.log('toggle change')
}
</script>

<style scoped>

</style>