import { request } from '@/utils/request'
import type { ProfileDetail, ProfileParams } from '@/types/member'

/**
 * 获取用户信息
 */
export const reqGetMemberProfile = () => {
  return request<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 修改个人信息
 * @param data 请求体参数
 */
export const reqMemberProfile = (data: ProfileParams) => {
  console.log(data)
  return request<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
