import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  // 选中的地址
  const selectedAddress = ref<AddressItem>()
  // 修改选中的地址
  const updateSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }

  return {
    selectedAddress,
    updateSelectedAddress,
  }
})
