<template>
  <div class="yw-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="headerHandler">
          <slot name="handleHeader"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="listData" border @selection-change="handleSelectionChange">
      <el-table-column v-if="showSelection" width="50" align="center" type="selection" />
      <el-table-column v-if="showIndexColumn" type="index" align="center" label="序号" width="50" />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="foot">
      <slot name="foot">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageInfo.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="pageInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    // 列表
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    // 配置选项
    propList: {
      type: Array,
      required: true
    },
    // 是否显示索引列
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    // 是否显示复选框列
    showSelection: {
      type: Boolean,
      default: false
    },
    // 列表 title
    title: {
      type: String,
      default: '用户列表'
    },
    // 分页
    pageInfo: {
      type: Object,
      default: () => ({ pageSize: 10, currentPage: 0 })
    }
  },
  emits: ['selectionChange', 'update:pageInfo'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value);
    };
    const handleSizeChange = (pageSize: number) => {
      emit('update:pageInfo', { ...props.pageInfo, pageSize });
    };
    const handleCurrentChange = (currentPage: number) => {
      emit('update:pageInfo', { ...props.pageInfo, currentPage });
    };
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    };
  }
});
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.foot {
  margin-top: 10px;
  text-align: right;
}
</style>
