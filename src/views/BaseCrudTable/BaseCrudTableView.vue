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
        <p class="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3 mb-3">
          BaseCrudTable requires a REST endpoint. In the standalone sandbox there is no backend, so the table shows its loading/empty state. In a running admin panel, provide a real endpoint and the table fetches data automatically.
        </p>
        <BaseDocFunctionalityPreview>
          <div class="h-96">
            <BaseCrudTable
                endpoint="api/example"
                :with-add="false"
                :with-edit="false"
                :with-delete="false"
                :with-record-actions="false">
              <template #columns>
                <Column field="id" header="ID" />
                <Column field="name" header="Name" />
                <Column field="email" header="Email" />
              </template>
            </BaseCrudTable>
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>

      <BaseDocSection title="Sub-components">

        <BaseDocSection title="BaseCrudTableColumn">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImports.column" />
          <p class="text-sm text-gray-600 my-2">A thin Column wrapper. Note: currently deferred — use PrimeVue Column directly inside the columns slot.</p>
          <table class="w-full text-sm border-collapse mt-2">
            <thead class="text-left text-stone-500"><tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Type</th><th class="py-2 pr-4">Required</th><th class="py-2 pr-4">Default</th><th class="py-2">Description</th></tr></thead>
            <tbody>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>field</code></td><td class="py-2 pr-4"><code>String</code></td><td class="py-2 pr-4">No</td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">Data field key to display in this column.</td></tr>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>header</code></td><td class="py-2 pr-4"><code>String</code></td><td class="py-2 pr-4">No</td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">Column header label.</td></tr>
            </tbody>
          </table>
        </BaseDocSection>

        <BaseDocSection title="BaseCrudTableColumnFilter">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImports.columnFilter" />
          <p class="text-sm text-gray-600 my-2">A filter input used inside column filter headers. Supports datePicker and select types.</p>
          <table class="w-full text-sm border-collapse mt-2">
            <thead class="text-left text-stone-500"><tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Type</th><th class="py-2 pr-4">Required</th><th class="py-2 pr-4">Default</th><th class="py-2">Description</th></tr></thead>
            <tbody>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>type</code></td><td class="py-2 pr-4"><code>String</code></td><td class="py-2 pr-4">Yes</td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">'datePicker' or 'select'.</td></tr>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>config</code></td><td class="py-2 pr-4"><code>Object</code></td><td class="py-2 pr-4">No</td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">Type-specific config (options, optionLabel, optionValue, selectionMode, etc.).</td></tr>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>v-model:filterValue</code></td><td class="py-2 pr-4"><code>any</code></td><td class="py-2 pr-4">No</td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">The current filter value.</td></tr>
            </tbody>
          </table>
        </BaseDocSection>

        <BaseDocSection title="BaseCrudTableFilterButton">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImports.filterButton" />
          <p class="text-sm text-gray-600 my-2">A small rounded filter icon button. Renders primary (active) or secondary (inactive) styling based on isActive.</p>
          <table class="w-full text-sm border-collapse mt-2">
            <thead class="text-left text-stone-500"><tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Type</th><th class="py-2 pr-4">Required</th><th class="py-2 pr-4">Default</th><th class="py-2">Description</th></tr></thead>
            <tbody>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>isActive</code></td><td class="py-2 pr-4"><code>any</code></td><td class="py-2 pr-4">Yes</td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">Truthy → primary style; falsy → secondary style.</td></tr>
            </tbody>
          </table>
        </BaseDocSection>

        <BaseDocSection title="BaseCrudTableActionsButton">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImports.actionsButton" />
          <p class="text-sm text-gray-600 my-2">A styled list button placed inside BaseCrudTableActionsDropdown. Use for Edit, Delete, and custom row actions.</p>
          <table class="w-full text-sm border-collapse mt-2">
            <thead class="text-left text-stone-500"><tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Type</th><th class="py-2 pr-4">Required</th><th class="py-2 pr-4">Default</th><th class="py-2">Description</th></tr></thead>
            <tbody>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>text</code></td><td class="py-2 pr-4"><code>String</code></td><td class="py-2 pr-4">Yes</td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">Button label text.</td></tr>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>icon</code></td><td class="py-2 pr-4"><code>String</code></td><td class="py-2 pr-4">No</td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">PrimeIcons class (e.g. 'pi pi-pencil').</td></tr>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>severity</code></td><td class="py-2 pr-4"><code>String</code></td><td class="py-2 pr-4">No</td><td class="py-2 pr-4"><code>'default'</code></td><td class="py-2">One of: default, secondary, success, info, warn, help, danger.</td></tr>
            </tbody>
          </table>
        </BaseDocSection>

        <BaseDocSection title="BaseCrudTableActionsDropdown">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImports.actionsDropdown" />
          <p class="text-sm text-gray-600 my-2">A three-dot popover that contains BaseCrudTableActionsButton children. Already wired into BaseCrudTable's record-actions column when withRecordActions is true.</p>
          <p class="text-sm text-gray-500 mt-2 font-medium">Slots</p>
          <table class="w-full text-sm border-collapse mt-1">
            <thead class="text-left text-stone-500"><tr><th class="py-2 pr-4">Name</th><th class="py-2">Purpose</th></tr></thead>
            <tbody>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>default</code></td><td class="py-2">Place BaseCrudTableActionsButton items here.</td></tr>
            </tbody>
          </table>
        </BaseDocSection>

      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import Column from "primevue/column";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import BaseCrudTable from "../../components/BaseCrudTable.vue";

