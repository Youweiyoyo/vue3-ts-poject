<template>
  <div>
    <p>main</p>
    <p>{{ $store.state.name }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  }
});
</script>
<style scoped></style>
