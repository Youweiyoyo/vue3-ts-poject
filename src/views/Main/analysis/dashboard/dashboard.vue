<template>
  <div class="dashboard">
    <!--    <div class="eCharts" ref="H2Ref"></div>-->
    <base-charts :option="option" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import * as echarts from 'echarts';
import BaseCharts from '@/components/base-charts';
export default defineComponent({
  name: 'dashboard',
  components: {
    BaseCharts
  },
  setup() {
    const state = useStore();
    state.dispatch('analysis/getDashboardDataAction');
    const H2Ref = ref<HTMLElement>();
    const option = {
      title: {
        text: 'Basic Radar Chart'
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    };
    onMounted(() => {
      if (H2Ref.value) {
        const eChartsInstance = echarts.init(H2Ref.value, 'light', {
          renderer: 'svg'
        });
        eChartsInstance.setOption(option);
      }
    });
    return {
      H2Ref,
      option
    };
  }
});
</script>

<style scoped lang="less">
.dashboard {
  .eCharts {
    width: 500px;
    height: 500px;
  }
}
</style>
