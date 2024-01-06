import type { CartAddGoodsParams, CartItem } from '@/types/cart'
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

/**
 * 获取购物车列表
 */
export const reqGetMemberCart = () => {
  return request<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/**
 * 删除购物车中的商品
 * @param ids sku id 集合
 */
export const reqDeleteMemberCart = (ids: string[]) => {
  return request({
    method: 'DELETE',
    url: '/member/cart',
    data: { ids },
  })
}

/**
 * 修改购物车单品数量或选中状态
 * @param skuId SKUID
 * @param data selected 选中状态 count
 */
export const reqEditMemberCart = (skuId: string, data: { selected?: boolean; count?: number }) => {
  return request({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

/**
 * 购物车全选/取消全选
 * @param data selected 是否选中
 */
export const reqMemberCartSelected = (selected: boolean) => {
  return request({
    method: 'PUT',
    url: '/member/cart/selected',
    data: { selected },
  })
}
