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
    method: 'GET',
  })
}

export const logout = () => {
  return request({
    url: '/front/user/logout',
    method: 'POST'
  })
}

