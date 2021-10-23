<template>
  <div class="page-content">
    <yw-table :listData="userList" v-bind="pageContentConfig" @selectionChange="handleSelection">
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
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import YwTable from '@/components/Yw-table';
export default defineComponent({
  emits: ['selectionChange'],
  props: {
    pageContentConfig: {
      type: Object,
      required: true
    },
    userList: {
      type: Array,
      required: true
    }
  },
  components: {
    YwTable
  },
  setup(props, { emit }) {
    const handleSelection = (data: any) => {
      emit('selectionChange', data);
    };
    return {
      handleSelection
    };
  }
});
</script>
<style lang="less" scoped></style>
