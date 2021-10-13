<template>
  <div class="fold-menu-nav">
    <i
      class="fold-menu"
      :class="isFold ? ' el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import UserInfo from '../components/user-info.vue';
export default defineComponent({
  components: {
    UserInfo
  },
  emit: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };
    return {
      handleFoldClick,
      isFold
    };
  }
});
</script>
<style lang="less" scoped>
.fold-menu-nav {
  width: 100%;
  display: flex;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
