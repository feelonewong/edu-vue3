import { useToken } from '@/stores/accsssToken'
import axios, { type AxiosRequestHeaders } from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

const request = axios.create({
  // baseURL: BASE_URL
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 添加token，加签类似操作
    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders
    }
    const useTokenRes = useToken()
    config.headers.Authorization = useTokenRes.token.access_token
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default request
