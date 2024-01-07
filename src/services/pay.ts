import { request } from '@/utils/request'

/**
 * 获取微信支付参数
 * @param data orderId 订单id
 */
export const reqGetPayWxPayMiniPay = (orderId: string) => {
  return request<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data: { orderId },
  })
}

/**
 * 模拟支付-内测版
 * @param data orderId 订单id
 */
export const reqGetPayMock = (orderId: string) => {
  return request({
    method: 'GET',
    url: '/pay/mock',
    data: { orderId },
  })
}
