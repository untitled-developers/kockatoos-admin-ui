<template>
  <BaseDocCard title="useGlobalLoader">
    <template #description>
      Displays a loader on top of the entire admin panel.
    </template>
    <template #content>
      <BaseDocCodePreview title="Example">
        <template #code>
          import useGlobalLoader from "kockatoos-admin-ui/composables/useGlobalLoader.js";


          const {startLoader, stopLoader} = useGlobalLoader();
        </template>
      </BaseDocCodePreview>
    </template>
  </BaseDocCard>
</template>

<script setup>

import BaseDocCard from "../../../components/BaseDocCard.vue";
import BaseDocCodePreview from "../../../components/BaseDocCodePreview.vue";
</script>

<style scoped>

</style>