<template>
  <div class="dashboard">
    <page-echarts :pieData="categoryGoodsCount" />
    <roseEcharts :roseData="categoryGoodsCount" />
    <lineEcharts :lineData="categoryGoodsCount" title="堆叠折线图" />
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
    store.dispatch('analysis/getDashboardDataAction');
    return {
      categoryGoodsCount
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
