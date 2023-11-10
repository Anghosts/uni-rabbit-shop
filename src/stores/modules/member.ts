import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

type ProfileType = {
  nickname: string
  token: string
}

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile: Ref<ProfileType> = ref({
      nickname: '',
      token: '',
    })

    // 保存会员信息，登录时使用
    const setProfile = (val: ProfileType) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = {
        nickname: '',
        token: '',
      }
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  // 持久化
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
