<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-02.png'
import PlaygroundSlide01EN from '~/assets/general/images/playground/playground-slide-01-en.svg'
import PlaygroundSlide02EN from '~/assets/general/images/playground/playground-slide-02-en.svg'
import PlaygroundSlide03EN from '~/assets/general/images/playground/playground-slide-03-en.svg'
import PlaygroundSlide01TH from '~/assets/general/images/playground/playground-slide-01-th.svg'
import PlaygroundSlide02TH from '~/assets/general/images/playground/playground-slide-02-th.svg'
import PlaygroundSlide03TH from '~/assets/general/images/playground/playground-slide-03-th.svg'
import Decor01 from '~/assets/general/images/playground/playground-decor-01.png'
import Decor02 from '~/assets/general/images/playground/playground-decor-02.png'
import { BannerType } from '~/enums'
import type { ICarouselType } from '~/types/carousel'
import { useBannerObserver } from '~/composables/utility/observer'
import { bannerAnimation } from '~/config'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

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

const playgroundSlides = computed<ICarouselType[]>(() => {
  if (locale.value === "th") {
    return [
      { image: PlaygroundSlide01TH, text: "สนามเด็กเล่นที่ 1", path: "Playground1" },
      { image: PlaygroundSlide02TH, text: "สนามเด็กเล่นที่ 2", path: "Playground2" },
      { image: PlaygroundSlide03TH, text: "สนามเด็กเล่นที่ 3", path: "Playground3" },
    ];
  } else {
    return [
      { image: PlaygroundSlide01EN, text: "First Playground", path: "Playground1" },
      { image: PlaygroundSlide02EN, text: "Second Playground", path: "Playground2" },
      { image: PlaygroundSlide03EN, text: "Third Playground", path: "Playground3" },
    ];
  }
});
</script>

<template>
    <div
        class="relative w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        <!-- Carousel -->
        <div class="flex items-center h-full w-[80%] mx-auto z-10">
            <CarouselPlayground :slides="playgroundSlides" />
        </div>  

        <!-- Decoration -->
        <div 
            class="absolute bottom-5 left-0 pointer-events-none"
            :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
            :class="activeBanner === BannerType.SecondBanner 
                ? 'opacity-30 md:opacity-100 translate-x-10 visible' 
                : 'opacity-0 translate-x-0 invisible'"
        >
            <img
                :src="Decor02"
                alt="Decoration 02"
                class="w-40 h-50 relative z-5"
            />
            <div class="absolute bottom-0 left-4 w-32 h-4 bg-black opacity-50 rounded-full blur-xl"></div>
        </div>

        <div 
            class="absolute top-25 right-10 pointer-events-none"
            :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
            :class="activeBanner === BannerType.SecondBanner 
                ? 'opacity-30 md:opacity-100 translate-x-0 visible' 
                : 'opacity-0 translate-x-10 invisible'"
        >
            <img
                :src="Decor01"
                alt="Decoration 01"
                class="w-70 h-90 relative z-5"
            />
            <div class="absolute top-30 right-15 w-32 h-4 bg-black opacity-50 rounded-full blur-xl"></div>
        </div>
    </div>
</template>