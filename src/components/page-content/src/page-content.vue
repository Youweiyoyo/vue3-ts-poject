<template>
  <div class="page-content">
    <yw-table
      :listData="PageDataList"
      :listCount="PageDataCount"
      v-bind="pageContentConfig"
      v-model:pageInfo="page"
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
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import YwTable from '@/components/Yw-table';
export default defineComponent({
  emits: ['selectionChange'],
  props: {
    pageContentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    YwTable
  },
  setup(props, { emit }) {
    const store = useStore();
    const page = ref({ pageSize: 10, currentPage: 0 });
    watch(page, () => getPageData());
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: page.value.pageSize * page.value.currentPage,
          size: page.value.pageSize,
          ...queryInfo
        }
      });
    };
    getPageData();
    // const userList = computed(() => store.state.system.userList);
    // const userCount = computed(() => store.state.system.userCount);
    // 调用某个模块下的 getter属性 并传值
    const PageDataList = computed(() => store.getters['system/pageListData'](props.pageName));
    const PageDataCount = computed(() => store.getters['system/pageListCount'](props.pageName));
    const handleSelection = (data: any) => {
      emit('selectionChange', data);
    };
    return {
      // userList,
      // userCount,
      PageDataList,
      PageDataCount,
      handleSelection,
      getPageData,
      page
    };
  }
});
</script>
<style lang="less" scoped></style>
