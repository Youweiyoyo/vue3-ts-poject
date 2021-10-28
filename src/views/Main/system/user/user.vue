<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @RefreshBtnClick="handelRefreshClick"
      @queryBtnClick="handelQueryClick"
    />
    <page-content
      ref="PageContentRef"
      :pageContentConfig="pageContentConfig"
      pageName="users"
      @selectionChange="handleSelection"
      @newBtnClick="handleData"
      @editBtnClick="handleEdit"
    />
    <page-model :pageModelConfig="modelConfig" ref="pageModelRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePageSearch } from '@/hooks/usePageSearch';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModel from '@/components/page-model';
import { searchFormConfig } from './config/searceForm.config';
import { pageContentConfig } from './config/content.config';
import { modelConfig } from './config/model.config';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const pageModelRef = ref<InstanceType<typeof PageModel>>();
    const handleSelection = (val: any) => {
      console.log(val, 'val');
    };
    const handleData = () => {
      pageModelRef.value.dialogVisible = true;
    };
    const handleEdit = (row: any) => {
      pageModelRef.value.dialogVisible = true;
    };
    const { handelRefreshClick, handelQueryClick, PageContentRef } = usePageSearch();
    return {
      searchFormConfig,
      handleSelection,
      pageContentConfig,
      handelRefreshClick,
      handelQueryClick,
      PageContentRef,
      modelConfig,
      handleData,
      handleEdit,
      pageModelRef
    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
}
</style>
