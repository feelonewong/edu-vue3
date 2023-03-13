import { ElMessage } from 'element-plus'
import { refreshToken } from './../api/user'
import { useToken } from '@/stores/accsssToken'
import axios, { type AxiosRequestHeaders } from 'axios'
import router from '@/router/index'

const BASE_URL = import.meta.env.VITE_API_URL

const request = axios.create({
  baseURL: BASE_URL
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

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response
  },
  async (error) => {
    // 如果code = 401 token失效 拿refershToken请求新的token
    let errorResp = error.response
    let { status, config } = errorResp
    if (status === 401) {
      // token失效
      // 1. 请求refersh token 2>再调一次接口
      const { data } = await refreshToken()
      console.log(data)
      if (data.success) {
        // 新的token请求成功 1.存新token 2.再发一次之前的接口请求
        useToken().saveToken(data.content)
        return request(config)
      } else {
        // 跳转到login
        ElMessage.error('刷新token失效，请重新登录!')
        router.push({ name: 'login' })
      }
    }
    return Promise.reject(error)
  }
)
export default request
