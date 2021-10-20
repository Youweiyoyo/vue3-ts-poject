<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <yw-table :listData="userList" :propList="propList"></yw-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import PageSearch from '@/components/page-search';
import YwTable from '@/components/Yw-table';
import { searchFormConfig } from './config/searceForm.config';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    YwTable
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
    const propList = [
      { type: 'index', label: '序号', minWidth: '50', width: '50' },
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100' },
      { prop: 'createAt', label: '创建时间', minWidth: '100' },
      { prop: 'name', label: '更新时间', minWidth: '100' }
    ];
    return {
      searchFormConfig,
      userList,
      userCount,
      propList
    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
}
</style>
