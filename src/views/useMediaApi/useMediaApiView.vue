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
          useMediaApi makes real HTTP calls. In the standalone sandbox calls will fail with a network error — that is the expected demo output. In a running admin panel these hit the <code>/api/blobs</code> endpoint.
        </p>
        <BaseDocFunctionalityPreview>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <Button label="get (all blobs)" @click="runGet" />
              <Button label="update(1, {})" severity="secondary" @click="runUpdate" />
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
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import useMediaApi from "../../composables/useMediaApi.js";

const result = ref(null);

async function runGet() {
  result.value = 'Loading…';
  try {
    const res = await useMediaApi().get({ paginate: false, withExistence: 1 });
    result.value = JSON.stringify(res?.data ?? res, null, 2);
  } catch (e) { result.value = `Error: ${e.message}`; }
}

async function runUpdate() {
  result.value = 'Loading…';
  try {
    const res = await useMediaApi().update(1, { name: 'updated.jpg' });
    result.value = JSON.stringify(res?.data ?? res, null, 2);
  } catch (e) { result.value = `Error: ${e.message}`; }
}

const importCode = `import useMediaApi from "kockatoos-admin-ui/composables/useMediaApi.js";`;

const signatureCode = `const { get, update } = useMediaApi();
// Defaults to endpoint: 'api/blobs'
// Custom endpoint:
const { get, update } = useMediaApi('api/custom-blobs');

get(query?)         // GET /api/blobs?...query
update(id, data)    // POST /api/blobs/:id`;
</script>