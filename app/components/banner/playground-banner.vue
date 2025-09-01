<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-02.png'
import Decor01 from '~/assets/general/images/playground/playground-decor-01.png'
import Decor02 from '~/assets/general/images/playground/playground-decor-02.png'
import { BannerType } from '~/enums/enum'
import { useBannerObserver } from '~/composables/utility/observer'
import { bannerAnimation } from '~/config'

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
        <!-- Decoration -->
        <div 
            class="absolute bottom-5 left-0"
            :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
            :class="activeBanner === BannerType.SecondBanner ? 'opacity-30 md:opacity-100 translate-x-10 visible' : 'opacity-0 translate-x-0 invisible'"
        >
            <img
                :src="Decor02"
                alt="Decoration 02"
                class="w-40 h-50 relative z-10"
            />
            <div class="absolute bottom-0 left-4 w-32 h-4 bg-black opacity-50 rounded-full blur-xl"></div>
        </div>

        <div 
            class="absolute top-25 right-10"
            :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
            :class="activeBanner === BannerType.SecondBanner ? 'opacity-30 md:opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-10 invisible'"
        >
            <img
                :src="Decor01"
                alt="Decoration 01"
                class="w-70 h-90 relative z-10"
            />
            <div class="absolute top-30 right-15 w-32 h-4 bg-black opacity-50 rounded-full blur-xl"></div>
        </div>
    </div>
</template>