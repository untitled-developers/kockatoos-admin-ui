<template>
  <BasePageContent>
    <div class="flex flex-col gap-y-4">
      <BaseCard>
        <template #header>useGlobalLoader</template>
        <template #default>
          <BaseDocCodePreview title="BaseGlobalLoader.vue">
            <template #code>
              import useGlobalLoader from "../../composables/useGlobalLoader.js";
            </template>
          </BaseDocCodePreview>
          <Button label="Toggle" @click="handleGlobalLoader"></Button>
        </template>
      </BaseCard>
    </div>
    <DocUseGlobalLoader></DocUseGlobalLoader>
  </BasePageContent>
</template>

<script setup>
import Button from "primevue/button";
import BaseCard from "../../components/BaseCard.vue";
import useGlobalLoader from "../../composables/useGlobalLoader.js";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import DocUseGlobalLoader from "./components/DocUseGlobalLoader.vue";

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