export const pageContentConfig = {
  propList: [
    { prop: 'name', label: '用户名', minWidth: '50' },
    { prop: 'realname', label: '真实姓名', minWidth: '50' },
    { prop: 'cellphone', label: '手机号码', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '50', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', minWidth: '100', slotName: 'createTime' },
    { prop: 'updateAt', label: '更新时间', minWidth: '100', slotName: 'updateTime' },
    { label: '操作', minWidth: '100', slotName: 'handle' }
  ],
  title: '用户列表',
  showIndexColumn: true,
  showSelection: true
};
