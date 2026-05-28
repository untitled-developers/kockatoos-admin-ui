<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview title="Import" language="JavaScript" :source="importCode" />
      </BaseDocSection>

      <BaseDocSection title="Emits">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Payload</th><th class="py-2">When</th></tr>
          </thead>
          <tbody>
            <tr v-for="e in emitsTable" :key="e.name" class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>{{ e.name }}</code></td>
              <td class="py-2 pr-4"><code>{{ e.payload }}</code></td>
              <td class="py-2">{{ e.when }}</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Slots">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr><th class="py-2 pr-4">Name</th><th class="py-2">Purpose</th></tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>toolbar</code></td><td class="py-2">Forwarded to BaseFileManager's toolbar slot.</td></tr>
            <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>empty-state</code></td><td class="py-2">Forwarded to BaseFileManager's empty-state slot.</td></tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <p class="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3 mb-3">
          BaseMediaManager automatically fetches from the consumer backend's <code>/api/blobs</code> endpoint. In the standalone sandbox there is no backend, so you'll see the loading → empty state. In a running admin panel this renders the full media library.
        </p>
        <BaseDocFunctionalityPreview>
          <div class="h-[500px]">
            <BaseMediaManager />
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
import BaseMediaManager from "../../components/BaseMediaManager.vue";

const importCode = `import BaseMediaManager from "kockatoos-admin-ui/components/BaseMediaManager.vue";
// Props-less — embed as a one-liner:
// <BaseMediaManager />`;

const emitsTable = [
  { name: 'file-click', payload: 'blob', when: 'A file card is clicked.' },
  { name: 'folder-click', payload: 'path: string', when: 'A folder card is clicked.' },
  { name: 'navigate', payload: 'path: string', when: 'Current folder changed.' },
];
</script>