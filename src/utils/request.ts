import { useMemberStore } from '@/stores'

const BASE_URL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const memberStore = useMemberStore()

// 添加拦截器
const interceptor = {
  // 响应拦截器
  invoke(options: UniApp.RequestOptions) {
    // 设置请求超时时间
    options.timeout = 10000
    // 拼接地址
    if (!options.url.startsWith('http')) {
      options.url = BASE_URL + options.url
    }
    // 获取token
    const profile = memberStore.profile
    // 设置请求头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
      Authoriztion: profile?.token,
    }
  },
}
uni.addInterceptor('request', interceptor)
uni.addInterceptor('uploadFile', interceptor)

type Data<T> = {
  code: string
  msg: string
  result: T
}

// 封装请求
export const request = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 请求成功
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 用户信息失效
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 其他错误
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误！',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({ title: '网络错误', icon: 'error' })
        reject(err)
      },
    })
  })
}
