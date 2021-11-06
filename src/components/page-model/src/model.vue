<template>
  <div class="modelDialog">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center destroy-on-close>
      <yw-form v-bind="pageModelConfig" v-model="formData"></yw-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import YwForm from '@/components/Yw-form';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'model',
  props: {
    pageModelConfig: {
      type: Object,
      required: true
    },
    defaultRowInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    YwForm
  },
  setup(props) {
    const store = useStore();
    const dialogVisible = ref(false);
    const formData = ref({});
    // 确定按钮
    const submitForm = () => {
      dialogVisible.value = false;
      if (Object.keys(props.defaultRowInfo).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultRowInfo.id
        });
      } else {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        });
      }
    };
    watch(
      () => props.defaultRowInfo,
      (newValue) => {
        for (const item of props.pageModelConfig.formItem) {
          formData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );
    return {
      dialogVisible,
      formData,
      submitForm
    };
  }
});
</script>
<style lang="scss" scoped></style>
