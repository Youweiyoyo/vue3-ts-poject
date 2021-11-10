<template>
  <div class="dashboard">
    <page-echarts :pieData="categoryGoodsCount" />
    <roseEcharts :roseData="categoryGoodsCount" />
    <lineEcharts :lineData="categoryGoodsCount" title="销量" v-bind="categoryGoodsSasle" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { PageEcharts, RoseEcharts, lineEcharts } from '@/components/page-echarts';
export default defineComponent({
  name: 'dashboard',
  components: {
    PageEcharts,
    RoseEcharts,
    lineEcharts
  },
  setup() {
    const store = useStore();
    const categoryGoodsCount = computed(() => {
      return store.state.analysis.dataList1.map((item: any) => {
        return { name: item.name, value: item.goodsCount };
      });
    });
    const categoryGoodsSasle = computed(() => {
      const xLabel: string[] = [];
      const value: any[] = [];
      const categoryGoodsSasle = store.state.analysis.dataList2;
      for (const item of categoryGoodsSasle) {
        console.log(item, 'item');
        xLabel.push(item.name);
        value.push(item.goodsCount);
      }
      return { xLabel, value };
    });
    store.dispatch('analysis/getDashboardDataAction');
    return {
      categoryGoodsCount,
      categoryGoodsSasle
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
