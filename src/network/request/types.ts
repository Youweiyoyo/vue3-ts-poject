// 定义接口
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ServiceRequestInterceptors<T = AxiosResponse> {
  // 请求拦截类型
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;
  // 响应拦截类型
  responseInterceptors?: (res: T) => T;
  responseInterceptorsCatch?: (error: any) => any;
}
// 从 Axios 的 AxiosRequestConfig 类型中继承到 serviceRequestConfig 并且重新扩展属于自己的类型 interceptors
// 接口内的属性 interceptors 的类型是自己定义的 ServiceRequestInterceptors 接口类型
export interface serviceRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ServiceRequestInterceptors<T>;
  showLoading?: boolean;
}
