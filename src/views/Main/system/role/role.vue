<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <page-content
      :pageContentConfig="pageContentConfig"
      pageName="role"
      @selectionChange="handleSelection"
      @newBtnClick="handleData"
      @editBtnClick="handleEdit"
    />
    <pageModel
      ref="pageModelRef"
      :defaultRowInfo="defaultRowInfo"
      :pageModelConfig="modelConfig"
      pageName="role"
    ></pageModel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModel from '@/components/page-model';
import { pageContentConfig } from './config/content.config';
import { searchFormConfig } from './config/searceForm.config';
import { modelConfig } from './config/model.config';
import { usePageModel } from '@/hooks/use-pageModel';
export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const handleSelection = (value: any) => {
      console.log(value);
    };
    const { pageModelRef, defaultRowInfo, handleData, handleEdit } = usePageModel();
    return {
      handleSelection,
      pageContentConfig,
      searchFormConfig,
      modelConfig,
      pageModelRef,
      defaultRowInfo,
      handleData,
      handleEdit
    };
  }
});
</script>

<style scoped></style>
