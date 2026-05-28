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
            <tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Payload</th><th class="py-2">When</th></tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>select-option</code></td>
              <td class="py-2 pr-4"><code>item</code></td>
              <td class="py-2">Emitted when a user clicks an item in the list to add it.</td>
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
            <tr v-for="s in slotsTable" :key="s.name" class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>{{ s.name }}</code></td>
              <td class="py-2">{{ s.purpose }}</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <BaseGroupItemsSelector
              :groups="groups"
              :groups-items="groupsItems"
              v-model:selected-items="selectedItems"
          >
            <template #item="{ item }">
              <div class="flex items-center justify-between p-2 bg-white rounded border border-gray-200 mt-1">
                <span>{{ item.name }}</span>
                <button class="text-red-500 text-xs" @click="selectedItems = selectedItems.filter(i => i.id !== item.id)">Remove</button>
              </div>
            </template>
          </BaseGroupItemsSelector>
          <details class="mt-4">
            <summary class="text-sm text-gray-500 cursor-pointer">Selected items JSON</summary>
            <pre class="text-xs text-gray-500 bg-gray-50 p-2 rounded mt-1">{{ JSON.stringify(selectedItems, null, 2) }}</pre>
          </details>
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
import BaseGroupItemsSelector from "../../components/BaseGroupItemsSelector.vue";

const groups = [
  { id: 1, name: 'Fruits' },
  { id: 2, name: 'Vegetables' },
];
const groupsItems = [
  { id: 1, name: 'Apple', group_id: 1 },
  { id: 2, name: 'Banana', group_id: 1 },
  { id: 3, name: 'Cherry', group_id: 1 },
  { id: 4, name: 'Carrot', group_id: 2 },
  { id: 5, name: 'Broccoli', group_id: 2 },
];
const selectedItems = ref([]);

const importCode = `import BaseGroupItemsSelector from "kockatoos-admin-ui/components/BaseGroupItemsSelector.vue";`;

const propsTable = [
  { name: 'groups', type: 'Array', required: true, default: null, description: 'Array of group objects. Each must have an id and the label field specified by groupListConfig.optionLabel.' },
  { name: 'groupsItems', type: 'Array', required: true, default: null, description: 'Flat array of all items. Each item must have an id and the group link field specified by itemsGroupKey.' },
  { name: 'groupListConfig', type: 'Object', required: false, default: "{ optionLabel: 'name', inputLabel: 'Group' }", description: 'Configures the group dropdown. optionLabel is the property shown in the dropdown; inputLabel is the dropdown label.' },
  { name: 'itemsGroupKey', type: 'String', required: false, default: "'group_id'", description: 'Property on each item that links it to its parent group id.' },
  { name: 'groupItemsLabel', type: 'String', required: false, default: "'name'", description: 'Property on each item used as the display label in the list.' },
];

const slotsTable = [
  { name: 'non-selected-group-message', purpose: 'Replaces the default "Select A Group" placeholder shown when no group is selected.' },
  { name: 'item', purpose: 'Slot for rendering each selected item. Receives { item } slot prop.' },
];
</script>