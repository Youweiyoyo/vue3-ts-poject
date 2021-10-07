<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin">立即登录</el-button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import LoginAccount from './login-account';
import LoginPhone from './login-phone';
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true);
    const accountRef = ref();
    const handleLogin = () => {
      accountRef.value?.LoginAction();
    };
    return {
      isKeepPassword,
      accountRef,
      handleLogin
    };
  }
});
</script>
<style lang="less" scoped>
.login-panel {
  margin-bottom: 160px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
