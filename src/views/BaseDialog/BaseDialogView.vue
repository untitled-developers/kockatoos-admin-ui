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
              <td class="py-2 pr-4"><code>close</code></td>
              <td class="py-2 pr-4"><code>—</code></td>
              <td class="py-2">Fired when the X button in the header is clicked.</td>
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
          <Button label="Open Dialog" @click="openDemoDialog" />
          <ul class="mt-3 text-sm text-gray-500 space-y-1">
            <li v-for="(entry, i) in log" :key="i">{{ entry }}</li>
          </ul>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>

      <BaseDocSection title="Sub-components">
        <BaseDocSection title="BaseDialogTabLabel">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImportCode" />
          <p class="text-sm text-gray-600 my-2">
            A tab label that shows a red badge with an error count when validation errors exist in the fields it monitors. Use inside BaseEditDialog tab headers to surface per-tab error counts.
          </p>
          <table class="w-full text-sm border-collapse mt-2">
            <thead class="text-left text-stone-500">
              <tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Type</th><th class="py-2 pr-4">Required</th><th class="py-2 pr-4">Default</th><th class="py-2">Description</th></tr>
            </thead>
            <tbody>
              <tr v-for="p in subPropsTable" :key="p.name" class="border-t border-gray-100">
                <td class="py-2 pr-4"><code>{{ p.name }}</code></td>
                <td class="py-2 pr-4"><code>{{ p.type }}</code></td>
                <td class="py-2 pr-4">{{ p.required ? 'Yes' : 'No' }}</td>
                <td class="py-2 pr-4"><code>{{ p.default ?? '—' }}</code></td>
                <td class="py-2">{{ p.description }}</td>
              </tr>
            </tbody>
          </table>
        </BaseDocSection>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref, defineComponent, h } from "vue";
import Button from "primevue/button";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import useDialog from "../../composables/useDialog.js";

const { openDialog, closeDialog } = useDialog();
const log = ref([]);

function addLog(msg) {
  log.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`);
  if (log.value.length > 8) log.value.pop();
}

function openDemoDialog() {
  const DemoContent = defineComponent({
    emits: ['close'],
    setup(props, { emit }) {
      return () => h('div', { class: 'p-4 flex flex-col gap-4' }, [
        h('p', { class: 'text-gray-600' }, 'This dialog was opened via useDialog composable. Click Close to dismiss it.'),
        h('div', { class: 'flex justify-end' }, [
          h(Button, { label: 'Close', severity: 'secondary', onClick: () => emit('close') }),
        ]),
      ]);
    },
  });

  const id = openDialog(DemoContent, {
    props: { header: 'Demo Dialog' },
    handlers: {
      close: () => {
        addLog('close event received → closeDialog called');
        closeDialog(id);
      },
    },
  });
  addLog(`Dialog opened (id: ${id})`);
}

const importCode = `import BaseDialog from "kockatoos-admin-ui/components/BaseDialog.vue";
// Typically opened via useDialog composable:
import useDialog from "kockatoos-admin-ui/composables/useDialog.js";
const { openDialog, closeDialog } = useDialog();`;

const subImportCode = `import BaseDialogTabLabel from "kockatoos-admin-ui/components/BaseDialogTabLabel.vue";`;

const propsTable = [
  { name: 'header', type: 'String', required: false, default: null, description: 'Dialog title shown in the header strip.' },
  { name: 'position', type: 'String', required: false, default: "'center'", description: "PrimeVue Dialog position: 'center', 'top', 'bottom', 'left', 'right', 'topleft', 'topright', 'bottomleft', 'bottomright'." },
  { name: 'fullScreen', type: 'Boolean', required: false, default: 'false', description: 'Adds p-dialog-maximized class to make the dialog fill the viewport.' },
  { name: 'fullHeight', type: 'Boolean', required: false, default: 'false', description: 'Sets height: 100% on the dialog style.' },
  { name: 'width', type: 'String', required: false, default: "'500px'", description: 'Max-width of the dialog. The dialog is always 100% wide up to this value.' },
];

const slotsTable = [
  { name: 'content', purpose: 'The scrollable body of the dialog.' },
  { name: 'footer-start', purpose: 'Left section of the footer toolbar.' },
  { name: 'footer-center', purpose: 'Center section of the footer toolbar.' },
  { name: 'footer-end', purpose: 'Right section of the footer toolbar (e.g. Close / Submit buttons).' },
];

const subPropsTable = [
  { name: 'label', type: 'String', required: true, default: null, description: 'The visible tab label text.' },
  { name: 'fields', type: 'Array', required: true, default: null, description: 'Field paths to check for errors (passed to getErrors).' },
  { name: 'getErrors', type: 'Function', required: true, default: null, description: 'The getErrors function from useForm or BaseEditDialog slot props.' },
  { name: 'showErrors', type: 'Boolean', required: true, default: null, description: 'When true, the error badge is rendered.' },
];
</script>