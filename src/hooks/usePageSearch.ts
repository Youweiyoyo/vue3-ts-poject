import { ref } from 'vue';
import PageContent from '@/components/page-content';

export function usePageSearch() {
  // 获取组件实例
  const PageContentRef = ref<InstanceType<typeof PageContent>>();
  // 重置
  const handelRefreshClick = () => {
    PageContentRef.value?.getPageData();
  };
  // 搜索
  const handelQueryClick = (queryInfo: any) => {
    PageContentRef.value?.getPageData(queryInfo);
  };
  return {
    PageContentRef,
    handelRefreshClick,
    handelQueryClick
  };
}