const importCode = `import BaseCrudTable from "kockatoos-admin-ui/components/BaseCrudTable.vue";`;

const subImports = {
  column: `import BaseCrudTableColumn from "kockatoos-admin-ui/components/BaseCrudTableColumn.vue";`,
  columnFilter: `import BaseCrudTableColumnFilter from "kockatoos-admin-ui/components/BaseCrudTableColumnFilter.vue";`,
  filterButton: `import BaseCrudTableFilterButton from "kockatoos-admin-ui/components/BaseCrudTableFilterButton.vue";`,
  actionsButton: `import BaseCrudTableActionsButton from "kockatoos-admin-ui/components/BaseCrudTableActionsButton.vue";`,
  actionsDropdown: `import BaseCrudTableActionsDropdown from "kockatoos-admin-ui/components/BaseCrudTableActionsDropdown.vue";`,
};

const propsTable = [
  { name: 'endpoint', type: 'String', required: true, default: null, description: 'REST endpoint URL. The table appends pagination, sort, and filter params automatically.' },
  { name: 'defaultQuery', type: 'Object', required: false, default: null, description: 'Extra query params merged into every request.' },
  { name: 'editMode', type: 'String', required: false, default: 'null', description: "PrimeVue DataTable editMode. Pass 'cell' for inline cell editing." },
  { name: 'editDialog', type: 'Object', required: false, default: null, description: 'The Vue component reference used as the edit dialog.' },
  { name: 'editDialogProps', type: 'Object', required: false, default: '{}', description: 'Extra props forwarded to the edit dialog component.' },
  { name: 'editDialogHandlers', type: 'Object', required: false, default: '{}', description: 'Event handlers forwarded to the edit dialog component.' },
  { name: 'withAdd', type: 'Boolean', required: false, default: 'true', description: 'Show the New button in the toolbar.' },
  { name: 'defaultSort', type: 'Object', required: false, default: '{ field: "id", order: -1 }', description: 'Initial sort field and direction (-1 DESC, 1 ASC).' },
  { name: 'withClearFilters', type: 'Boolean', required: false, default: 'true', description: 'Show the Clear Filters button in the toolbar.' },
  { name: 'clickableRows', type: 'Boolean', required: false, default: 'false', description: 'Enable single-row click selection.' },
  { name: 'withSelection', type: 'Boolean', required: false, default: 'false', description: 'Show a multi-select checkbox column.' },
  { name: 'withRecordActions', type: 'Boolean', required: false, default: 'true', description: 'Show the actions dropdown column.' },
  { name: 'withEdit', type: 'Boolean', required: false, default: 'true', description: 'Include an Edit button in the actions dropdown.' },
  { name: 'withDelete', type: 'Boolean', required: false, default: 'true', description: 'Include a Delete button in the actions dropdown.' },
  { name: 'rowIdentifier', type: 'String', required: false, default: "'id'", description: 'Primary key field on each row object.' },
  { name: 'customSortMapper', type: 'Function', required: false, default: null, description: 'Maps sort meta to a custom query string before the request is sent.' },
  { name: 'editButtonConfig', type: 'Object', required: false, default: '{}', description: 'Overrides for the built-in Edit button (e.g. { label: "View" }).' },
  { name: 'informational', type: 'Boolean', required: false, default: 'false', description: 'Hides all write actions (New, Edit, Delete). Read-only display mode.' },
  { name: 'deleteQueryParams', type: 'Object', required: false, default: '{}', description: 'Extra query params appended to the delete request.' },
  { name: 'filters', type: 'Object', required: false, default: '{}', description: 'PrimeVue FilterMatchMode filter state. Pass an initial filter object to pre-filter the table.' },
];

const emitsTable = [
  { name: 'row-click', payload: '{ data: record }', when: 'A row is clicked (when clickableRows is true).' },
  { name: 'cell-edit-complete', payload: '{ data, field, newValue }', when: 'A cell edit is committed (when editMode="cell").' },
  { name: 'update:multi-sort-meta', payload: 'SortMeta[]', when: 'Sort meta changes.' },
];

const slotsTable = [
  { name: 'columns', purpose: 'Place Column (or BaseCrudTableColumn) components here. Receives { isFilterActive(field) } slot prop.' },
  { name: 'record-actions', purpose: 'Custom action buttons inside the actions dropdown. Receives { record } slot prop.' },
  { name: 'controls-start', purpose: 'Content at the start of the toolbar (after New / Clear Filters).' },
  { name: 'controls-center', purpose: 'Content in the center of the toolbar.' },
  { name: 'controls-end', purpose: 'Content at the end of the toolbar (before the search field).' },
];
</script>