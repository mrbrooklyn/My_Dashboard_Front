<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-01.png'
import Decor01 from '~/assets/general/images/home/home-decor-01.png'
import { BannerType } from '~/enums/enum'
import { useBannerObserver } from '~/composables/utility/observer'

export interface Props {
    title: string
    content: string
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
        class="w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        <div
            class="container h-full mx-auto flex flex-col items-center justify-center gap-y-8"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="500"
        >
            <div
                class="w-full h-1/2 mx-auto flex flex-col justify-end md:h-auto lg:max-w-[600px]"
            >
                <h1 class="text-3xl lg:text-5xl text-center mb-4">
                    {{ title }}
                </h1>

                <p class="text-xl text-center mb-4">
                    {{ content }}
                </p>
                <!-- <div
                    v-if="!isAuthenticated"
                    class="flex justify-center gap-x-4"
                >
                    <Button :onClick="onLoginClick">เข้าสู่ระบบ</Button>
                    <Button :onClick="onRegisterClick">สมัครเลย</Button>
                </div> -->
            </div>
        </div>
        <div class="absolute bottom-0 right-0 w-150 h-150 overflow-hidden pointer-events-none">
            <img
                :src="Decor01"
                alt="Home-Decoration-01"
                class="w-full h-full transition-all duration-300"
                :class="activeBanner === BannerType.FirstBanner
                    ? 'opacity-100 translate-x-0 visible'
                    : 'opacity-0 translate-x-10 invisible'"
            />
        </div>
    </div>
</template>