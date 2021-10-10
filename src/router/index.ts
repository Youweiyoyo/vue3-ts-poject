import { createRouter, createWebHashHistory } from 'vue-router';
// 导入路由数组的类型
import type { RouteRecordRaw } from 'vue-router';
import LocalCache from '@/utils/cache';
// 定义路由数组
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
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
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token');
    if (!token) {
      return '/login';
    }
  }
});
export default router;
