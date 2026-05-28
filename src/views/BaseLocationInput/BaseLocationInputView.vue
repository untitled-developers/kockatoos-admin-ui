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
            <tr class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>change</code></td>
              <td class="py-2 pr-4"><code>{ latitude: number, longitude: number }</code></td>
              <td class="py-2">Fired when the user finishes dragging the marker to a new position.</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <BaseLocationInput @change="handleChange" />
          <pre class="text-xs text-gray-500 mt-2 bg-gray-50 p-2 rounded">Last change: {{ lastChange ?? 'Drag the marker to see coordinates' }}</pre>
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
import BaseLocationInput from "../../components/BaseLocationInput.vue";

const lastChange = ref(null);
function handleChange(coords) {
  lastChange.value = coords;
}

const importCode = `import BaseLocationInput from "kockatoos-admin-ui/components/BaseLocationInput.vue";`;

const propsTable = [
  { name: 'latitude', type: 'Number', required: false, default: 'null', description: 'Initial marker latitude. Falls back to defaultLocation.latitude when null.' },
  { name: 'longitude', type: 'Number', required: false, default: 'null', description: 'Initial marker longitude. Falls back to defaultLocation.longitude when null.' },
  { name: 'defaultLocation', type: 'Object', required: false, default: '{ latitude: 33.89, longitude: 35.50 }', description: 'Fallback center/marker position when latitude/longitude are null (Beirut).' },
  { name: 'apiKey', type: 'String', required: false, default: 'built-in key', description: 'Google Maps JavaScript API key. Override in production with your own key.' },
];
</script>