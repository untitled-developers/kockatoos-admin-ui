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
              <td class="py-2">Fired after the user picks a valid image file (size validated against maxImageSize).</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <p class="text-sm text-gray-500 mb-3">Click the image area to pick a file. Uploads do not actually round-trip in the standalone sandbox — the component just previews the selected file locally.</p>
        <BaseDocFunctionalityPreview>
          <div class="flex flex-col gap-4 max-w-xs">
            <BaseSingleImageUploader @change="handleChange" />
            <pre v-if="fileInfo" class="text-xs text-gray-500 bg-gray-50 p-2 rounded">{{ fileInfo }}</pre>
          </div>
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
import BaseSingleImageUploader from "../../components/BaseSingleImageUploader.vue";

const fileInfo = ref(null);

function handleChange(file) {
  fileInfo.value = { name: file.name, size: `${(file.size / 1024).toFixed(1)} KB`, type: file.type };
}

const importCode = `import BaseSingleImageUploader from "kockatoos-admin-ui/components/BaseSingleImageUploader.vue";`;

const propsTable = [
  { name: 'image', type: 'String', required: false, default: "''", description: 'Existing image URL to display as the initial preview.' },
  { name: 'defaultImageUrl', type: 'String', required: false, default: "''", description: 'URL to fetch and use as the default image on mount when image is empty.' },
  { name: 'aspectRatio', type: 'String', required: false, default: "'aspect-[1/1]'", description: 'Tailwind aspect-ratio class for the preview area.' },
  { name: 'height', type: 'String', required: false, default: "'h-72'", description: 'Tailwind height class for the preview area.' },
  { name: 'objectFit', type: 'String', required: false, default: "'object-scale-down'", description: 'Tailwind object-fit class for the preview image.' },
  { name: 'maxImageSize', type: 'Number', required: false, default: '2097152', description: 'Maximum allowed image file size in bytes (default 2 MB).' },
];
</script>