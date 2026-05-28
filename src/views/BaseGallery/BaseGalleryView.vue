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
        <BaseDocFunctionalityPreview>
          <BaseGallery v-model="images" url-path="url" />
          <p class="text-sm text-gray-500 mt-2">
            Click an image to select / deselect it. Drag to reorder. Selected: {{ selectedCount }} image(s).
          </p>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref, computed } from "vue";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import BaseGallery from "../../components/BaseGallery.vue";

const images = ref([
  { id: 1, url: 'https://picsum.photos/seed/1/400', name: 'photo-1.jpg', size: 45000 },
  { id: 2, url: 'https://picsum.photos/seed/2/400', name: 'photo-2.jpg', size: 52000 },
  { id: 3, url: 'https://picsum.photos/seed/3/400', name: 'photo-3.jpg', size: 38000 },
  { id: 4, url: 'https://picsum.photos/seed/4/400', name: 'photo-4.jpg', size: 61000 },
  { id: 5, url: 'https://picsum.photos/seed/5/400', name: 'photo-5.jpg', size: 47000 },
  { id: 6, url: 'https://picsum.photos/seed/6/400', name: 'photo-6.jpg', size: 55000 },
]);

const selectedCount = ref(0);

function handleSelectionChange({ selected }) {
  selectedCount.value = selected.length;
}

const importCode = `import BaseGallery from "kockatoos-admin-ui/components/BaseGallery.vue";`;

const propsTable = [
  { name: 'urlPath', type: 'String', required: true, default: null, description: 'Key path on each item to the image URL.' },
  { name: 'idPath', type: 'String', required: false, default: "'id'", description: 'Key path to the unique id on each item.' },
  { name: 'namePath', type: 'String', required: false, default: "''", description: 'Key path to the file name (shown in the details card).' },
  { name: 'sizePath', type: 'String', required: false, default: "''", description: 'Key path to the file size in bytes (shown in the details card).' },
  { name: 'isLoading', type: 'Boolean', required: false, default: 'false', description: 'Show a loading spinner overlay over the gallery.' },
];

const emitsTable = [
  { name: 'update:modelValue', payload: 'items[]', when: 'Item order changes after drag-and-drop sort.' },
  { name: 'selectionChange', payload: '{ selected: items[], lastSelected: item }', when: 'Item selection state changes.' },
  { name: 'deleteItems', payload: 'items[]', when: 'Delete button clicked (shown when items are selected).' },
  { name: 'sortItems', payload: 'items[]', when: 'Items are reordered by drag-and-drop.' },
];
</script>