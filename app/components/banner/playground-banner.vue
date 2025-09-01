<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-02.png'
import Brown from '~/assets/general/images/mock/brown-02.svg'
import { BannerType } from '~/enums/enum'
import { useBannerObserver } from '~/composables/utility/observer'

export interface Props {
    // title: string
    // content: string
}
defineProps<Props>()

const { activeBanner } = useBannerObserver([
  BannerType.FirstBanner,
  BannerType.SecondBanner,
  BannerType.ThirdBanner
])
</script>

<template>
    <div
        class="relative w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        <img
            :src="Brown"
            alt="Brown"
            class="absolute bottom-5 left-0 w-60 h-60 transition-all duration-300"
            :class="activeBanner === BannerType.SecondBanner ? 'opacity-100 translate-x-10 visible' : 'opacity-0 translate-x-0 invisible'"
        />
    </div>
</template>