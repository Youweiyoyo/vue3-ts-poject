import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import 'normalize.css';
import './assets/css/index.less';
// 全局注册Element—plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import './network/axios.demo';
import Service from './network';
interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}
Service.request<DataType>({ url: '/home/multidata', method: 'GET', showLoading: false }).then(
  (res) => {
    console.log(res.data);
    console.log(res.returnCode);
    console.log(res.success);
  }
);
// createApp(App).use(router).use(store).mount('#app');
// 上下代码等效  mount 的挂载一定要在 use 之后
const app = createApp(App); // 创建
app.use(router); // 注册路由
app.use(store); // 注册 vuex
app.use(ElementPlus); // 全局注册 Element -plus
app.mount('#app'); // 挂载 app
