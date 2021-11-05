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
    const { handelRefreshClick, handelQueryClick, PageContentRef } = usePageSearch();
    // pageModel 相关逻辑
    const newCallback = () => {
      const passwordItem = modelConfig.formItem.find((item) => item.field === 'password');
      if (passwordItem) {
        passwordItem.isHidden = false;
      }
    };
    const editCallback = () => {
      const passwordItem = modelConfig.formItem.find((item) => item.field === 'password');
      if (passwordItem) {
        passwordItem.isHidden = true;
      }
    };
    const { pageModelRef, defaultRowInfo, handleData, handleEdit } = usePageModel(
      newCallback,
      editCallback
    );
    const handleSelection = (val: any) => {
      console.log(val, 'val');
    };
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
