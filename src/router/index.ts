import { createRouter, createWebHashHistory } from 'vue-router';
// 导入路由数组的类型
import type { RouteRecordRaw } from 'vue-router';
// 定义路由数组
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/Main/main.vue')
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory()
});
export default router;
