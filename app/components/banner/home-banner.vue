<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-01.png'
import Decor01 from '~/assets/general/images/home/home-decor-01.png'
import { BannerType } from '~/enums/enum'
import { useBannerObserver } from '~/composables/utility/observer'
import { bannerAnimation } from '~/config'

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

const isAuthenticated = ref(false); // :TODO: computed(() => store.state.auth.isAuthenticated)

const onClickLogin = () => {
    // TODO: Handle login logic
};

const onClickRegister = () => {
    // TODO: Handle register logic
};
</script>

<template>
    <div
        class="relative w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        <div class="container h-full mx-auto flex flex-col items-center justify-center gap-y-8">
            <div class="w-full h-1/2 mx-auto flex flex-col justify-center md:h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                <h1 class="text-3xl lg:text-5xl text-center mb-4">
                    {{ title }}
                </h1>

                <p class="text-md sm:text-xl text-center">
                    {{ content }}
                </p>
                
                <hr class="border-0 h-px my-5 bg-gradient-to-r from-transparent via-[var(--color-medium-gray)] to-transparent">
                <div
                    v-if="!isAuthenticated"
                    class="flex justify-center items-center gap-x-4"
                >
                    <ButtonBlock :onClick="onClickLogin">LOGIN</ButtonBlock>
                    <span class="text-[var(--color-medium-gray)]">or</span>
                    <ButtonBlock :onClick="onClickRegister">REGISTER</ButtonBlock>
                </div>
            </div>
        </div>

        <!-- Decoration -->
        <div class="absolute bottom-0 right-0 w-85 h-60 md:w-135 md:h-100 lg:w-200 lg:h-150 overflow-hidden pointer-events-none">
            <img
                :src="Decor01"
                alt="Home-Decoration-01"
                class="w-full h-full"
                :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                :class="activeBanner === BannerType.FirstBanner
                    ? 'opacity-100 translate-x-0 visible'
                    : 'opacity-0 translate-x-10 invisible'"
            />
        </div>
    </div>
</template>