<template>
  <div class="pose-echarts">
    <base-charts :option="option" />
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { IData } from '../types';
import baseCharts from '@/components/base-charts';
const props = defineProps<{
  roseData: IData;
}>();
const option = computed(() => {
  return {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  };
});
</script>
<style lang="less" scoped></style>
