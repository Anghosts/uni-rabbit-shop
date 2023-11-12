import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
import type { PageResult, PageParams } from '@/types/global'
import { request } from '@/utils/request'

/**
 * 首页-广告区域
 * @param distributionSite 广告区域展示位置: 1 为首页（默认值）, 2 为商品分类页
 */
export const reqGetHomeBanner = (distributionSite = 1) => {
  return request<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: { distributionSite },
  })
}

/**
 * 首页-前台分类
 */
export const reqGetHomeCategory = () => {
  return request<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
 */
export const reqGetHomeHot = () => {
  return request<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 猜你喜欢-小程序
 * @param data page: 页码，pageSize: 页大小
 */
export const reqGetHomeGoodsGuessLike = (data?: PageParams) => {
  return request<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
