<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <page-content
      :pageContentConfig="pageContentConfig"
      pageName="role"
      @selectionChange="handleSelection"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import { pageContentConfig } from './config/content.config';
import { searchFormConfig } from './config/searceForm.config';
export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const handleSelection = (value: any) => {
      console.log(value);
    };
    return {
      handleSelection,
      pageContentConfig,
      searchFormConfig
    };
  }
});
</script>

<style scoped></style>
