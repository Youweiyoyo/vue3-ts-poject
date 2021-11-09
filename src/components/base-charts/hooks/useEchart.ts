import * as eCharts from 'echarts';

export default function (el: HTMLElement) {
  // 创建 eCharts 组件实例
  const eChartsDivRef = eCharts.init(el);
  // setOptions 书写为函数,方便使用时调用
  const setOptions = (options: eCharts.EChartsOption) => {
    eChartsDivRef.setOption(options);
  };
  // 手动调用 eCharts 变化方法
  const changeECharts = () => {
    eChartsDivRef.resize();
  };
  // 监听浏览器页面变化
  window.addEventListener('resize', () => {
    eChartsDivRef.resize();
  });
  return {
    eChartsDivRef,
    setOptions,
    changeECharts
  };
}
