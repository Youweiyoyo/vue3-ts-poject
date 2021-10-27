export const pageContentConfig = {
  propList: [
    { prop: 'name', label: '用户名', minWidth: '50' },
    { prop: 'type', label: '类型', minWidth: '50' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单图标', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    { prop: 'createAt', label: '创建时间', minWidth: '100', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '100', slotName: 'updateAt' },
    { label: '操作', minWidth: '100', slotName: 'handle' }
  ],
  title: '菜单列表',
  showIndexColumn: false,
  showSelection: false,
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
};
