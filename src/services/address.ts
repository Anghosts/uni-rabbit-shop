import type { AddressParams, AddressId, AddressItem } from '@/types/address'
import { request } from '@/utils/request'

/**
 * 添加收货地址
 */
export const reqAddMemberAddress = (data: AddressParams) => {
  return request<AddressId>({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**
 * 获取收货地址列表
 */
export const reqGetMemberAddress = () => {
  return request<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 获取收货地址详情
 * @param id 地址id(路径参数)
 */
export const reqGetMemberAddressById = (id: string) => {
  return request<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 修改收货地址
 * @param id 地址id(路径参数)
 * @param data 表单数据(请求体参数)
 */
export const reqEditMemberAddressById = (id: string, data: AddressParams) => {
  return request({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const reqDeleteMemberAddressById = (id: string) => {
  return request({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
