<template>
  <div class="menu">
    <page-content :pageContentConfig="pageContentConfig" pageName="menu" ButtonName="新建菜单">
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContent from '@/components/page-content';
import { pageContentConfig } from './config/content.config';
export default defineComponent({
  name: 'menu',
  components: {
    PageContent
  },
  setup() {
    return {
      pageContentConfig
    };
  }
});
</script>

<style scoped></style>
