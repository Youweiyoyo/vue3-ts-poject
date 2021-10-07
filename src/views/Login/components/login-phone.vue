<template>
  <div class="login-phone">
    <el-form :model="phoneForm" ref="phoneFormRef" :rules="phoneFormRules" label-width="80px">
      <el-form-item label="手机号" prop="Tel">
        <el-input v-model="phoneForm.Tel" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phoneForm.verificationCode" />
          <el-button type="primary" class="codeBtn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { phoneFormRules } from '../config/phone-rules-config';
export default defineComponent({
  setup() {
    const phoneForm = reactive({
      Tel: '',
      verificationCode: ''
    });
    return {
      phoneForm,
      phoneFormRules
    };
  }
});
</script>
<style lang="less" scoped>
.get-code {
  display: flex;
  .codeBtn {
    margin-left: 8px;
  }
}
</style>
