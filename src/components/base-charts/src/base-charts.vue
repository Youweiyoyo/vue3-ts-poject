<template>
  <div class="eCharts">
    <div ref="eChartsDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from 'vue';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import useEchart from '@/components/base-charts/hooks/useEchart';
// 使用 defineProps 定义 Props 使用泛型约定类型
// 使用 withDefaults 给属性设置默认值
const props = withDefaults(
  defineProps<{
    option: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: '100%',
    height: '300px'
  }
);
const eChartsDivRef = ref<HTMLElement>();
onMounted(() => {
  const { setOptions } = useEchart(eChartsDivRef.value);
  setOptions(props.option);
});
</script>
<style lang="less"></style>
