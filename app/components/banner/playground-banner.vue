<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-02.png'
import Decor01 from '~/assets/general/images/playground/playground-decor-01.png'
import Decor02 from '~/assets/general/images/playground/playground-decor-02.png'
import { BannerType } from '~/enums'
import type { ICarouselType } from '~/types/carousel'
import { useBannerObserver } from '~/composables/utility/observer'
import { bannerAnimation, zIndex } from '~/config'

export interface Props {
    slide: ICarouselType[]
}
defineProps<Props>()

const { activeBanner } = useBannerObserver([
  BannerType.FIRST_BANNER,
  BannerType.SECOND_BANNER,
  BannerType.THIRD_BANNER
])
</script>

<template>
    <div
        class="relative w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        <!-- Carousel -->
        <div 
            class="flex items-center h-full"
            :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
            :class="activeBanner === BannerType.SECOND_BANNER
                ? 'opacity-100 translate-y-0 visible'
                : 'opacity-0 translate-y-0 invisible'"
        >
            <CarouselPlayground :slides="slide" />
        </div>  

        <!-- Decoration -->
        <div 
            class="absolute bottom-5 left-0 pointer-events-none"
            :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
            :class="activeBanner === BannerType.SECOND_BANNER 
                ? 'opacity-100 translate-x-10 visible' 
                : 'opacity-0 translate-x-0 invisible'"
        >
            <img
                :src="Decor02"
                alt="Decoration 02"
                class="w-25 h-30 sm:w-40 sm:h-50 relative"
                :style="{ zIndex: zIndex.base }"
            />
            <div class="absolute bottom-0 left-1 sm:bottom-0 sm:left-4 w-20 h-4 sm:w-32 sm:h-4 bg-black opacity-50 rounded-full blur-xl"></div>
        </div>

        <div 
            class="absolute top-25 right-10 pointer-events-none"
            :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
            :class="activeBanner === BannerType.SECOND_BANNER 
                ? 'opacity-100 translate-x-0 visible' 
                : 'opacity-0 translate-x-10 invisible'"
        >
            <img
                :src="Decor01"
                alt="Decoration 01"
                class="w-40 h-50 sm:w-70 sm:h-90 relative"
                :style="{ zIndex: zIndex.base }"
            />
            <div class="absolute top-20 right-10 sm:top-30 sm:right-15 w-20 h-4 sm:w-32 sm:h-4 bg-black opacity-50 rounded-full blur-xl"></div>
        </div>
    </div>
</template>