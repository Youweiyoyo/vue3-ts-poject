<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar shape="circle" size="small" :src="url"></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logOut">登出</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import LocalCache from '@/utils/cache';
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const name = computed(() => store.state.login.userInfo.name);
    const logOut = () => {
      LocalCache.clearCache('token');
      router.push('/main');
    };
    return {
      name,
      logOut
    };
  }
});
</script>
<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  .el-avatar {
    margin-right: 10px;
  }
}
</style>
