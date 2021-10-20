<template>
  <div class="yw-table">
    <el-table :data="listData" border>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center"></el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
<style lang="less" scoped></style>
