<template>
  <div class="goods">
    <!--    <page-search />-->
    <page-count :pageContentConfig="pageContentConfig" pageName="goods" />
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
