export const pageContentConfig = {
  propList: [
    { prop: 'name', label: '用户名', minWidth: '50' },
    { prop: 'realname', label: '真实姓名', minWidth: '50' },
    { prop: 'intro', label: '角色', minWidth: '100' },
    { prop: 'createAt', label: '创建时间', minWidth: '100', slotName: 'createTime' },
    { label: '操作', minWidth: '100', slotName: 'handle' }
  ],
  title: '角色列表',
  showIndexColumn: true,
  showSelection: true
};
