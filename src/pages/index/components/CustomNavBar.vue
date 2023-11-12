<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>
<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    <view class="logo">
      <image class="logo__image" src="@/static/images/logo.png" />
      <text class="logo__text">新鲜 · 亲民 · 快捷</text>
    </view>
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-flow: column;
  padding: 24rpx;
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  color: #fff;
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    height: 44rpx;
    .logo__image {
      width: 200rpx;
      margin-right: 22rpx;
    }
    .logo__text {
      padding-left: 20rpx;
      border-left: 2rpx solid rgba(255, 255, 255, 0.6);
      color: rgba(255, 255, 255, 0.9);
      font-size: 28rpx;
    }
  }
  .search {
    height: 32px;
    display: flex;
    justify-content: space-between;
    line-height: 32px;
    padding: 0 24rpx 0 20rpx;
    border-radius: 32px;
    background-color: rgba(255, 255, 255, 0.65);
    .icon-search {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      &::before {
        margin-right: 8rpx;
        font-size: 32rpx;
      }
    }
  }
}
</style>
