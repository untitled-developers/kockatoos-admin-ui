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
          <div class="flex flex-col gap-4 w-full max-w-sm">
            <BaseInputContainer
                label="Username"
                help-text="Must be unique across the system."
                :single-error="false"
                show-errors
                :errors="['Username is required', 'Must be at least 3 characters']">
              <template #label-right>
                <span class="text-xs text-gray-400 ml-2">required</span>
              </template>
              <InputText placeholder="Enter username" class="w-full" />
            </BaseInputContainer>

            <BaseInputContainer
                label="Email"
                :errors="[]"
                show-errors>
              <InputText placeholder="Enter email" class="w-full" />
            </BaseInputContainer>
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { InputText } from "primevue";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import BaseInputContainer from "../../components/BaseInputContainer.vue";

const importCode = `import BaseInputContainer from "kockatoos-admin-ui/components/BaseInputContainer.vue";`;

const propsTable = [
  { name: 'label', type: 'String', required: false, default: null, description: 'Label text displayed above the input.' },
  { name: 'helpText', type: 'String', required: false, default: null, description: 'Optional help text shown below the input in grey.' },
  { name: 'showErrors', type: 'Boolean', required: false, default: 'false', description: 'When true, renders the errors array below the input.' },
  { name: 'errors', type: 'Array', required: false, default: '[]', description: 'Array of error message strings to display.' },
  { name: 'singleError', type: 'Boolean', required: false, default: 'true', description: 'When true, only the first error is shown. When false, all errors are shown as a list.' },
];

const slotsTable = [
  { name: 'default', purpose: 'The input element (e.g. InputText, Select, DatePicker).' },
  { name: 'label-right', purpose: 'Content rendered to the right of the label. Useful for "required" badges or action links.' },
];
</script>