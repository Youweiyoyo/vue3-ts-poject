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
    <page-model
      :defaultRowInfo="defaultRowInfo"
      :pageModelConfig="modelConfig"
      ref="pageModelRef"
    />
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
import { usePageModel } from '@/hooks/use-pageModel';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const { pageModelRef, defaultRowInfo, handleData, handleEdit } = usePageModel();
    const handleSelection = (val: any) => {
      console.log(val, 'val');
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
      pageModelRef,
      defaultRowInfo
    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
}
</style>
