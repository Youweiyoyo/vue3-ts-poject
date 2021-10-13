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
    name: 'login',
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
    // children 根据 userMenus 来决定
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
