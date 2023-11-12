/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import BaseSwiper from '@/components/BaseSwiper.vue'
import BaseGuess from '@/components/BaseGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    BaseSwiper: typeof BaseSwiper
    BaseGuess: typeof BaseGuess
  }
}

// 组件实例类型
export type BaseGuessInstance = InstanceType<typeof BaseGuess>
