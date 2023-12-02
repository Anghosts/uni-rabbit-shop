import type { LoginResult } from '@/types/memver'
import { request } from '@/utils/request'

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const reqLoginWxMinSimple = (phoneNumber: string) => {
  return request<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
