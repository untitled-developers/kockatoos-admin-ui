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
            <tr class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>change</code></td>
              <td class="py-2 pr-4"><code>File</code></td>
              <td class="py-2">Fired after the user picks a valid video file (type and size validated).</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <p class="text-sm text-gray-500 mb-3">Click the upload area to select a video file. The component shows a preview with playback controls and displays the file duration once loaded.</p>
        <BaseDocFunctionalityPreview>
          <BaseVideoUploader @change="handleChange" />
          <pre v-if="fileInfo" class="text-xs text-gray-500 bg-gray-50 p-2 rounded mt-2">{{ fileInfo }}</pre>
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
import BaseVideoUploader from "../../components/BaseVideoUploader.vue";

const fileInfo = ref(null);

function handleChange(file) {
  fileInfo.value = { name: file.name, size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`, type: file.type };
}

const importCode = `import BaseVideoUploader from "kockatoos-admin-ui/components/BaseVideoUploader.vue";`;

const propsTable = [
  { name: 'videoUrl', type: 'String', required: false, default: "''", description: 'Existing video URL shown as the initial preview.' },
  { name: 'defaultVideoUrl', type: 'String', required: false, default: "''", description: 'Fallback video URL used when videoUrl is empty.' },
  { name: 'maxUploadSize', type: 'Number', required: false, default: '31457280', description: 'Maximum video file size in bytes (default 30 MB).' },
];
</script>