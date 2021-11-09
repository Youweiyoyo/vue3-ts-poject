<template>
  <div class="eCharts">
    <div ref="eChartsDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from 'vue';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
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
  if (eChartsDivRef.value) {
    const eChartInstance = echarts.init(eChartsDivRef.value);
    eChartInstance.setOption(props.option);
  }
});
</script>
<style lang="less"></style>
