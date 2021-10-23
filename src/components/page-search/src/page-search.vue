<template>
  <div class="page-search">
    <div class="search">
      <yw-form v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h1 class="header">高级检索</h1>
        </template>
        <template #footer>
          <div class="footer">
            <el-button type="primary" icon="el-icon-refresh" @click="formDataRefresh"
              >重置</el-button
            >
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </template>
      </yw-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import YwForm from '@/components/Yw-form';
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    YwForm
  },
  setup(pros) {
    const formItems = pros.searchFormConfig.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = '';
    }
    const formData = ref(formOriginData);
    const formDataRefresh = () => {
      formData.value = formOriginData;
    };
    return {
      formData,
      formDataRefresh
    };
  }
});
</script>
<style lang="less" scoped>
.user {
  .search {
    .header {
      color: red;
    }
    .footer {
      text-align: right;
      margin: 0 50px 20px 0;
    }
  }
}
</style>
