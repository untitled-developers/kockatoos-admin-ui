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
        <p class="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3 mb-3">
          useCrudApi makes real HTTP calls via axios. In the standalone sandbox calls will fail with a network error — that is the expected demo output. In a running admin panel the same calls hit your backend.
        </p>
        <BaseDocFunctionalityPreview>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <label class="text-sm font-medium text-gray-600 w-20">Endpoint:</label>
              <InputText v-model="endpoint" class="flex-1" placeholder="api/example" />
            </div>
            <div class="flex flex-wrap gap-2">
              <Button label="get()" @click="runGet" />
              <Button label="create({ name })" severity="secondary" @click="runCreate" />
              <Button label="update(1, { name })" severity="secondary" @click="runUpdate" />
              <Button label="destroy(1)" severity="danger" @click="runDestroy" />
            </div>
            <pre v-if="result !== null" class="text-xs bg-gray-50 p-3 rounded text-gray-700 overflow-auto max-h-48">{{ result }}</pre>
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import { InputText } from "primevue";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import useCrudApi from "../../composables/useCrudApi.js";

const endpoint = ref('api/example');
const result = ref(null);

async function runGet() {
  result.value = 'Loading…';
  try {
    const res = await useCrudApi(endpoint.value).get();
    result.value = JSON.stringify(res?.data ?? res, null, 2);
  } catch (e) { result.value = `Error: ${e.message}`; }
}
async function runCreate() {
  result.value = 'Loading…';
  try {
    const res = await useCrudApi(endpoint.value).create({ name: 'New Record' });
    result.value = JSON.stringify(res?.data ?? res, null, 2);
  } catch (e) { result.value = `Error: ${e.message}`; }
}
async function runUpdate() {
  result.value = 'Loading…';
  try {
    const res = await useCrudApi(endpoint.value).update(1, { name: 'Updated Record' });
    result.value = JSON.stringify(res?.data ?? res, null, 2);
  } catch (e) { result.value = `Error: ${e.message}`; }
}
async function runDestroy() {
  result.value = 'Loading…';
  try {
    const res = await useCrudApi(endpoint.value).destroy(1);
    result.value = JSON.stringify(res?.data ?? res, null, 2);
  } catch (e) { result.value = `Error: ${e.message}`; }
}

const importCode = `import useCrudApi from "kockatoos-admin-ui/composables/useCrudApi.js";`;

const signatureCode = `const { get, create, update, destroy } = useCrudApi(endpoint);

get(query?)          // GET  /{endpoint}?...params
create(data)         // POST /{endpoint}
update(id, data)     // POST /{endpoint}/:id
destroy(id)          // DELETE /{endpoint}/:id`;
</script>