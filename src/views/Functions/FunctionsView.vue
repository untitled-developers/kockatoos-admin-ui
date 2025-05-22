<template>
  <BasePageContent>
    <BaseCard>
      <template #header>useGlobalLoader</template>
      <template #default>
        <Button label="Toggle" @click="handleGlobalLoader"></Button>
      </template>
    </BaseCard>
  </BasePageContent>
</template>

<script setup>
import Button from "primevue/button";
import BaseCard from "../../components/BaseCard.vue";
import useGlobalLoader from "../../composables/useGlobalLoader.js";
import BasePageContent from "../../components/BasePageContent.vue";

const {startLoader, stopLoader} = useGlobalLoader()

function handleGlobalLoader() {
  startLoader('With a message')
  setTimeout(() => {
    stopLoader()
  }, 4000)
}
</script>

<style scoped>

</style>