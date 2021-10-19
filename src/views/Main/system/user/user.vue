<template>
  <div class="user">
    <div class="search">
      <yw-form v-bind="searchFormConfig" v-model="formData" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import YwForm from '@/components/Yw-form';
import { searchFormConfig } from './config/searceForm.config';
export default defineComponent({
  name: 'user',
  components: {
    YwForm
  },
  setup() {
    const formData = ref({
      name: '',
      password: '',
      sport: '',
      createTime: ''
    });
    return {
      formData,
      searchFormConfig
    };
  }
});
</script>

<style scoped></style>
