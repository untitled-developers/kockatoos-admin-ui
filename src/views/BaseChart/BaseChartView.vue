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

      <BaseDocSection title="Example">
        <p class="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3 mb-4">
          <strong>Note:</strong> <code>BaseChart</code> renders via <a href="https://echarts.apache.org/" target="_blank" class="underline">echarts</a>.
          <code>echarts</code> is <strong>not</strong> bundled with <code>kockatoos-admin-ui</code> — install it in your project
          (<code>npm i echarts</code>) for the component to render.
        </p>
        <BaseDocCodePreview title="Usage" language="JavaScript" :source="usageCode" />
        <BaseDocCodePreview title="Example options object (bar chart)" language="JavaScript" :source="optionsCode" />
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";

const importCode = `import BaseChart from "kockatoos-admin-ui/components/BaseChart.vue";
// Requires: npm i echarts`;

const usageCode = `<BaseChart :options="chartOptions" width="100%" height="400px" />`;

const optionsCode = `const chartOptions = {
  title: { text: 'Monthly Sales' },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Sales',
      type: 'bar',
      data: [120, 200, 150, 80, 70, 110],
    },
  ],
};`;

const propsTable = [
  { name: 'options', type: 'Object', required: true, default: null, description: 'Any valid ECharts option object. Reactive — the chart re-renders when this prop changes.' },
  { name: 'width', type: 'String', required: false, default: "'100%'", description: 'CSS width of the chart container.' },
  { name: 'height', type: 'String', required: false, default: "'400px'", description: 'CSS height of the chart container.' },
  { name: 'theme', type: 'String', required: false, default: "''", description: 'ECharts theme name. Pass a registered theme string (e.g. "dark").' },
];
</script>