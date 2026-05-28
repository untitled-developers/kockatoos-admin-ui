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
              <th class="py-2 pr-4">Name</th>
              <th class="py-2 pr-4">Type</th>
              <th class="py-2 pr-4">Required</th>
              <th class="py-2 pr-4">Default</th>
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

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <div class="flex items-end gap-6 flex-wrap">
            <div class="flex flex-col items-center gap-1">
              <BaseImageDisplay url="https://picsum.photos/seed/img1/400" size="small" />
              <span class="text-xs text-gray-400">small (40px)</span>
            </div>
            <div class="flex flex-col items-center gap-1">
              <BaseImageDisplay url="https://picsum.photos/seed/img2/400" size="medium" />
              <span class="text-xs text-gray-400">medium (56px)</span>
            </div>
            <div class="flex flex-col items-center gap-1">
              <BaseImageDisplay url="https://picsum.photos/seed/img3/400" size="large" />
              <span class="text-xs text-gray-400">large (80px)</span>
            </div>
            <div class="flex flex-col items-center gap-1">
              <BaseImageDisplay :url="null" size="large" />
              <span class="text-xs text-gray-400">no URL (placeholder)</span>
            </div>
          </div>
          <p class="text-sm text-gray-500 mt-3">Click any image to open the lightbox preview.</p>
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
import BaseImageDisplay from "../../components/BaseImageDisplay.vue";

const importCode = `import BaseImageDisplay from "kockatoos-admin-ui/components/BaseImageDisplay.vue";`;

const propsTable = [
  { name: 'url', type: 'any', required: true, default: null, description: 'Image URL. When null or empty, a grey placeholder icon is shown instead.' },
  { name: 'size', type: 'String', required: false, default: "'small'", description: "Predefined size: 'small' (40px), 'medium' (56px), 'large' (80px). Or any Tailwind sizing class (e.g. 'size-32')." },
];
</script>