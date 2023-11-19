<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { SubTypeItem } from '@/types/hot'
import { reqGetHotRecommend } from '@/services/hot'

type HotMapItem = {
  type: string
  title: string
  url: string
}

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
// 当前推荐页类型
const currentHot = ref<HotMapItem>({
  type: '',
  title: '',
  url: '',
})
// 推荐封面图
const bannerPicture = ref('')
// 推荐选项
const subTypeList = ref<(SubTypeItem & { status?: string })[]>([])
// 当前显示的推荐选项
const subTypeActive = ref(0)

// 获取热门推荐数据
const getHotRecommend = async (url: string) => {
  let { result } = await reqGetHotRecommend(url)
  bannerPicture.value = result.bannerPicture
  subTypeList.value = result.subTypes
}

// 列表滚动触底
const onScrolltolower = async () => {
  // 获取当前选项
  const currentSubType = subTypeList.value[subTypeActive.value]
  // 如果当前正在请求，则直接退出
  if (currentSubType.status && currentSubType.status !== 'ok') return
  // 改变状态为加载中
  currentSubType.status = 'loading'
  // 获取分页数据
  let { page, pageSize, pages } = currentSubType.goodsItems
  if (page < pages) {
    // 页面累加
    currentSubType.goodsItems.page++
  } else {
    // 数据全部加载完
    currentSubType.status = 'end'
    return
  }
  // 整理请求参数
  let data = {
    subType: currentSubType.id,
    page: currentSubType.goodsItems.page,
    pageSize,
  }
  // 发送请求
  let { result } = await reqGetHotRecommend(currentHot.value.url, data)
  // 追加数据
  currentSubType.goodsItems.items.push(...result.subTypes[subTypeActive.value].goodsItems.items)
  currentSubType.status = 'ok'
}

onLoad((query) => {
  currentHot.value = hotMap.find((item) => item.type === query!.type) as HotMapItem
  uni.setNavigationBarTitle({ title: currentHot.value.title })

  getHotRecommend(currentHot.value.url)
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypeList"
        :key="item.id"
        :class="{ active: subTypeActive === index }"
        class="text"
        @tap="subTypeActive = index"
      >
        {{ item.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      v-show="subTypeActive === index"
      v-for="(subType, index) in subTypeList"
      :key="subType.id"
      scroll-y
      class="scroll-view"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in subType.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.desc }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">
        {{ subType.status === 'loading' ? '正在加载...' : '没有更多数据~' }}
      </view>
    </scroll-view>
  </view>
</template>

<style>
page {
  height: 100%;
  background-color: #f4f4f4;
}
</style>

<style lang="scss" scoped>
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    margin-top: 12rpx;
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
