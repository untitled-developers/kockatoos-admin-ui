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
            <tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Payload</th><th class="py-2">When</th></tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>change</code></td>
              <td class="py-2 pr-4"><code>value</code></td>
              <td class="py-2">Emitted when the user selects a different option.</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <div class="flex flex-col gap-4">
            <div>
              <p class="text-sm text-gray-500 mb-1">With color mapping:</p>
              <BaseTableToggleSelect
                  :options="statusOptions"
                  :value="currentStatus"
                  :color-mapping="colorMapping"
                  @change="currentStatus = $event"
              />
            </div>
            <pre class="text-xs text-gray-500 bg-gray-50 p-2 rounded">Current value: {{ currentStatus }}</pre>
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
import BaseTableToggleSelect from "../../components/BaseTableToggleSelect.vue";

const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' },
];
const colorMapping = {
  active: 'green',
  inactive: 'red',
  pending: 'yellow',
};
const currentStatus = ref('active');

const importCode = `import BaseTableToggleSelect from "kockatoos-admin-ui/components/BaseTableToggleSelect.vue";`;

const propsTable = [
  { name: 'options', type: 'Array', required: true, default: null, description: 'Array of { label, value } objects for the dropdown options.' },
  { name: 'value', type: 'any', required: true, default: null, description: 'The initially selected value. Applied on mount via onMounted.' },
  { name: 'isLoading', type: 'Boolean', required: false, default: 'false', description: 'Puts the dropdown in a loading state.' },
  { name: 'colorMapping', type: 'Object', required: false, default: null, description: 'Maps option values to color keys (\'red\', \'green\', \'blue\', \'yellow\'). Applied as background/text Tailwind classes.' },
];
</script>