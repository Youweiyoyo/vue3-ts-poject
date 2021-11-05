<template>
  <div class="modelDialog">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center destroy-on-close>
      <yw-form v-bind="pageModelConfig" v-model="formData"></yw-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import YwForm from '@/components/Yw-form';
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
    }
  },
  components: {
    YwForm
  },
  setup(props) {
    const dialogVisible = ref(false);
    const formData = ref({});
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
      formData
    };
  }
});
</script>
<style lang="scss" scoped></style>
