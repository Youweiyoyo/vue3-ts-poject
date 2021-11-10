<template>
  <div class="page-eCharts">
    <base-charts :option="options" />
  </div>
</template>
<script lang="ts" setup>
import baseCharts from '@/components/base-charts';

// defineProps 定义 props 属性
// defineExpose 定义该组件需要暴露出去的属性
import { defineProps, computed } from 'vue';
import { IData } from '../types';
const props = defineProps<{
  pieData: IData;
}>();

const options = computed(() => {
  return {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
});
</script>
<style lang="less" scoped></style>
