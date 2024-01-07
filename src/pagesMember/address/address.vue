<script setup lang="ts">
import type { AddressItem } from '@/types/address'
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { reqGetMemberAddress, reqDeleteMemberAddressById } from '@/services/address'
import { useAddressStore } from '@/stores/modules/address'

const query = defineProps<{
  from?: string
}>()

// 地址列表
const addressList = ref<AddressItem[]>()
// 获取地址列表
const getMemberAddress = async () => {
  let { result } = await reqGetMemberAddress()
  addressList.value = result
}

// 删除地址
const onDeleteAddress = (id: string) => {
  uni.showModal({
    content: '确认删除地址？',
    success: async (success) => {
      if (success.confirm) {
        await reqDeleteMemberAddressById(id)
        getMemberAddress()
      }
    },
  })
}

const addressStore = useAddressStore()
// 选择地址
const onSelectedAddress = (val: AddressItem) => {
  if (query.from === 'order') {
    /* 从填写订单页面进入: 保存选中的地址，并返回 */
    addressStore.updateSelectedAddress(val)
    uni.navigateBack()
  } else {
    /* 从设置页面进入: 跳转地址编辑页 */
    uni.navigateTo({ url: `/pagesMember/address-form/address-form?id=${val.id}` })
  }
}

onShow(() => {
  getMemberAddress()
})
</script>

<template>
  <view class="viewport">
    <!-- 地址列表 -->
    <scroll-view class="scroll-view" scroll-y>
      <view v-if="true" class="address">
        <uni-swipe-action class="address-list">
          <!-- 收货地址项 -->
          <uni-swipe-action-item
            v-for="item in addressList"
            :key="item.id"
            class="item"
            @tap="onSelectedAddress(item)"
          >
            <view class="item-content">
              <view class="user">
                <text class="receiver">{{ item.receiver }}</text>
                <text class="contact">{{ item.contact }}</text>
                <text v-if="item.isDefault" class="badge">默认</text>
              </view>
              <view class="locate">{{ item.fullLocation }}</view>
              <navigator
                class="edit"
                hover-class="none"
                :url="`/pagesMember/address-form/address-form?id=${item.id}`"
                @tap.stop
              >
                修改
              </navigator>
            </view>
            <template #right>
              <button class="delete-button" @tap.stop="onDeleteAddress(item.id)">删除</button>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <view v-else class="blank">暂无收货地址</view>
    </scroll-view>
    <!-- 添加按钮 -->
    <view class="add-btn">
      <navigator hover-class="none" url="/pagesMember/address-form/address-form">
        新建地址
      </navigator>
    </view>
  </view>
</template>

<style>
page {
  height: 100%;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
/* 删除按钮 */
.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-size: 28rpx;
  color: #fff;
  border-radius: 0;
  padding: 0;
  background-color: #cf4444;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f4f4f4;

  .scroll-view {
    padding-top: 20rpx;
  }
}

.address {
  padding: 0 20rpx;
  margin: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .item-content {
    line-height: 1;
    padding: 40rpx 10rpx 38rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;

    .edit {
      position: absolute;
      top: 36rpx;
      right: 30rpx;
      padding: 2rpx 0 2rpx 20rpx;
      border-left: 1rpx solid #666;
      font-size: 26rpx;
      color: #666;
      line-height: 1;
    }
  }

  .item:last-child .item-content {
    border: none;
  }

  .user {
    font-size: 28rpx;
    margin-bottom: 20rpx;
    color: #333;
    .receiver {
      margin-right: 16rpx;
    }
    .contact {
      color: #666;
    }

    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #27ba9b;
      border-radius: 6rpx;
      border: 1rpx solid #27ba9b;
    }
  }

  .locate {
    line-height: 1.6;
    font-size: 26rpx;
    color: #333;
  }
}

.blank {
  margin-top: 300rpx;
  text-align: center;
  font-size: 32rpx;
  color: #888;
}

.add-btn {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
