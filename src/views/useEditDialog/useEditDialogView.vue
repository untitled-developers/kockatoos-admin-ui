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
              <code>useEditDialog</code> is used <strong>inside</strong> a BaseEditDialog content component (the <code>#content</code> slot). It receives a <code>ref</code> to the parent dialog and exposes loading controls.
            </p>
            <BaseDocCodePreview title="Usage inside dialog content" language="JavaScript" :source="usageCode" />
            <div class="flex gap-2">
              <Button label="Log: startDialogLoading called" severity="secondary" @click="log('startDialogLoading({ mode: \'overlay\', message: \'Saving…\' })')" />
              <Button label="Log: stopDialogLoading called" severity="secondary" @click="log('stopDialogLoading()')" />
            </div>
            <ul v-if="eventLog.length" class="text-sm text-gray-500 space-y-1">
              <li v-for="(entry, i) in eventLog" :key="i">{{ entry }}</li>
            </ul>
          </div>
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

const eventLog = ref([]);
function log(msg) {
  eventLog.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`);
  if (eventLog.value.length > 6) eventLog.value.pop();
}

const importCode = `import useEditDialog from "kockatoos-admin-ui/composables/useEditDialog.js";`;

const signatureCode = `const dialogRef = ref(null); // template ref on <BaseEditDialog ref="dialogRef">
const { startDialogLoading, stopDialogLoading } = useEditDialog(dialogRef);

// Show an overlay while submitting:
startDialogLoading({ mode: 'overlay', message: 'Saving…' });
// or replace the content entirely:
startDialogLoading({ mode: 'replace', height: '300px', message: 'Loading data…' });

stopDialogLoading(); // hide the overlay / restore content`;

const usageCode = `// Inside a BaseEditDialog #content slot component:
<script setup>
import useEditDialog from "kockatoos-admin-ui/composables/useEditDialog.js";
const dialogRef = inject('dialogRef'); // provided by BaseEditDialog
const { startDialogLoading, stopDialogLoading } = useEditDialog(dialogRef);

async function handleSubmit() {
  startDialogLoading({ mode: 'overlay', message: 'Saving…' });
  await doApiCall();
  stopDialogLoading();
}
<\/script>`;
</script>