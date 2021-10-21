<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <yw-table
        title="用户列表"
        :listData="userList"
        :propList="propList"
        showIndexColumn
        showSelection
        @selectionChange="handleSelection"
      >
        <template #handleHeader>
          <el-button type="primary">新建用户</el-button>
          <el-button icon="el-icon-refresh"></el-button>
        </template>
        <template #enable="scope">
          <el-tag size="medium" :type="scope.row.enable ? 'success' : 'danger'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-tag>
        </template>
        <template #createTime="scope">
          {{ $dayjs(scope.row.createAt).format('YYYY-MM-DD HH:mm:ss') }}
        </template>
        <template #updateTime="scope">
          {{ $dayjs(scope.row.updateTime).format('YYYY-MM-DD HH:mm:ss') }}
        </template>
        <template #handle>
          <el-button plain size="small" type="primary" icon="el-icon-edit">编辑</el-button>
          <el-button plain size="small" type="danger" icon="el-icon-delete">删除</el-button>
        </template>
      </yw-table>
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
      { prop: 'name', label: '用户名', minWidth: '50' },
      { prop: 'realname', label: '真实姓名', minWidth: '50' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '50', slotName: 'enable' },
      { prop: 'createAt', label: '创建时间', minWidth: '100', slotName: 'createTime' },
      { prop: 'updateAt', label: '更新时间', minWidth: '100', slotName: 'updateTime' },
      { label: '操作', minWidth: '100', slotName: 'handle' }
    ];
    const handleSelection = (val: any) => {
      console.log(val);
    };
    return {
      searchFormConfig,
      userList,
      userCount,
      propList,
      handleSelection
    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
}
</style>
