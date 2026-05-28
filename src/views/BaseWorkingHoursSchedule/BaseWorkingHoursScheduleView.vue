<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview title="Import" language="JavaScript" :source="importCode" />
      </BaseDocSection>

      <BaseDocSection title="Model">
        <p class="text-sm text-gray-600">
          Binds via <code>v-model</code> to an array of day objects:
          <code>Array&lt;&#123; day_name: string, opening: string, closing: string, is_open: boolean &#125;&gt;</code>.
          Pass an empty array and the component auto-initialises all 7 days on mount.
        </p>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <BaseWorkingHoursSchedule v-model="hours" />
          <details class="mt-4">
            <summary class="text-sm text-gray-500 cursor-pointer">Show v-model JSON</summary>
            <pre class="text-xs text-gray-500 bg-gray-50 p-2 rounded mt-1 overflow-auto">{{ JSON.stringify(hours, null, 2) }}</pre>
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
import BaseWorkingHoursSchedule from "../../components/BaseWorkingHoursSchedule.vue";

const hours = ref([]);

const importCode = `import BaseWorkingHoursSchedule from "kockatoos-admin-ui/components/BaseWorkingHoursSchedule.vue";

// v-model shape:
// Array<{ day_name: string, opening: string, closing: string, is_open: boolean }>
// Pass an empty array and the component auto-fills all 7 days on mount.`;
</script>