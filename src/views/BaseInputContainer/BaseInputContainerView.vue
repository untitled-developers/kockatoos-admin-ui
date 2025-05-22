<template>
  <BaseCard>
    <template #header>
      BaseInputContainer
    </template>
    <BaseInputContainer :single-error="false"
                        label="Label"
                        show-errors
                        :errors="['Error 1', 'Error 2']">
      <template #label-right>
        <div class="bg-gray-100 p-2 text-center">Label Right Slot</div>
      </template>
      <template #default>
        <InputText></InputText>
      </template>
    </BaseInputContainer>
  </BaseCard>
</template>

<script setup>
import BaseInputContainer from "../../components/BaseInputContainer.vue";
import BaseCard from "../../components/BaseCard.vue";
import {InputText} from "primevue";

</script>

<style scoped>

</style>