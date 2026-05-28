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
            <Button label="confirmDanger" severity="danger" @click="triggerDanger" />
            <Button label="confirmSuccess" severity="success" @click="triggerSuccess" />
            <Button label="confirmWarning" severity="warn" @click="triggerWarning" />
            <Button label="confirmInfo" severity="info" @click="triggerInfo" />
          </div>
          <ul v-if="log.length" class="mt-3 text-sm text-gray-500 space-y-1">
            <li v-for="(entry, i) in log" :key="i">{{ entry }}</li>
          </ul>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import useConfirmDialog from "../../composables/useConfirmDialog.js";

const { confirmDanger, confirmSuccess, confirmWarning, confirmInfo } = useConfirmDialog();
const log = ref([]);

function addLog(msg) {
  log.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`);
  if (log.value.length > 8) log.value.pop();
}

function triggerDanger() {
  confirmDanger({ header: 'Delete Record', message: '<p>Are you sure? This cannot be undone.</p>',
    onAccept: () => addLog('Danger → Accepted'), onReject: () => addLog('Danger → Rejected') });
}
function triggerSuccess() {
  confirmSuccess({ header: 'Confirm', message: '<p>Everything looks good. Proceed?</p>',
    onAccept: () => addLog('Success → Accepted'), onReject: () => addLog('Success → Rejected') });
}
function triggerWarning() {
  confirmWarning({ header: 'Warning', message: '<p>This will affect existing data.</p>',
    onAccept: () => addLog('Warning → Accepted'), onReject: () => addLog('Warning → Rejected') });
}
function triggerInfo() {
  confirmInfo({ header: 'Info', message: '<p>Please confirm you have read this message.</p>',
    onAccept: () => addLog('Info → Accepted'), onReject: () => addLog('Info → Rejected') });
}

const importCode = `import useConfirmDialog from "kockatoos-admin-ui/composables/useConfirmDialog.js";`;

const signatureCode = `const { confirmDanger, confirmSuccess, confirmWarning, confirmInfo } = useConfirmDialog();

// Each helper accepts the same shape:
confirmDanger({
  header: 'Delete Record',
  message: '<p>Are you sure?</p>',  // HTML string
  onAccept: () => { /* handle confirm */ },
  onReject: () => { /* handle cancel */ },
});`;
</script>