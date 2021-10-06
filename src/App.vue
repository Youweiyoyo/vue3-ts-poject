<template>
  <router-link to="/login">首页</router-link>
  <router-link to="/main">主页</router-link>
  <el-button>ElementPlus按钮</el-button>
  <el-button type="primary">Element按钮</el-button>
  <el-button type="info">ElementInfo按钮</el-button>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {}
});
</script>

<style lang="less"></style>
