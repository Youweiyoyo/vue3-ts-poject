import axios from 'axios';
// 导入类型
import type { AxiosInstance } from 'axios';
import type { ServiceRequestInterceptors, serviceRequestConfig } from './types';
import { ElLoading } from 'element-plus';
import type { ILoadingInstance } from 'element-plus';
const IS_LOADING = true;
class ServiceRequest {
  instance: AxiosInstance;
  interceptors?: ServiceRequestInterceptors;
  showLoading: boolean;
  loading?: ILoadingInstance;
  constructor(config: serviceRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? IS_LOADING;
    this.interceptors = config.interceptors;
    // 从 config 中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );
    // 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config);
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, .5)'
          });
        }
        return config;
      },
      (err) => {
        console.log(err);
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // 移除 loading
        this.loading?.close();
        // const data = res.data;
        // console.log(data, 'dataType');
        // if (data.returnCode === '-1001') {
        //   console.log('请求失败！错误信息');
        // } else {
        //   return data;
        // }
        return res.data;
      },
      (err) => {
        console.log(err);
        // 移除 loading
        this.loading?.close();
        if (err.response.status === 404) {
          console.log('404错误');
        }
        return err;
      }
    );
  }
  // 每次请求和创建的配置的类型一样
  request<T>(config: serviceRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1. 单个请求数据处理
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          // 2. 将 showLoading 设置为 true，不会影响下一个请求
          this.showLoading = IS_LOADING;
          // 3. 将结果返回出去
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = IS_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T>(config: serviceRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T>(config: serviceRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T>(config: serviceRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' });
  }

  patch<T>(config: serviceRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'patch' });
  }
}
export default ServiceRequest;
