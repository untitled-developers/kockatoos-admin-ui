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
          <div class="flex flex-col gap-4">
            <div class="flex gap-2">
              <Button :label="isEditing ? 'Switch to Add mode' : 'Switch to Edit mode'"
                      severity="secondary"
                      @click="isEditing = !isEditing" />
            </div>
            <p class="text-sm text-gray-600">
              Mode: <strong>{{ isEditing ? 'Edit (record provided → password omitted)' : 'Add (no record → password included)' }}</strong>
            </p>
            <pre class="text-xs bg-gray-50 p-3 rounded text-gray-700">{{ schemaInfo }}</pre>
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref, computed } from "vue";
import * as zod from "zod";
import Button from "primevue/button";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import useCreateFormSchema from "../../composables/useCreateFormSchema.js";

const isEditing = ref(false);

const baseSchema = zod.object({
  name: zod.string().min(1),
  email: zod.string().email(),
  password: zod.string().min(8),
});

const schemaInfo = computed(() => {
  const props = { record: isEditing.value ? { id: 1 } : null };
  const { createFormSchema } = useCreateFormSchema({ props });
  const schema = createFormSchema(baseSchema);
  const keys = Object.keys(schema.shape ?? {});
  return `Schema keys: [${keys.join(', ')}]\npassword included: ${keys.includes('password')}`;
});

const importCode = `import useCreateFormSchema from "kockatoos-admin-ui/composables/useCreateFormSchema.js";`;

const signatureCode = `const { createFormSchema } = useCreateFormSchema({ props });
// props.record: null → Add mode (password field kept)
// props.record: object → Edit mode (password field auto-omitted)

const schema = createFormSchema(
  zod.object({
    name: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(8),
  })
);
// In Edit mode, schema.shape has no 'password' key.`;
</script>