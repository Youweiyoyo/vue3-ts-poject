import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
// createApp(App).use(router).use(store).mount('#app');
// 上下代码等效  mount 的挂载一定要在 use 之后
const app = createApp(App); // 创建
app.use(router); // 注册路由
app.use(store); // 注册 vuex
app.mount('#app'); // 挂载 app
