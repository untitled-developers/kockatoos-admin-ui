<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview language="JavaScript" title="Import" :source="importCode">
        </BaseDocCodePreview>
      </BaseDocSection>
      <BaseDocSection title="Examples">
        <BaseDocFunctionalityPreview>
          <div class="flex gap-x-4">
            <Button label="With Message" @click="handleExampleOneClick"></Button>
            <Button label="Without Message" @click="handleExampleTwoClick"></Button>
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import Button from "primevue/button";
import useGlobalLoader from "../../composables/useGlobalLoader.js";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import {useRoute} from "vue-router";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";

const {startLoader, stopLoader} = useGlobalLoader()
const route = useRoute()
const importCode = "import useGlobalLoader from \"kockatoos-admin-ui/composables/useGlobalLoader.js\";\n" +
    "const {startLoader, stopLoader} = useGlobalLoader()"

function handleExampleOneClick() {
  startLoader('With a message')
  setTimeout(() => {
    stopLoader()
  }, 2000)
}

function handleExampleTwoClick() {
  startLoader()
  setTimeout(() => {
    stopLoader()
  }, 2000)
}
</script>

<style scoped>

</style>