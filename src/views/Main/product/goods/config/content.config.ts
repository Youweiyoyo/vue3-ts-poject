export const pageContentConfig = {
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '50' },
    { prop: 'oldPrice', label: '原价格', minWidth: '50', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '50', slotName: 'newPrice' },
    { prop: 'status', label: '状态', minWidth: '50', slotName: 'status' },
    { prop: 'imageUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'createAt', label: '创建时间', minWidth: '50', slotName: 'createTime' },
    { prop: 'updateAt', label: '更新时间', minWidth: '50', slotName: 'updateTime' },
    { label: '操作', minWidth: '100', slotName: 'handle' }
  ],
  title: '商品列表',
  showIndexColumn: true,
  showSelection: true,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
};
