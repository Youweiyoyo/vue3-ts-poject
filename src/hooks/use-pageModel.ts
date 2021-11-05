import { ref } from 'vue';
import PageModel from '@/components/page-model';
type CallbackFn = () => void;

export function usePageModel(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModelRef = ref<InstanceType<typeof PageModel>>();
  // 每一行的数据
  const defaultRowInfo = ref({});
  // 新建
  const handleData = () => {
    defaultRowInfo.value = {};
    pageModelRef.value.dialogVisible = true;
    newCb && newCb();
  };
  // 编辑
  const handleEdit = (row: any) => {
    defaultRowInfo.value = { ...row };
    pageModelRef.value.dialogVisible = true;
    editCb && editCb();
  };
  return {
    pageModelRef,
    defaultRowInfo,
    handleData,
    handleEdit
  };
}
