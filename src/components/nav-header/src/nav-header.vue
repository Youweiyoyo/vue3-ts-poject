<template>
  <div class="fold-menu">
    <i
      class="fold-menu"
      :class="isFold ? ' el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
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
.fold-menu {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
