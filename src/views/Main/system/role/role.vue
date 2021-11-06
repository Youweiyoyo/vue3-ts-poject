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
      :otherInfo="otherInfo"
      :defaultRowInfo="defaultRowInfo"
      :pageModelConfig="modelConfig"
      pageName="role"
    >
      <div class="menus_tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          :props="{ children: 'children', label: 'name' }"
          node-key="id"
          show-checkbox
          @check="handelCheckChange"
        >
        </el-tree>
      </div>
    </pageModel>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModel from '@/components/page-model';
import { pageContentConfig } from './config/content.config';
import { searchFormConfig } from './config/searceForm.config';
import { modelConfig } from './config/model.config';
import { usePageModel } from '@/hooks/use-pageModel';
import { useStore } from 'vuex';
import { mapMenuLeafKeys } from '@/utils/mapMenus';
import { ElTree } from 'element-plus/lib';
export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const store = useStore();
    const otherInfo = ref({});
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const menus = computed(() => store.state.entireMenu);
    const handleSelection = (value: any) => {
      console.log(value);
    };
    const editCallBack = (item: any) => {
      const leafKeys = mapMenuLeafKeys(item.menuList);
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const { pageModelRef, defaultRowInfo, handleData, handleEdit } = usePageModel(
      undefined,
      editCallBack
    );
    const handelCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menusList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menusList };
    };
    return {
      handleSelection,
      pageContentConfig,
      searchFormConfig,
      modelConfig,
      pageModelRef,
      defaultRowInfo,
      handleData,
      handleEdit,
      menus,
      otherInfo,
      handelCheckChange,
      elTreeRef
    };
  }
});
</script>

<style scoped lang="less">
.menus_tree {
  margin-left: 30px;
}
</style>
