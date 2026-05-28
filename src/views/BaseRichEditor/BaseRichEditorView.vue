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

      <BaseDocSection title="Emits">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr>
              <th class="py-2 pr-4">Name</th>
              <th class="py-2 pr-4">Payload</th>
              <th class="py-2">When</th>
            </tr>
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
          <BaseRichEditor v-model="content" />
          <p class="text-sm text-gray-500 mt-2">Content length: {{ content.length }} characters</p>
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
import BaseRichEditor from "../../components/BaseRichEditor.vue";

const content = ref('<p>Hello <strong>world</strong>! Edit me.</p>');

const importCode = `import BaseRichEditor from "kockatoos-admin-ui/components/BaseRichEditor.vue";
// Requires @ckeditor/ckeditor5-vue and ckeditor5 (already in ui/package.json optionalDependencies)`;

const propsTable = [
  { name: 'modelValue', type: 'any', required: false, default: null, description: 'The HTML content string. Bind with v-model.' },
  { name: 'language', type: 'String', required: false, default: "'en'", description: 'Content language for CKEditor (affects spell-check and text direction).' },
  { name: 'error', type: 'String', required: false, default: "''", description: 'Error message displayed below the editor.' },
];

const emitsTable = [
  { name: 'update:modelValue', payload: 'string', when: 'Editor content changes.' },
  { name: 'ready', payload: 'editor (CKEditor instance)', when: 'Editor has mounted and is ready.' },
  { name: 'input', payload: 'view document', when: 'User types in the editor.' },
];
</script>