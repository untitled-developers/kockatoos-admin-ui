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
        <BaseDocFunctionalityPreview>
          <div class="flex flex-col gap-2">
            <div class="flex items-center">
              <SelectButton v-model="editDialogTypeValue"
                            :options="editDialogTypeOptions"
                            option-value="value"
                            optionLabel="name"/>
            </div>
            <Button @click="handleOpenDialogClick" label="Open Dialog"></Button>
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>

      <BaseDocSection title="Sub-components">
        <BaseDocSection title="BaseEditDialogNavigationButtons">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImportCode" />
          <p class="text-sm text-gray-600 my-2">
            A pair of Previous / Next chevron buttons rendered in the footer of BaseEditDialog when withNavigation is true and a record is being edited. Used for navigating between consecutive records without closing the dialog.
          </p>
          <p class="text-sm text-gray-500 mt-3 font-medium">Emits</p>
          <table class="w-full text-sm border-collapse mt-1">
            <thead class="text-left text-stone-500">
              <tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Payload</th><th class="py-2">When</th></tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>previous-record</code></td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">Left chevron clicked.</td></tr>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>next-record</code></td><td class="py-2 pr-4"><code>—</code></td><td class="py-2">Right chevron clicked.</td></tr>
            </tbody>
          </table>
        </BaseDocSection>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import useDialog from "../../composables/useDialog.js";
import BaseEditDialogTest from "./components/BaseEditDialogTest.vue";

const { openDialog, closeDialog } = useDialog();

const editDialogTypeOptions = [
  { name: 'Add', value: 'Add' },
  { name: 'Edit', value: 'Edit' },
];
const editDialogTypeValue = ref('Add');

const record = ref({
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  phone: '123-456-7890',
  password: 'password123',
});

function handleOpenDialogClick() {
  const dialogId = openDialog(BaseEditDialogTest, {
    props: {
      record: editDialogTypeValue.value === 'Edit' ? record.value : null,
    },
    handlers: {
      close: () => {
        console.log('Dialog closed');
        closeDialog(dialogId);
      },
      submit: (data) => {
        console.log('Submitted data:', data);
        closeDialog(dialogId);
      },
      'next-record': (record) => {
        console.log('Next record:', record);
      },
      'previous-record': (record) => {
        console.log('Previous record:', record);
      },
    },
  });
}

const importCode = `import BaseEditDialog from "kockatoos-admin-ui/components/BaseEditDialog.vue";`;
const subImportCode = `import BaseEditDialogNavigationButtons from "kockatoos-admin-ui/components/BaseEditDialogNavigationButtons.vue";`;

const propsTable = [
  { name: 'record', type: 'Object', required: false, default: null, description: 'Pass null for Add mode, pass the record object for Edit mode.' },
  { name: 'header', type: 'String', required: false, default: null, description: 'Dialog title. Defaults to the recordType if not set.' },
  { name: 'recordType', type: 'String', required: false, default: "''", description: 'Used to auto-generate the header ("Add {recordType}" / "Edit {recordType}").' },
  { name: 'endpoint', type: 'String', required: false, default: null, description: 'REST endpoint for submit. POST to endpoint (add) or POST to endpoint/:id (edit).' },
  { name: 'requestBodyMapper', type: 'Function', required: false, default: 'null', description: 'Transform the form data before sending to the API.' },
  { name: 'recordMapper', type: 'Function', required: false, default: 'null', description: 'Transform the record before populating the form on Edit.' },
  { name: 'fullHeight', type: 'Boolean', required: false, default: 'false', description: 'Stretch the dialog to viewport height.' },
  { name: 'position', type: 'String', required: false, default: "'center'", description: 'Dialog position (same as BaseDialog).' },
  { name: 'fullScreen', type: 'Boolean', required: false, default: 'false', description: 'Maximise the dialog.' },
  { name: 'withNavigation', type: 'Boolean', required: false, default: 'true', description: 'Show Previous / Next navigation buttons in the footer when editing.' },
  { name: 'withSubmit', type: 'Boolean', required: false, default: 'true', description: 'Show the Submit / Save button.' },
  { name: 'formId', type: 'String', required: false, default: null, description: 'HTML id to match the form inside the content slot.' },
  { name: 'width', type: 'String', required: false, default: null, description: 'Max-width of the dialog (CSS value).' },
  { name: 'withCloseButton', type: 'Boolean', required: false, default: 'true', description: 'Show the Close button in the footer.' },
  { name: 'requestUrlMapper', type: 'Function', required: false, default: null, description: 'Override the request URL per-call.' },
];

const emitsTable = [
  { name: 'next-record', payload: '—', when: 'Next navigation button clicked.' },
  { name: 'previous-record', payload: '—', when: 'Previous navigation button clicked.' },
  { name: 'submit', payload: 'formData', when: 'Form submitted and API call succeeds.' },
  { name: 'close', payload: '—', when: 'Dialog close is requested (X button or Close button).' },
];

const slotsTable = [
  { name: 'content', purpose: 'Dialog body. Receives { getErrors(path): string[], handleSubmit, didSubmit: boolean } slot props.' },
  { name: 'footer-end', purpose: 'Extra content appended to the right side of the footer toolbar.' },
];
</script>