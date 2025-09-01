<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-03.png'
import Decor01 from '~/assets/general/images/contact/contact-decor-01.png'
import Phone from '~/assets/general/icons/phone.png'
import Mail from '~/assets/general/icons/mail.png'
import Linkedin from '~/assets/general/icons/linkedin.png'
import Github from '~/assets/general/icons/github.png'
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
        <div class="container h-full mx-auto flex flex-col items-center justify-center gap-y-8">
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
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[30%] overflow-hidden pointer-events-none">
            <img
                :src="Decor01"
                alt="Contact-Decoration-01"
                class="w-full h-full transition-all duration-300"
                :class="activeBanner === BannerType.ThirdBanner
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 translate-y-10 invisible'"
            />
        </div>
    </div>
</template>