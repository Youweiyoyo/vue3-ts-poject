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
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePageSearch } from '@/hooks/usePageSearch';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import { searchFormConfig } from './config/searceForm.config';
import { pageContentConfig } from './config/content.config';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
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
      PageContentRef
    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
}
</style>
