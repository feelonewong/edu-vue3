import request from '@/utils/request'

export type CommonData<T> = {
  code: string
  data: T
  mesg: string
  time: string
}

export type MenusItem = {
  createdBy: string
  createTime: string
  description: string
  href: string
  icon: string
  id: number
  level: number
  name: string
  operatorId: string | null
  orderNum: number
  parentId: number
  shown: boolean
  updateBy: string
  updateTime: string
}

export const getAll = () => {
  return request<CommonData<MenusItem[]>>({
    method: 'GET',
    url: '/boss/menu/getAll'
  })
}
