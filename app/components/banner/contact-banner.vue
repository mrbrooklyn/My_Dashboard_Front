<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-03.png'
import Decor01 from '~/assets/general/images/contact/contact-decor-01.png'
import Decor02 from '~/assets/general/images/contact/contact-decor-06.png'
import Decor03 from '~/assets/general/images/contact/contact-decor-07.png'
import Decor04 from '~/assets/general/images/contact/contact-decor-08.png'
import Decor05 from '~/assets/general/images/contact/contact-decor-09.png'
import Decor10 from '~/assets/general/images/contact/contact-decor-10-1.png'
import Decor11 from '~/assets/general/images/contact/contact-decor-11.png'
import Phone from '~/assets/general/icons/phone.png'
import Mail from '~/assets/general/icons/mail.png'
import Linkedin from '~/assets/general/icons/linkedin.png'
import Github from '~/assets/general/icons/github.png'
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
        <!-- Contact Card -->
        <div class="container h-full mx-auto flex flex-col items-center justify-center gap-y-8 relative z-10">
            <div class="w-full max-w-lg mx-auto bg-[var(--color-custom-gray)]/50 p-10 rounded">
                <div class="list-disc list-inside text-md text-[var(--color-medium-gray)] space-y-5">
                    <div class="flex items-center gap-x-5">
                        <img :src="Phone" class="w-6 h-6"/>
                        <p>000-000-0000</p>
                    </div>
                    <div class="flex items-center gap-x-5">
                        <img :src="Mail" class="w-6 h-6"/>
                        <p>Lorem ipsum</p>
                    </div>
                    <div class="flex items-center gap-x-5">
                        <img :src="Github" class="w-6 h-6"/>
                        <p>https://github.com/Lorem ipsum/</p>
                    </div>
                    <div class="flex items-center gap-x-5">
                        <img :src="Linkedin" class="w-6 h-6"/>
                        <p>https://www.linkedin.com/in/Lorem ipsum/</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Decoration -->
        <div class="absolute top-0 right-4 h-full grid grid-cols-2 gap-4 overflow-hidden pointer-events-none">
            <div class="flex items-end justify-end mr-10">
                <img 
                    :src="Decor02" 
                    alt="Contact-Decoration-02" 
                    class="w-32 h-auto shadow-md opacity-0 sm:opacity-30 lg:opacity-100" 
                :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                    :class="activeBanner === BannerType.ThirdBanner
                        ? 'translate-x-10 visible'
                        : 'translate-x-0 invisible'"
                />
            </div>
            <div class="flex items-end justify-start mr-10">
                <img 
                    :src="Decor03" 
                    alt="Contact-Decoration-03"
                    class="w-40 h-auto shadow-md mb-10 opacity-0 sm:opacity-30 lg:opacity-100" 
                    :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                    :class="activeBanner === BannerType.ThirdBanner
                        ? 'translate-y-10 visible'
                        : 'translate-y-0 invisible'"
                />
            </div>
            <div class="row-span-2">
                <img 
                    :src="Decor04" 
                    alt="Contact-Decoration-04"
                    class="w-48 h-auto shadow-md opacity-0 sm:opacity-30 lg:opacity-100" 
                    :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                    :class="activeBanner === BannerType.ThirdBanner
                        ? 'translate-y-0 visible'
                        : 'translate-y-10 invisible'"
                />
            </div>
            <div class="row-span-2">
                <img 
                    :src="Decor05" 
                    alt="Contact-Decoration-05" 
                    class="w-28 h-auto shadow-md opacity-0 sm:opacity-30 lg:opacity-100" 
                    :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                    :class="activeBanner === BannerType.ThirdBanner
                        ? 'translate-x-0 visible'
                        : 'translate-x-10 invisible'"
                />
            </div>
        </div>

        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[30%] overflow-hidden pointer-events-none">
            <img
                :src="Decor01"
                alt="Contact-Decoration-01"
                class="w-full h-full"
                :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                :class="activeBanner === BannerType.ThirdBanner
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 translate-y-10 invisible'"
            />
        </div>

        <div class="absolute top-[30%] left-[15%] w-[250px] h-[30%] overflow-hidden pointer-events-none">
            <img
                :src="Decor10"
                alt="Contact-Decoration-10"
                class="w-50 h-50"
                :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                :class="activeBanner === BannerType.ThirdBanner
                    ? 'opacity-0 sm:opacity-30 lg:opacity-100 translate-y-0 visible'
                    : 'opacity-0 translate-y-0 invisible'"
            />
        </div>

        <div class="absolute top-0 left-[5%] w-[250px] h-[30%] overflow-hidden pointer-events-none">
            <img
                :src="Decor11"
                alt="Contact-Decoration-11"
                class="w-60 h-70"
                :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                :class="activeBanner === BannerType.ThirdBanner
                    ? 'opacity-0 sm:opacity-30 lg:opacity-100 translate-y-0 visible'
                    : 'opacity-0 translate-y-0 invisible'"
            />
        </div>

    </div>
</template>