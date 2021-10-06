// network 统一的出口
import ServiceRequest from './request';
// 从配置文件中导入根地址与请求请求超时时间
import { BASE_URL, TIME_OUT } from './request/config';
const Service = new ServiceRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      console.log(config, 'config');
      // const token = '';
      // if (token) {
      //   // config.headers.Authorization = `Bearer ${token}`;
      // }
      console.log('请求成功的拦截');
      return config;
    },
    requestInterceptorsCatch: (err) => {
      console.log('请求失败的拦截');
      return err;
    },
    responseInterceptors: (res) => {
      console.log('响应成功的拦截');
      return res;
    },
    responseInterceptorsCatch: (err) => {
      console.log('响应失败的拦截');
      return err;
    }
  }
});

export default Service;
