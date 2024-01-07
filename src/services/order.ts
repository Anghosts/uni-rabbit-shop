import type {
  OrderPreResult,
  OrderCreateParams,
  OrderResult,
  OrderLogisticResult,
  OrderListParams,
  OrderListResult,
} from '@/types/order'
import { request } from '@/utils/request'

/**
 * 填写订单-获取预付订单
 */
export const reqGetMemberOrderPre = () => {
  return request<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const reqGetMemberOrderPreNow = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return request<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/**
 * 填写订单-再次购买
 * @param id 订单id
 */
export const reqGetMemberOrderRepurchase = (id: string) => {
  return request<OrderPreResult>({
    method: 'GET',
    url: `/member/order/repurchase/${id}`,
  })
}

/**
 * 提交订单
 * @param data 请求参数
 */
export const reqMemberOrder = (data: OrderCreateParams) => {
  return request<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

/**
 * 获取订单详情
 * @param id 订单id
 */
export const reqGetMemberOrderDetail = (id: string) => {
  return request<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const reqGetMemberOrderConsignment = (id: string) => {
  return request({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const reqMemberOrderReceipt = (id: string) => {
  return request<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const reqGetMemberOrderLogistics = (id: string) => {
  return request<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const reqDeleteMemberOrder = (ids: string[]) => {
  return request({
    method: 'DELETE',
    url: `/member/order`,
    data: { ids },
  })
}

/**
 * 取消订单
 * @description 仅在订单状态为待付款时，可取消订单。
 * @param id 订单id
 * @param data cancelReason 取消理由
 */
export const reqMemberOrderCancel = (id: string, cancelReason: string) => {
  return request<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/cancel`,
    data: { cancelReason },
  })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const reqGetMemberOrderList = (data: OrderListParams) => {
  return request<OrderListResult>({
    method: 'GET',
    url: `/member/order`,
    data,
  })
}
