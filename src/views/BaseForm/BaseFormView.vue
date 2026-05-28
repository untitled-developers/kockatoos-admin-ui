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

      <BaseDocSection title="Slots">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr>
              <th class="py-2 pr-4">Name</th>
              <th class="py-2">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>default</code></td>
              <td class="py-2">Form content. Receives <code>{ getErrors(path): string[], hasError(): boolean }</code> as slot props.</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <BaseCard>
            <BaseForm form-id="example-form"
                      v-model:form-data="form"
                      v-model:form-schema="formSchema"
                      ref="formRef">
              <template #default="{getErrors}">
                <div class="flex flex-col gap-4">
                  <BaseInputContainer
                      v-model="form.name"
                      name="name"
                      label="Name"
                      show-errors
                      :errors="getErrors('name')">
                    <InputText v-model="form.name" class="w-full" />
                  </BaseInputContainer>
                  <BaseInputContainer
                      v-model="form.email"
                      name="email"
                      label="Email"
                      show-errors
                      :errors="getErrors('email')">
                    <InputText v-model="form.email" class="w-full" />
                  </BaseInputContainer>
                  <Button type="submit" label="Submit" />
                </div>
              </template>
            </BaseForm>
            <template #footer>
              <pre class="text-xs text-gray-500 overflow-auto">{{ formRef?.errors }}</pre>
            </template>
          </BaseCard>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref } from "vue";
import * as zod from "zod";
import { InputText } from "primevue";
import Button from "primevue/button";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import BaseForm from "../../components/BaseForm.vue";
import BaseInputContainer from "../../components/BaseInputContainer.vue";
import BaseCard from "../../components/BaseCard.vue";
import useCreateFormSchema from "../../composables/useCreateFormSchema.js";

const importCode = `import BaseForm from "kockatoos-admin-ui/components/BaseForm.vue";`;

const propsTable = [
  { name: 'formId', type: 'String', required: true, default: null, description: 'HTML id applied to the <form> element. Required so submit buttons with type="submit" and matching form="" attribute work outside the form.' },
];

const emitsTable = [
  { name: 'submit', payload: '(event: SubmitEvent, errors: ZodFormatted)', when: 'Fired when the native form submit event fires (on Enter or type="submit" button click).' },
];

const formRef = ref();
const form = ref({ name: '', email: '' });
const { createFormSchema } = useCreateFormSchema({ props: { record: null } });
const formSchema = createFormSchema(zod.object({
  name: zod.string().min(1, 'Name is required'),
  email: zod.string().email('Invalid email address'),
}));
</script>