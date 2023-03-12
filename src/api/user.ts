import { useToken } from './../stores/accsssToken'
import request from '@/utils/request'
type ILoginInfo = {
  phone: string
  code?: string
  password: string
}

export const login = (LoginInfo: ILoginInfo) => {
  return request({
    url: '/front/user/login',
    method: 'POST',
    data: `phone=${LoginInfo.phone}&password=${LoginInfo.password}`
  })
}

export const getUserInfo = () => {
  return request({
    url: '/front/user/getInfo',
    method: 'GET'
  })
}

export const logout = () => {
  return request({
    url: '/front/user/logout',
    method: 'POST'
  })
}

let isRefreshing = false
let promiseRT: Promise<any>
export const refreshToken = () => {
  if (isRefreshing) {
    return promiseRT
  }
  isRefreshing = true
  promiseRT = request({
    url: '/front/user/refresh_token',
    method: 'POST',
    params: {
      refreshtoken: useToken().token?.refresh_token
    }
  }).finally(()=>{
    isRefreshing = false
  })
  return promiseRT
}
