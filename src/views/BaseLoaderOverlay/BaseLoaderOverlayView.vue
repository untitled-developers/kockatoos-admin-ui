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
          <div class="flex flex-col gap-4">
            <Button :label="isLoading ? 'Stop Loading' : 'Start Loading'" @click="isLoading = !isLoading" />
            <div v-if="isLoading" class="relative border border-gray-200 rounded h-48">
              <BaseLoaderOverlay height="100%" size="large" text="Loading data..." />
            </div>
            <div v-else class="border border-gray-200 rounded h-48 flex items-center justify-center text-gray-400">
              Content area (overlay hidden)
            </div>
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
import BaseLoaderOverlay from "../../components/BaseLoaderOverlay.vue";

const isLoading = ref(false);

const importCode = `import BaseLoaderOverlay from "kockatoos-admin-ui/components/BaseLoaderOverlay.vue";`;

const propsTable = [
  { name: 'width', type: 'String', required: false, default: "'100%'", description: 'CSS width of the overlay container.' },
  { name: 'height', type: 'String', required: false, default: "'200px'", description: 'CSS height of the overlay container.' },
  { name: 'text', type: 'String', required: false, default: "'LOADING'", description: 'Text shown below the spinner.' },
  { name: 'size', type: 'String', required: false, default: "'small'", description: "Spinner size. One of 'small' (24px), 'medium' (32px), 'large' (48px)." },
  { name: 'background', type: 'String', required: false, default: "'bg-white'", description: 'Tailwind background class applied to the overlay.' },
];
</script>