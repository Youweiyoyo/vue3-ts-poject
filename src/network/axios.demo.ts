console.log('axios____');
import axios from 'axios';
// 模拟 get 请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data);
});
// axios 的配置选项
// axios.defaults.baseURL = 'xxxx';  // 根地址
// axios.defaults.timeout = 1000  // 请求过期时间
// axios.defaults.headers = {} // 请求头参数配置
// axios 的拦截器
// fn1:在请求发送成功会执行的函数
// fn2:在请求发送失败会执行的函数
// axios.interceptors.request.use(fn1,fn2)  // 请求拦截器
// axios.interceptors.request.use((config)=>{
//   // 需要做的操作
//   // 1.给请求添加 token
//   // 2.isLoading动画
//   return config
// })
// fn1:数据响应成功(服务器正常的返回了数据 200)
// fn2:数据相应失败（500）
// axios.interceptors.response.use(fn1,fn2) // 相应拦截器
