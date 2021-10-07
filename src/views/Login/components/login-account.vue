<template>
  <div class="login-account">
    <el-form :model="accountForm" ref="accountFormRef" :rules="accountFormRules" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import type { ElForm } from 'element-plus';
import { accountFormRules } from '../config/account-rules-config';
export default defineComponent({
  setup() {
    const accountForm = reactive({
      name: '',
      password: ''
    });
    const accountFormRef = ref<InstanceType<typeof ElForm>>();
    const LoginAction = () => {
      accountFormRef.value?.validate((isOk) => {
        if (isOk) {
          console.log('执行登录逻辑');
        }
      });
    };
    return {
      accountFormRules,
      accountForm,
      accountFormRef,
      LoginAction
    };
  }
});
</script>
<style lang="less" scoped></style>
