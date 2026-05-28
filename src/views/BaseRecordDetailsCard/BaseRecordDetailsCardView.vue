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
              <td class="py-2 pr-4"><code>subtitle</code></td>
              <td class="py-2">Secondary metadata rendered below the title (e.g. email, role badge, status).</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <BaseRecordDetailsCard
              profile-image="https://picsum.photos/seed/alice/200"
              title="Alice Johnson">
            <template #subtitle>
              <span class="text-gray-500 text-sm">alice@example.com · Administrator</span>
            </template>
          </BaseRecordDetailsCard>
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
import BaseRecordDetailsCard from "../../components/BaseRecordDetailsCard.vue";

const importCode = `import BaseRecordDetailsCard from "kockatoos-admin-ui/components/BaseRecordDetailsCard.vue";`;

const propsTable = [
  { name: 'title', type: 'String', required: true, default: null, description: 'Primary heading displayed next to the profile image.' },
  { name: 'profileImage', type: 'String', required: false, default: null, description: 'URL of the circular profile image. Omit to show the title only.' },
];
</script>