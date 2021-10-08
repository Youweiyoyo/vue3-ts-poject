<template>
  <div class="login-account">
    <el-form :model="accountForm" ref="accountFormRef" :rules="accountFormRules" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import type { ElForm } from 'element-plus';
import { accountFormRules } from '../config/account-rules-config';
import LocalCache from '@/utils/cache';
export default defineComponent({
  setup() {
    const accountForm = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    });
    const accountFormRef = ref<InstanceType<typeof ElForm>>();
    const LoginAction = (isKeepPassword: boolean) => {
      accountFormRef.value?.validate((isOk) => {
        if (isOk) {
          // 是否记住密码
          if (isKeepPassword) {
            LocalCache.setCache('name', accountForm.name);
            LocalCache.setCache('password', accountForm.password);
          } else {
            LocalCache.removeCache('name');
            LocalCache.removeCache('password');
          }
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
