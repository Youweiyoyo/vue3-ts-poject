<template>
  <div class="line-echarts">
    <base-echarts :option="option" />
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, withDefaults } from 'vue';
import { IData } from '@/components/page-echarts/types';
import baseEcharts from '@/components/base-charts';
const props = withDefaults(
  defineProps<{
    lineData: IData;
    title?: string;
    xLabel: string[];
    value: any[];
  }>(),
  {
    title: '折线图'
  }
);
const option = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabel
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.value
      }
    ]
  };
});
</script>
<style lang="less" scope></style>
