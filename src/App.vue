<template>
  <BaseApp>
    <BaseMainLayout :navigation-items="items">
      <template #top-bar-center>
        <BaseDocSearch></BaseDocSearch>
      </template>
      <template #logo>
        <img src="/logo.png" class="h-32 w-auto">
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </BaseMainLayout>
  </BaseApp>
</template>
<script setup>
import BaseApp from "./components/BaseApp.vue";
import {ref} from "vue";
import BaseMainLayout from "./components/BaseMainLayout.vue";
import BaseDocSearch from "./docs/components/BaseDocSearch.vue";

const items = ref([
  {
    label: 'Layout',
    items: [
      { label: 'BaseCard', route: { name: 'BaseCard' } },
      { label: 'BaseStackedLayout', route: { name: 'BaseStackedLayout' } },
    ]
  },
  {
    label: 'Forms',
    items: [
      { label: 'BaseForm', route: { name: 'base-form' } },
      { label: 'BaseInputContainer', route: { name: 'base-input-container' } },
    ]
  },
  {
    label: 'Inputs',
    items: [
      { label: 'BaseRichEditor', route: { name: 'BaseRichEditor' } },
      { label: 'BaseLocationInput', route: { name: 'BaseLocationInput' } },
      { label: 'BaseWorkingHoursSchedule', route: { name: 'BaseWorkingHoursSchedule' } },
      { label: 'BaseGroupItemsSelector', route: { name: 'BaseGroupItemsSelector' } },
      { label: 'BaseTableToggleSelect', route: { name: 'BaseTableToggleSelect' } },
    ]
  },
  {
    label: 'Display',
    items: [
      { label: 'BaseAlert', route: { name: 'BaseAlert' } },
      { label: 'BaseChart', route: { name: 'BaseChart' } },
      { label: 'BaseDescriptionList', route: { name: 'BaseDescriptionList' } },
      { label: 'BaseRecordDetailsCard', route: { name: 'BaseRecordDetailsCard' } },
      { label: 'BaseLoaderOverlay', route: { name: 'BaseLoaderOverlay' } },
      { label: 'BaseImageDisplay', route: { name: 'BaseImageDisplay' } },
    ]
  },
  {
    label: 'CRUD Table',
    items: [
      { label: 'BaseCrudTable', route: { name: 'BaseCrudTable' } },
    ]
  },
  {
    label: 'Dialogs',
    items: [
      // { label: 'BaseDialog', route: { name: 'BaseDialog' } },
      { label: 'BaseConfirmDialog', route: { name: 'BaseConfirmDialog' } },
      { label: 'BaseEditDialog', route: { name: 'BaseEditDialog' } },
    ]
  },
  {
    label: 'Media',
    items: [
      { label: 'BaseFileManager', route: { name: 'BaseFileManager' } },
      { label: 'BaseMediaManager', route: { name: 'BaseMediaManager' } },
      { label: 'BaseGallery', route: { name: 'BaseGallery' } },
      { label: 'BaseSingleImageUploader', route: { name: 'BaseSingleImageUploader' } },
      { label: 'BaseMultiImageUploader', route: { name: 'BaseMultiImageUploader' } },
      { label: 'BaseVideoUploader', route: { name: 'BaseVideoUploader' } },
    ]
  },
  {
    label: 'Composables',
    items: [
      { label: 'useAlerts', route: { name: 'useAlerts' } },
      { label: 'useConfirmDialog', route: { name: 'useConfirmDialog' } },
      { label: 'useCreateFormSchema', route: { name: 'useCreateFormSchema' } },
      { label: 'useCrudApi', route: { name: 'useCrudApi' } },
      { label: 'useCrudTable', route: { name: 'useCrudTable' } },
      { label: 'useDialog', route: { name: 'useDialog' } },
      { label: 'useEditDialog', route: { name: 'useEditDialog' } },
      { label: 'useForm', route: { name: 'useForm' } },
      { label: 'useGlobalLoader', route: { name: 'useGlobalLoader' } },
      { label: 'useMediaApi', route: { name: 'useMediaApi' } },
    ]
  },
]);
</script>
<style scoped>

</style>