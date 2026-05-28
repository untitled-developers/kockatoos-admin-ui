<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview title="Import" language="JavaScript" :source="importCode" />
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
          <BaseCard>
            <template #header>
              <h3 class="font-semibold text-gray-800">Card Header</h3>
            </template>
            <p class="text-gray-600">This is the main card body content. Place any content here — forms, lists, description lists, or other components.</p>
            <template #footer>
              <div class="flex justify-end gap-2">
                <Button severity="secondary" label="Cancel" />
                <Button label="Save" />
              </div>
            </template>
          </BaseCard>
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
import BaseCard from "../../components/BaseCard.vue";
import Button from "primevue/button";

const importCode = `import BaseCard from "kockatoos-admin-ui/components/BaseCard.vue";`;

const slotsTable = [
  { name: 'header', purpose: 'Optional. Rendered in a top stripe above the main content area.' },
  { name: 'default', purpose: 'Main card body. Always rendered.' },
  { name: 'footer', purpose: 'Optional. Rendered in a bottom stripe below the main content area.' },
];
</script>