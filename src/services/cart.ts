import type { CartAddGoodsParams } from '@/types/cart'
import { request } from '@/utils/request'

/**
 * 加入购物车
 * @param data 请求体参数
 */
export const reqAddMemberCart = (data: CartAddGoodsParams) => {
  return request({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
