<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview title="Import" language="JavaScript" :source="importCode" />
      </BaseDocSection>

      <BaseDocSection title="Signature">
        <BaseDocCodePreview title="Signature" language="JavaScript" :source="signatureCode" />
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <div class="flex flex-wrap gap-2">
            <Button label="alertSuccess" severity="success" @click="alertSuccess('Operation completed successfully.')" />
            <Button label="alertError" severity="danger" @click="alertError('Something went wrong.')" />
            <Button label="alertWarning" severity="warn" @click="alertWarning('Proceed with caution.')" />
            <Button label="alertInfo" severity="info" @click="alertInfo('Here is some information for you.')" />
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import Button from "primevue/button";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import useAlerts from "../../composables/useAlerts.js";

const { alertSuccess, alertError, alertWarning, alertInfo } = useAlerts();

const importCode = `import useAlerts from "kockatoos-admin-ui/composables/useAlerts.js";`;

const signatureCode = `const { alertSuccess, alertError, alertWarning, alertInfo } = useAlerts();

alertSuccess('Record saved.')      // green toast, 3 s lifetime
alertError('Failed to save.')      // red toast, 3 s lifetime
alertWarning('Unsaved changes.')   // orange toast, 3 s lifetime
alertInfo('Draft auto-saved.')     // blue toast, 3 s lifetime`;
</script>