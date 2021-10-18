<template>
  <div class="fold-menu-nav">
    <i
      class="fold-menu"
      :class="isFold ? ' el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <YwBreadcrumb :breadcrumbs="breadcrumbs"></YwBreadcrumb>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import UserInfo from '../components/user-info.vue';
import YwBreadcrumb, { IBreadcrumb } from '../../breadcrumb';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import { pathMapBreadcrumbs } from '@/utils/mapMenus';
export default defineComponent({
  components: {
    UserInfo,
    YwBreadcrumb
  },
  emit: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore();
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };
    // 面包屑数据
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });
    return {
      handleFoldClick,
      isFold,
      breadcrumbs
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
