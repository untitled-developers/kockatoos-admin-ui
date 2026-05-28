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
          <div class="flex flex-col gap-3">
            <p class="text-sm text-gray-600">
              Pass a template ref pointing to a <code>BaseCrudTable</code> component. Call these methods from dialog handlers to control the table from outside.
            </p>
            <BaseDocCodePreview title="Typical usage" language="JavaScript" :source="usageCode" />
          </div>
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

const importCode = `import useCrudTable from "kockatoos-admin-ui/composables/useCrudTable.js";`;

const signatureCode = `const crudTableRef = ref(null); // assign to a BaseCrudTable via ref="crudTableRef"
const {
  fetchTableData,      // fetchTableData(withLoading = true) → re-fetches from the endpoint
  startRowLoading,     // startRowLoading(record)            → shows a spinner on that row
  stopRowLoading,      // stopRowLoading(record)             → hides the row spinner
  updateRecordData,    // updateRecordData(record, newData)  → patches the row in place
  startTableLoading,   // startTableLoading()                → shows the full table loader
  stopTableLoading,    // stopTableLoading()                 → hides the full table loader
  refreshEditDialog,   // refreshEditDialog()                → re-mounts the open edit dialog
} = useCrudTable(crudTableRef);`;

const usageCode = `// Inside a dialog submit handler:
async function handleSubmit(data) {
  startRowLoading(currentRecord);
  try {
    await api.update(currentRecord.id, data);
    await fetchTableData(false); // silent refresh — no loading state
  } finally {
    stopRowLoading(currentRecord);
  }
}`;
</script>