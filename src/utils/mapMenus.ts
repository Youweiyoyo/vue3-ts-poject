import type { RouteRecordRaw } from 'vue-router';
import { IBreadcrumb } from '@/components/breadcrumb';
let firstMenu: any = null;
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
        if (!firstMenu) {
          firstMenu = menu;
        }
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenus);
  return routes;
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: menu.url });
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}
export function mapMenusToPermissions(userMenus: any[]) {
  const Permissions: string[] = [];
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? []);
      } else if (menu.type === 3) {
        Permissions.push(menu.permission);
      }
    }
  };
  _recurseGetPermission(userMenus);
  return Permissions;
}
export function mapMenuLeafKeys(menuList: any[]) {
  const leftKeys: number[] = [];
  const _recurseGetLeft = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeft(menu.children);
      } else {
        leftKeys.push(menu.id);
      }
    }
  };
  _recurseGetLeft(menuList);
  return leftKeys;
}
export { firstMenu };
