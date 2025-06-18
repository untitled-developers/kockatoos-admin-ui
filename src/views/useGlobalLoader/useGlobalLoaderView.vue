<template>
  <BasePageContent>
    <BaseDocCard title="useGlobalLoader">
      <template #description>
        Displays a loader on top of the entire admin panel.
      </template>
      <template #content>
        <BaseDocCodePreview title="Import">
          <template #code>
            import useGlobalLoader from "kockatoos-admin-ui/composables/useGlobalLoader.js";
          </template>
        </BaseDocCodePreview>
        <h2 class="font-semibold text-xl py-4">Example</h2>
        <div class="text-center bg-gray-100 py-4 mb-2">
          <Button label="With Message" @click="handleExampleOneClick"></Button>
        </div>
        <div>
          <BaseDocCodePreview title="With Message">
            <template #code>
              startLoader('With a message')
            </template>
          </BaseDocCodePreview>
        </div>
        <div class="text-center bg-gray-100 py-4 mt-4 mb-2">
          <Button label="Without Message" @click="handleExampleTwoClick"></Button>
        </div>
        <BaseDocCodePreview title="Without Message">
          <template #code>
            startLoader()
          </template>
        </BaseDocCodePreview>
      </template>
    </BaseDocCard>
  </BasePageContent>
</template>

<script setup>
import Button from "primevue/button";
import useGlobalLoader from "../../composables/useGlobalLoader.js";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDocCodePreview from "../../components/BaseDocCodePreview.vue";
import BaseDocCard from "../../components/BaseDocCard.vue";

const {startLoader, stopLoader} = useGlobalLoader()

function handleExampleOneClick() {
  startLoader('With a message')
  setTimeout(() => {
    stopLoader()
  }, 4000)
}

function handleExampleTwoClick() {
  startLoader()
  setTimeout(() => {
    stopLoader()
  }, 4000)
}
</script>

<style scoped>

</style>