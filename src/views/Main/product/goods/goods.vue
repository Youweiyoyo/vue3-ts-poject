<template>
  <div class="goods">
    <!--    <page-search />-->
    <page-count :pageContentConfig="pageContentConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        />
      </template>
      <template #oldPrice="scope">
        <span>{{ '¥' + scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>{{ '¥' + scope.row.newPrice }}</span>
      </template>
      <template #status="scope">
        <el-tag size="medium" :type="scope.row.status ? 'success' : 'danger'">{{
          scope.row.status ? '启用' : '禁用'
        }}</el-tag>
      </template>
    </page-count>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import PageSearch from '@/components/page-search';
import PageCount from '@/components/page-content';
import { pageContentConfig } from './config/content.config';
export default defineComponent({
  name: 'goods',
  components: {
    // PageSearch,
    PageCount
  },
  setup() {
    return {
      pageContentConfig
    };
  }
});
</script>

<style scoped></style>
