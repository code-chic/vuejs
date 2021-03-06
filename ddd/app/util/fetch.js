import qs from 'qs'
import axios from 'axios'
import mockAdapter from '@/mock'
import Config from '@/config/index'

const instance = axios.create({
  baseURL: Config.apiPrefixUrl,
  method: 'POST', // 指定默认请求方式为 POST
  responseType: 'json', // 默认采用 JSON 格式交互
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }), // 参数序列化
  validateStatus: status => status >= 200 || status < 300, // 验证响应状态
  xsrfCookieName: 'XSRF-COOKIE-CUSTOM',
  timeout: Config.tiemout || 1000, // 设置API超时时间
  maxRedirects: 3, // 设置最大重定向次数
  withCredentials: false // 跨越是否需要凭证
})

if (process.env.NODE_ENV === 'development') {
  // 使用 mock adapter 适配器属性来拦截 axios 请求
  // 并配合 mockjs 来实现模拟数据
  mockAdapter(instance)
}

instance.interceptors.response.use(
  response => response,
  error => {
    // 对失败做点什么吧
    Promise.reject(error)
  }
)

// 导出 get 请求方法
export const doGet = (url, params) => instance.get(url, { params })

// 导出 post 请求方法
export const doPost = (url, data) => instance.post(url, data, {} /* other config */)
