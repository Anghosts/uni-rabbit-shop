<template>
  <view class="sk-container">
    <view class="viewport data-v-4046d630">
      <view class="search data-v-4046d630">
        <view class="input data-v-4046d630">
          <text
            class="icon-search data-v-4046d630 sk-transparent sk-text-14-2857-988 sk-text sk-pseudo sk-pseudo-circle"
            >女靴</text
          >
        </view>
      </view>
      <view class="categories data-v-4046d630">
        <scroll-view class="primary data-v-4046d630">
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-218 sk-text"
              >居家</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-987 sk-text"
              >美食</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-975 sk-text"
              >服饰</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-489 sk-text"
              >母婴</text
            >
          </view>
          <view class="active item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-350 sk-text"
              >个护</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-690 sk-text"
              >严选</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-722 sk-text"
              >数码</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-554 sk-text"
              >运动</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-786 sk-text"
              >杂项</text
            >
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary data-v-4046d630">
          <view is="components/BaseSwiper" class="banner data-v-4046d630">
            <view class="carousel BaseSwiper--carousel data-v-2f6dfe10 BaseSwiper--data-v-2f6dfe10">
              <swiper
                :autoplay="false"
                :circular="true"
                class="data-v-2f6dfe10 BaseSwiper--data-v-2f6dfe10"
                :interval="3000"
                :current="0"
              ></swiper>
              <view
                class="indicator BaseSwiper--indicator data-v-2f6dfe10 BaseSwiper--data-v-2f6dfe10"
              >
                <text
                  class="dot BaseSwiper--dot data-v-2f6dfe10 BaseSwiper--data-v-2f6dfe10"
                ></text>
                <text
                  class="dot BaseSwiper--dot data-v-2f6dfe10 BaseSwiper--data-v-2f6dfe10"
                ></text>
                <text
                  class="dot BaseSwiper--dot data-v-2f6dfe10 BaseSwiper--data-v-2f6dfe10"
                ></text>
              </view>
            </view>
          </view>
          <view class="panel data-v-4046d630">
            <view class="title data-v-4046d630">
              <text class="name data-v-4046d630 sk-transparent sk-text-26-6667-507 sk-text"
                >家庭清洁</text
              >
              <navigator
                class="more data-v-4046d630 sk-transparent sk-text-30-0000-651 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section data-v-4046d630">
              <navigator class="goods data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-810 sk-text"
                  >随用随丢，懒人真爱地板清洁/除菌湿巾
                </view>
                <view class="price data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-737 sk-text"
                    >8.90</text
                  >
                </view>
              </navigator>
              <navigator class="goods data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-712 sk-text"
                  >添加茂金属更强韧，金属色垃圾袋
                </view>
                <view class="price data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-926 sk-text"
                    >8.90</text
                  >
                </view>
              </navigator>
              <navigator class="goods data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-66 sk-text"
                  >分场景使用不污染，超细纤维抹布分类5件套
                </view>
                <view class="price data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-145 sk-text"
                    >14.90</text
                  >
                </view>
              </navigator>
              <navigator class="goods data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-238 sk-text"
                  >灰尘毛发静电吸附地板除尘干巾40片/包
                </view>
                <view class="price data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-852 sk-text"
                    >7.90</text
                  >
                </view>
              </navigator>
              <navigator class="goods data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-715 sk-text"
                  >日式和风简约无盖垃圾桶11L
                </view>
                <view class="price data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-859 sk-text"
                    >9.90</text
                  >
                </view>
              </navigator>
              <navigator class="goods data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-180 sk-text"
                  >大容量干湿分类，脚踏缓降静音垃圾桶
                </view>
                <view class="price data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-243 sk-text"
                    >89.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-984 sk-text"
                >
                  一抽即提，免脏手，加厚抽绳垃圾袋3卷60只</view
                >
                <view class="price data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-714 sk-text"
                    >9.50</text
                  >
                </view>
              </navigator>
              <navigator class="goods data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-179 sk-text"
                  >软糯治愈系擦手，雪尼尔擦手球
                </view>
                <view class="price data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-723 sk-text"
                    >9.50</text
                  >
                </view>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-988 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-218 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-987 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-975 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-489 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-350 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-690 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-722 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-554 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-786 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-26-6667-507 {
  background-image: linear-gradient(
    transparent 26.6667%,
    #eeeeee 0%,
    #eeeeee 73.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-30-0000-651 {
  background-image: linear-gradient(
    transparent 30%,
    #eeeeee 0%,
    #eeeeee 70%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-14-2857-810 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-737 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-712 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-926 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-66 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-145 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-238 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-852 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-715 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-859 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-180 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-243 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-984 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-714 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-179 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-723 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
