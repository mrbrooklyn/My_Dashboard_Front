<script setup lang="ts">
import { BannerIndicatorState } from '~/enums'
import type { IBannerTabMenu } from '~/types/banner'
import BannerIndicator from './banner-indicator.vue'
import { handleScrollTo } from '~/composables/utility/handle-scroll'

export interface Props {
  menus: IBannerTabMenu[]
  activeBanner: string
}
const { menus, activeBanner } = defineProps<Props>()

const getIndicatorState = (menu: IBannerTabMenu, index: number) => {
  if (menu.value === activeBanner) return BannerIndicatorState.ACTIVE
  const activeIndex = menus.findIndex(m => m.value === activeBanner)
  if (activeIndex > index) return BannerIndicatorState.PAST
  return BannerIndicatorState.COMING
}
</script>

<template>
  <div class="absolute w-1.5 h-full left-2 flex flex-col justify-center gap-y-2">
    <BannerIndicator
      v-for="(menu, index) in menus"
      :key="menu.value"
      :value="menu.value"
      :indicatorState="getIndicatorState(menu, index)"
      :onClick="handleScrollTo"
    />
  </div>
</template>