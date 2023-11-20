import { request } from '@/utils/request'
import type { CategoryTopItem } from '@/types/category'

/**
 * 分类列表-小程序
 */
export const reqGetCategoryTop = () => {
  return request<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
