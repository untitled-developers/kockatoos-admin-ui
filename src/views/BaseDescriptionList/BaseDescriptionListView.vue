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
            <tr><th class="py-2 pr-4">Name</th><th class="py-2">Purpose</th></tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>default</code></td>
              <td class="py-2">Place <code>BaseDescriptionListItem</code> children here.</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <BaseDescriptionList title="User Details" subtitle="Account and contact information" :cols="2">
            <BaseDescriptionListItem>
              <template #label>Full Name</template>
              <template #value>Alice Johnson</template>
            </BaseDescriptionListItem>
            <BaseDescriptionListItem>
              <template #label>Email</template>
              <template #value>alice@example.com</template>
            </BaseDescriptionListItem>
            <BaseDescriptionListItem>
              <template #label>Role</template>
              <template #value>Administrator</template>
            </BaseDescriptionListItem>
            <BaseDescriptionListItem :loading="true">
              <template #label>Last Login</template>
              <template #value>—</template>
            </BaseDescriptionListItem>
          </BaseDescriptionList>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>

      <BaseDocSection title="Sub-components">
        <BaseDocSection title="BaseDescriptionListItem">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImportCode" />
          <p class="text-sm text-gray-600 my-3">
            A single row inside <code>BaseDescriptionList</code>. Renders a label (<code>dt</code>) and value (<code>dd</code>) pair. Shows a Skeleton placeholder when <code>loading</code> is true.
          </p>
          <table class="w-full text-sm border-collapse mt-2">
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
              <tr v-for="p in subPropsTable" :key="p.name" class="border-t border-gray-100">
                <td class="py-2 pr-4"><code>{{ p.name }}</code></td>
                <td class="py-2 pr-4"><code>{{ p.type }}</code></td>
                <td class="py-2 pr-4">{{ p.required ? 'Yes' : 'No' }}</td>
                <td class="py-2 pr-4"><code>{{ p.default ?? '—' }}</code></td>
                <td class="py-2">{{ p.description }}</td>
              </tr>
            </tbody>
          </table>
          <p class="text-sm text-gray-500 mt-3 font-medium">Slots</p>
          <table class="w-full text-sm border-collapse mt-1">
            <thead class="text-left text-stone-500">
              <tr><th class="py-2 pr-4">Name</th><th class="py-2">Purpose</th></tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-100">
                <td class="py-2 pr-4"><code>label</code></td>
                <td class="py-2">The <code>dt</code> label text.</td>
              </tr>
              <tr class="border-t border-gray-100">
                <td class="py-2 pr-4"><code>value</code></td>
                <td class="py-2">The <code>dd</code> value content. Hidden and replaced by Skeleton when <code>loading</code> is true.</td>
              </tr>
            </tbody>
          </table>
        </BaseDocSection>
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
import BaseDescriptionList from "../../components/BaseDescriptionList.vue";
import BaseDescriptionListItem from "../../components/BaseDescriptionListItem.vue";

const importCode = `import BaseDescriptionList from "kockatoos-admin-ui/components/BaseDescriptionList.vue";`;
const subImportCode = `import BaseDescriptionListItem from "kockatoos-admin-ui/components/BaseDescriptionListItem.vue";`;

const propsTable = [
  { name: 'title', type: 'String', required: false, default: null, description: 'Section heading displayed above the list.' },
  { name: 'subtitle', type: 'String', required: false, default: null, description: 'Secondary text below the title.' },
  { name: 'cols', type: 'Number', required: false, default: '2', description: 'Number of grid columns for the dl element (sm: breakpoint is always 1 col).' },
];

const subPropsTable = [
  { name: 'cols', type: 'Number', required: false, default: '1', description: 'Column span of this item within the parent grid.' },
  { name: 'loading', type: 'Boolean', required: false, default: 'false', description: 'When true shows a Skeleton placeholder instead of the value slot.' },
];
</script>