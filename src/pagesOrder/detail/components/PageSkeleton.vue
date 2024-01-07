<template name="skeleton">
  <view class="sk-container">
    <view class="navbar navbar data-v-baa4ebef data-v-baa4ebef" style="padding-top: 20px"> </view>
    <scroll-view
      scroll-y="true"
      class="viewport viewport data-v-baa4ebef data-v-baa4ebef"
      id="scroller"
      enable-back-to-top="true"
    >
      <view class="overview data-v-baa4ebef sk-image" style="padding-top: 40px">
        <view class="tips tips data-v-baa4ebef data-v-baa4ebef">
          <view
            is="node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown"
            class="data-v-baa4ebef data-v-baa4ebef"
          >
            <view
              class="uni-countdown countdown--uni-countdown data-v-342c352a countdown--data-v-342c352a"
            >
            </view>
          </view>
        </view>
        <view
          class="button data-v-baa4ebef sk-transparent sk-text-28-1250-765 sk-text"
          style="background-position-x: 50%"
        ></view>
      </view>
      <view class="shipment shipment data-v-baa4ebef data-v-baa4ebef">
        <view class="locate data-v-baa4ebef"></view>
      </view>
      <view class="goods goods data-v-baa4ebef data-v-baa4ebef">
        <view class="item item data-v-baa4ebef data-v-baa4ebef">
          <navigator class="navigator navigator data-v-baa4ebef data-v-baa4ebef" hover-class="none">
            <image class="cover data-v-baa4ebef sk-image"></image>
            <view class="meta meta data-v-baa4ebef data-v-baa4ebef">
              <view class="price price data-v-baa4ebef data-v-baa4ebef">
                <view class="actual actual data-v-baa4ebef data-v-baa4ebef">
                  <text class="symbol data-v-baa4ebef sk-transparent sk-opacity"></text>
                </view>
              </view>
              <view class="quantity data-v-baa4ebef sk-transparent sk-opacity"></view>
            </view>
          </navigator>
        </view>
        <view class="total total data-v-baa4ebef data-v-baa4ebef">
          <view class="row row data-v-baa4ebef data-v-baa4ebef"> </view>
          <view class="row row data-v-baa4ebef data-v-baa4ebef"> </view>
          <view class="row row data-v-baa4ebef data-v-baa4ebef"> </view>
        </view>
      </view>
      <view class="detail detail data-v-baa4ebef data-v-baa4ebef">
        <view class="row row data-v-baa4ebef data-v-baa4ebef">
          <view class="item data-v-baa4ebef sk-transparent"> </view>
          <view class="item data-v-baa4ebef sk-transparent sk-text-0-0000-968 sk-text"></view>
        </view>
      </view>
      <view is="components/BaseGuess" class="r r data-v-baa4ebef data-v-baa4ebef">
        <view class="caption BaseGuess--caption data-v-0682eb28 BaseGuess--data-v-0682eb28">
          <text
            class="text BaseGuess--text data-v-0682eb28 BaseGuess--data-v-0682eb28 sk-transparent sk-text-0-0000-186 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
        <view class="guess BaseGuess--guess data-v-0682eb28 BaseGuess--data-v-0682eb28">
          <navigator
            class="guess-item BaseGuess--guess-item data-v-0682eb28 BaseGuess--data-v-0682eb28"
          >
            <image
              class="image BaseGuess--image data-v-0682eb28 BaseGuess--data-v-0682eb28 sk-image"
              mode="aspectFill"
            ></image>
          </navigator>
          <navigator
            class="guess-item BaseGuess--guess-item data-v-0682eb28 BaseGuess--data-v-0682eb28"
          >
            <image
              class="image BaseGuess--image data-v-0682eb28 BaseGuess--data-v-0682eb28 sk-image"
              mode="aspectFill"
            ></image>
          </navigator>
        </view>
      </view>
      <view class="toolbar toolbar data-v-baa4ebef data-v-baa4ebef" style="padding-bottom: 0px">
        <view class="button primary data-v-baa4ebef sk-transparent sk-text-14-2857-803 sk-text">
          去支付
        </view>
        <view class="button data-v-baa4ebef sk-transparent sk-text-14-2857-194 sk-text">
          取消订单
        </view>
      </view>
    </scroll-view>
  </view>
</template>
