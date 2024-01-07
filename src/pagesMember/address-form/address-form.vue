<script setup lang="ts">
import { ref } from 'vue'
import {
  reqAddMemberAddress,
  reqGetMemberAddressById,
  reqEditMemberAddressById,
} from '@/services/address'
import { onLoad } from '@dcloudio/uni-app'
import { useAddressStore } from '@/stores/modules/address'

// 表单数据
const form = ref({
  id: '', // 地址ID
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})
// 表单校验规则
const rules: UniHelper.UniFormsRules = {
  receiver: {
    rules: [{ required: true, errorMessage: '请输入收货人姓名' }],
  },
  contact: {
    rules: [
      {
        required: true,
        pattern: /^1[3-9]\d{9}$/,
        errorMessage: '手机号格式不正确',
      },
    ],
  },
  fullLocation: {
    rules: [{ required: true, errorMessage: '请选择所在地区' }],
  },
  address: {
    rules: [{ required: true, errorMessage: '请选择详细地址' }],
  },
}
// 表单组件实例
const formRef = ref<UniHelper.UniFormsInstance>()

// 获取页面参数
const query = defineProps<{
  id?: string
}>()
// 动态设置标题
uni.setNavigationBarTitle({ title: query.id ? '修改地址' : '新建地址' })

// 收集地址信息
const onRegionChange: UniHelper.RegionPickerOnChange = (e) => {
  form.value.fullLocation = e.detail.value.join(' ')
  const [provinceCode, cityCode, countyCode] = e.detail.code!
  Object.assign(form.value, { provinceCode, cityCode, countyCode })
}
// 收集是否为默认地址
const onSwitchChange: UniHelper.SwitchOnChange = (e) => {
  form.value.isDefault = e.detail.value ? 1 : 0
}

// 获取收货地址详情数据
const getMemberAddressById = async () => {
  if (query.id) {
    const { result } = await reqGetMemberAddressById(query.id)
    Object.assign(form.value, result)
  }
}

const addressStore = useAddressStore()
// 保存
const onSubmit = () => {
  formRef.value
    ?.validate?.()!
    .then(async () => {
      // 表单校验通过
      if (query.id) {
        // 修改地址
        let { id, ...data } = form.value
        await reqEditMemberAddressById(query.id, data)
        uni.showToast({ icon: 'success', title: '修改成功' })
      } else {
        // 新增地址
        let {
          result: { id },
        } = await reqAddMemberAddress(form.value)
        uni.showToast({ icon: 'success', title: '添加成功' })
        addressStore.updateSelectedAddress(Object.assign(form.value, { id }))
      }
      setTimeout(() => {
        uni.navigateBack()
      }, 500)
    })
    .catch(() => {
      // 表单校验不通过
      uni.showToast({ icon: 'none', title: '请填写完整信息' })
    })
}

onLoad(() => {
  getMemberAddressById()
})
</script>

<template>
  <view class="content">
    <uni-forms ref="formRef" :rules="rules" :model="form">
      <!-- 表单内容 -->
      <uni-forms-item name="receiver" class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </uni-forms-item>
      <uni-forms-item name="contact" class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </uni-forms-item>
      <uni-forms-item name="fullLocation" class="form-item">
        <text class="label">所在地区</text>
        <picker
          class="picker"
          mode="region"
          :value="form.fullLocation.split(' ')"
          @change="onRegionChange"
        >
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="address" class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </uni-forms-item>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          class="switch"
          color="#27ba9b"
          :checked="form.isDefault === 1"
          @change="onSwitchChange"
        />
      </view>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit">保存并使用</button>
</template>

<style>
page {
  background-color: #f4f4f4;
}
</style>

<style lang="scss" scoped>
.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  :deep(.uni-forms-item) {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
