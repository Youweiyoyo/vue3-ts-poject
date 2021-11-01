import { ref } from 'vue';
import PageModel from '@/components/page-model';

export function usePageModel() {
  const pageModelRef = ref<InstanceType<typeof PageModel>>();
  // 每一行的数据
  const defaultRowInfo = ref({});
  // 新建
  const handleData = () => {
    pageModelRef.value.dialogVisible = true;
  };
  // 编辑
  const handleEdit = (row: any) => {
    defaultRowInfo.value = { ...row };
    pageModelRef.value.dialogVisible = true;
  };
  return {
    pageModelRef,
    defaultRowInfo,
    handleData,
    handleEdit
  };
}
