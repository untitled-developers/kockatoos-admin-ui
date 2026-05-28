<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview title="Import" language="JavaScript" :source="importCode" />
      </BaseDocSection>

      <BaseDocSection title="Props">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr>
              <th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Type</th>
              <th class="py-2 pr-4">Required</th><th class="py-2 pr-4">Default</th>
              <th class="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in propsTable" :key="p.name" class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>{{ p.name }}</code></td>
              <td class="py-2 pr-4"><code>{{ p.type }}</code></td>
              <td class="py-2 pr-4">{{ p.required ? 'Yes' : 'No' }}</td>
              <td class="py-2 pr-4"><code>{{ p.default ?? '—' }}</code></td>
              <td class="py-2">{{ p.description }}</td>
            </tr>
          </tbody>
        </table>
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

      <BaseDocSection title="Example">
        <p class="text-sm text-gray-500 mb-3">Select or drop image files. In the standalone sandbox there is no backend — files are queued but not uploaded. The upload-file event fires per file; your handler performs the actual HTTP upload.</p>
        <BaseDocFunctionalityPreview>
          <BaseMultiImageUploader @upload-file="handleUploadFile" />
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
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import BaseMultiImageUploader from "../../components/BaseMultiImageUploader.vue";

const log = ref([]);

function handleUploadFile(file) {
  log.value.unshift(`upload-file: ${file?.name ?? 'unknown'} — no backend in sandbox`);
  if (log.value.length > 8) log.value.pop();
}

const importCode = `import BaseMultiImageUploader from "kockatoos-admin-ui/components/BaseMultiImageUploader.vue";`;

const propsTable = [
  { name: 'maxFileSize', type: 'Number', required: false, default: '8388608', description: 'Maximum file size per image in bytes (default 8 MB).' },
  { name: 'allowedTypes', type: 'Array', required: false, default: "['image/jpeg', 'image/png', 'image/webp', 'image/gif']", description: 'Allowed MIME types.' },
  { name: 'compact', type: 'Boolean', required: false, default: 'false', description: 'Compact mode — shows only an upload button and a success count instead of the full drag-drop zone with file list.' },
];

const emitsTable = [
  { name: 'upload-file', payload: 'File', when: 'A valid file is queued for upload. Your handler performs the HTTP upload.' },
  { name: 'upload-success', payload: 'File', when: 'Emit this from your handler to mark the file as successfully uploaded.' },
  { name: 'upload-error', payload: '{ file, message }', when: 'Emit this from your handler to mark the file as failed.' },
  { name: 'file-removed', payload: 'File', when: 'A file is removed from the queue.' },
  { name: 'all-uploads-complete', payload: '—', when: 'All queued files have finished uploading (success or error).' },
];
</script>