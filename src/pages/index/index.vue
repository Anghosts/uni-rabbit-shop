<script setup lang="ts">
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { reqGetBanner, reqGetHomeCategory, reqGetHomeHot } from '@/services/home'
import CustomNavBar from './components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/hooks/index'

// 猜你喜欢数据加载
const { guessRef, onScrolltolower } = useGuessList()

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  let { result } = await reqGetBanner(1)
  bannerList.value = result
}
// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getCategoryList = async () => {
  let { result } = await reqGetHomeCategory()
  categoryList.value = result
}
// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHotList = async () => {
  let { result } = await reqGetHomeHot()
  hotList.value = result
}

const isTriggered = ref(false)
// 下拉刷新事件
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getHomeBanner(), getCategoryList(), getHotList(), guessRef.value?.getMore()])
  isTriggered.value = false
}

// 加载状态
const loading = ref(false)

onLoad(async () => {
  loading.value = true
  await Promise.all([getHomeBanner(), getCategoryList(), getHotList()])
  loading.value = false
})
</script>

<template>
  <CustomNavBar />
  <scroll-view
    refresher-enabled
    scroll-y
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    @refresherrefresh="onRefresherrefresh"
  >
    <PageSkeleton v-if="loading" />
    <template v-else>
      <BaseSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <BaseGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: #f7f7f7;
}
</style>
