<template>
  <div class="user">
    <div class="search">
      <yw-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import YwForm from '@/components/Yw-form';
import { searchFormConfig } from './config/searceForm.config';
export default defineComponent({
  name: 'user',
  components: {
    YwForm
  },
  setup() {
    return {
      searchFormConfig
    };
  }
});
</script>

<style scoped></style>
