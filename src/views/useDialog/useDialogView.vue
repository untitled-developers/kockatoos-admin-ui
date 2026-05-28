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
          <div class="flex gap-2">
            <Button label="Open Dialog" @click="openDemoDialog" />
          </div>
          <ul v-if="log.length" class="mt-3 text-sm text-gray-500 space-y-1">
            <li v-for="(entry, i) in log" :key="i">{{ entry }}</li>
          </ul>
        </BaseDocFunctionalityPreview>
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
      return () => h('div', { class: 'p-6 flex flex-col gap-4' }, [
        h('p', { class: 'text-gray-600' }, 'Hello from useDialog! This component was opened dynamically.'),
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
        addLog(`close received → closeDialog('${id}')`);
        closeDialog(id);
      },
    },
  });
  addLog(`openDialog() → id: ${id}`);
}

const importCode = `import useDialog from "kockatoos-admin-ui/composables/useDialog.js";`;

const signatureCode = `const { openDialog, closeDialog, updateDialogProps, refreshDialog } = useDialog();

// Open any Vue component as a dialog:
const dialogId = openDialog(MyComponent, {
  props: { header: 'My Dialog', someData: record },
  handlers: {
    close: () => closeDialog(dialogId),
    submit: (data) => { /* handle data */ closeDialog(dialogId); },
  },
});

closeDialog(dialogId);            // unmount the dialog
updateDialogProps(dialogId, fn);  // fn receives current props, returns new ones
refreshDialog(dialogId);          // re-mount (resets internal state)`;
</script>
