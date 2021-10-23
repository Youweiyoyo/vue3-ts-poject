<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :pageContentConfig="pageContentConfig"
      :userList="userList"
      @selectionChange="handleSelection"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
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
    const store = useStore();
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    });
    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);
    const handleSelection = (val: any) => {
      console.log(val, 'val');
    };
    return {
      searchFormConfig,
      userList,
      userCount,
      handleSelection,
      pageContentConfig
    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
}
</style>
