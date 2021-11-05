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
      :pageModelConfig="modelConfigRef"
      ref="pageModelRef"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePageSearch } from '@/hooks/usePageSearch';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModel from '@/components/page-model';
import { searchFormConfig } from './config/searceForm.config';
import { pageContentConfig } from './config/content.config';
import { modelConfig } from './config/model.config';
import { usePageModel } from '@/hooks/use-pageModel';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const store = useStore();
    const modelConfigRef = computed(() => {
      // 动态添加部门和角色列表
      const departmentItem = modelConfig.formItem.find((item) => item.field === 'departmentId');
      if (departmentItem) {
        departmentItem.option = store.state.entireDepartment.map((item: any) => {
          return { title: item.name, value: item.id };
        });
      }
      const roleItem = modelConfig.formItem.find((item) => item.field === 'roleId');
      if (roleItem) {
        roleItem.option = store.state.entireRoles.map((item: any) => {
          return { title: item.name, value: item.id };
        });
      }
      return modelConfig;
    });
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
    // 调用hook获取公共变量和函数
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
      modelConfigRef,
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
