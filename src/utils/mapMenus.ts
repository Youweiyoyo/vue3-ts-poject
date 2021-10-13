import type { RouteRecordRaw } from 'vue-router';
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 1. 先获取所有的路由
  const allRoutes: RouteRecordRaw[] = [];
  // 加载导出了 router 的文件夹 调用 webpack的方法去递归查找 .ts 结尾的文件
  const routeFiles = require.context('../router/Main', true, /\.ts/);
  routeFiles.keys().forEach((path) => {
    const route = require('../router/Main' + path.split('.')[1]);
    allRoutes.push(route.default);
  });
  // 2. 根据菜单获取需要添加的 routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url);
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenus);
  return routes;
}
