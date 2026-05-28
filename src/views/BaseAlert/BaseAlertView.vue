<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview title="Import" language="JavaScript" :source="importCode" />
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="alertSuccess('Operation completed successfully.')" />
            <Button label="Error" severity="danger" @click="alertError('Something went wrong.')" />
            <Button label="Warning" severity="warn" @click="alertWarning('Proceed with caution.')" />
            <Button label="Info" severity="info" @click="alertInfo('Here is some information.')" />
          </div>
          <p class="text-sm text-gray-500 mt-2">
            BaseAlert is already included in BaseApp — you do not need to add it manually. Use the useAlerts composable to trigger messages.
          </p>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import Button from "primevue/button";
import useAlerts from "../../composables/useAlerts.js";

const { alertSuccess, alertError, alertWarning, alertInfo } = useAlerts();

const importCode = `import BaseAlert from "kockatoos-admin-ui/components/BaseAlert.vue";
// BaseAlert is already mounted by BaseApp — no need to add it yourself.
// Trigger messages via useAlerts:
import useAlerts from "kockatoos-admin-ui/composables/useAlerts.js";
const { alertSuccess, alertError, alertWarning, alertInfo } = useAlerts();`;
</script>