import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { setupStore } from '@/store';
import 'normalize.css';
import './assets/css/index.less';
// 全局注册Element—plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// Element 国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// 引入 day.js
import dayjs from 'dayjs';
// import './network/axios.demo';
// createApp(App).use(router).use(store).mount('#app');
// 上下代码等效  mount 的挂载一定要在 use 之后
const app = createApp(App); // 创建
app.use(store); // 注册 vuex
app.use(ElementPlus, {
  locale: zhCn
}); // 全局注册 Element -plus
setupStore();
app.use(router); // 注册路由
app.config.globalProperties.$dayjs = dayjs;
app.mount('#app'); // 挂载 app
