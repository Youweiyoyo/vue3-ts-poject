<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
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
    const currentTab = ref('account');
    const isKeepPassword = ref(true);
    const accountRef = ref();
    const phoneRef = ref();
    const handleLogin = () => {
      // 账号密码登录的处理逻辑
      if (currentTab.value === 'account') {
        accountRef.value?.LoginAction(isKeepPassword.value);
      } else {
        // 手机号登录的处理逻辑
        phoneRef.value?.LoginPhone();
      }
    };
    return {
      currentTab,
      isKeepPassword,
      accountRef,
      phoneRef,
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
