<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview title="Import" language="JavaScript" :source="importCode" />
      </BaseDocSection>

      <BaseDocSection title="Signature">
        <BaseDocCodePreview title="Signature" language="JavaScript" :source="signatureCode" />
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <div class="flex flex-col gap-4 max-w-sm">
            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium">Name</label>
              <InputText v-model="form.name" placeholder="Enter name" />
              <p v-if="getErrors('name').length" class="text-red-500 text-sm">{{ getErrors('name')[0] }}</p>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium">Email</label>
              <InputText v-model="form.email" placeholder="Enter email" />
              <p v-if="getErrors('email').length" class="text-red-500 text-sm">{{ getErrors('email')[0] }}</p>
            </div>
            <p class="text-sm" :class="hasErrors() ? 'text-red-500' : 'text-green-600'">
              hasErrors(): {{ hasErrors() }}
            </p>
            <details>
              <summary class="text-sm text-gray-500 cursor-pointer">Raw errors object</summary>
              <pre class="text-xs bg-gray-50 p-2 rounded mt-1">{{ errors }}</pre>
            </details>
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref } from "vue";
import * as zod from "zod";
import { InputText } from "primevue";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import useForm from "../../composables/useForm.js";

const form = ref({ name: '', email: '' });
const schema = zod.object({
  name: zod.string().min(1, 'Name is required'),
  email: zod.string().email('Invalid email address'),
});
const { errors, getErrors, hasErrors } = useForm(form, schema);

const importCode = `import useForm from "kockatoos-admin-ui/composables/useForm.js";`;

const signatureCode = `const form = ref({ name: '', email: '' });
const schema = zod.object({ name: zod.string().min(1), email: zod.string().email() });

const { errors, getErrors, hasErrors } = useForm(form, schema);

// errors  → computed (Zod formatted error object or { success: true })
// getErrors('name') → string[]   — field-level error messages
// hasErrors()       → boolean    — true when any field has errors`;
</script>