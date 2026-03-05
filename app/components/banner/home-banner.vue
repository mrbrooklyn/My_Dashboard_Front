<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-01.png'
import Decor01 from '~/assets/general/images/home/home-decor-01.png'
import { BannerType } from '~/enums'
import { useBannerObserver } from '~/composables/utility/observer'
import { bannerAnimation } from '~/config'
import { AuthContainerType } from '~/enums'
import { useAuthStore } from '~/store/auth'
import { useI18n } from 'vue-i18n'
import { onMounted, onBeforeUnmount, watch } from "vue"

const authStore = useAuthStore()

const { t, locale } = useI18n()

export interface Props {
    title: string
    content: string
}
const props = defineProps<Props>()

const { activeBanner } = useBannerObserver([
  BannerType.FIRST_BANNER,
  BannerType.SECOND_BANNER,
  BannerType.THIRD_BANNER
])

const isAuthenticated = computed(() => authStore.isAuthenticated)

const onClickLogin = () => {
    authStore.setSelectedAuthContainer(AuthContainerType.LOGIN)
};

const onClickRegister = () => {
    authStore.setSelectedAuthContainer(AuthContainerType.REGISTER)
};

const onClickAboutMe = () => {
  window.location.href = '/about-me';
};

const fullText = ref(props.content);
const displayText = ref(""); 
const typingSpeed = 30; 

let typingInterval: ReturnType<typeof setInterval> | null = null;

const startTyping = () => {
  if (typingInterval) clearInterval(typingInterval);
    fullText.value = props.content;
    displayText.value = "";
    let index = 0;

    typingInterval = setInterval(() => {
        if (index < fullText.value.length) {
            displayText.value += fullText.value[index];
            index++;
        } else {
            clearInterval(typingInterval!);
        }
    }, typingSpeed);
};

watch(locale, () => {
    if (typingInterval) clearInterval(typingInterval);
    displayText.value = props.content
})

if (process.client) {
    onMounted(() => {
        startTyping()
    });

    onBeforeUnmount(() => {
        if (typingInterval) clearInterval(typingInterval);
    });
}
</script>

<template>
    <!-- <div
        class="relative w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    > -->
    <div class="relative w-full h-screen snap-start bg-gradient-to-b from-[var(--color-background-first)] to-[var(--color-background-second)]">
        <div class="container h-full mx-auto flex flex-col items-center justify-center gap-y-8">
            <div class="w-full h-1/2 mx-auto flex flex-col justify-center md:h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                <h1 class="text-3xl lg:text-5xl text-center mb-4">
                    {{ title }}
                </h1>
                <p class="text-md sm:text-xl text-center">
                    {{ displayText }}
                </p>
                
                <div class="mt-4">
                    <button @click="onClickAboutMe()" type="submit" class="group bg-black text-white w-full rounded-lg hover:bg-gray-400 hover:text-black">
                        <icon
                            name="ic:sharp-search"
                            size="15"
                            class="text-white group-hover:text-black"
                        />
                        {{ t('learn_more_about_me') }}
                        <icon
                            name="material-symbols:account-circle"
                            size="15"
                            class="text-white group-hover:text-black"
                        />
                    </button>
                </div>

                <hr class="border-0 h-px my-5 bg-gradient-to-r from-transparent via-[var(--color-medium-gray)] to-transparent">
                <div
                    v-if="!isAuthenticated"
                    class="flex justify-center items-center gap-x-4"
                >
                    <ButtonBlock :onClick="onClickLogin">{{ t('login').toUpperCase() }}</ButtonBlock>
                    <span class="text-[var(--color-medium-gray)]">|</span>
                    <ButtonBlock :onClick="onClickRegister">{{ t('register').toUpperCase() }}</ButtonBlock>
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
                :class="activeBanner === BannerType.FIRST_BANNER
                    ? 'opacity-100 translate-x-0 visible'
                    : 'opacity-0 translate-x-10 invisible'"
            />
        </div>
    </div>
</template>