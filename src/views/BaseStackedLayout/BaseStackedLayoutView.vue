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

      <BaseDocSection title="Slots">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr>
              <th class="py-2 pr-4">Name</th>
              <th class="py-2">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in slotsTable" :key="s.name" class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>{{ s.name }}</code></td>
              <td class="py-2">{{ s.purpose }}</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <BaseStackedLayout :navigation-items="navItems">
            <template #content>
              <h2 class="text-lg font-semibold text-gray-800 px-4 pt-3">Record Details</h2>
            </template>
            <div class="p-4 text-gray-600">
              Page content goes here beneath the tab bar.
            </div>
          </BaseStackedLayout>
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
import BaseStackedLayout from "../../components/BaseStackedLayout.vue";

const importCode = `import BaseStackedLayout from "kockatoos-admin-ui/components/BaseStackedLayout.vue";`;

const navItems = ref([
  { label: 'Overview' },
  { label: 'Settings' },
  { label: 'Activity' },
]);

const propsTable = [
  { name: 'navigationItems', type: 'Array', required: true, default: null, description: 'Array of navigation tab items. Each item may have a label, route, url, or target.' },
  { name: 'showNavigation', type: 'Boolean', required: false, default: 'true', description: 'When false the tab bar is rendered but invisible (useful for animation-delay patterns).' },
];

const slotsTable = [
  { name: 'content', purpose: 'Rendered above the tab bar. Typically a page title or record-level header.' },
  { name: 'default', purpose: 'Rendered below the tab bar. The main page content area.' },
];
</script>