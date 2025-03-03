<template>
  <div ref="chartRef" :style="{ width, height }" class="echart-container"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  options: {
    type: Object,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '400px'
  },
  theme: {
    type: String,
    default: ''
  }
});

const chartRef = ref(null);
let chart = null;

const initChart = () => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value, props.theme);
    chart.setOption(props.options);
  }
};

const handleResize = () => {
  if (chart) {
    chart.resize();
  }
};

watch(
    () => props.options,
    (newOptions) => {
      if (chart) {
        chart.setOption(newOptions);
      }
    },
    { deep: true }
);


onMounted(() => {
  initChart();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (chart) {
    chart.dispose();
    chart = null;
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.echart-container {
  min-height: 100px;
}
</style>