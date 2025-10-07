<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-03.png'
import Decor01 from '~/assets/general/images/contact/contact-decor-01.png'
import Decor02 from '~/assets/general/images/contact/contact-decor-06.png'
import Decor03 from '~/assets/general/images/contact/contact-decor-07.png'
import Decor04 from '~/assets/general/images/contact/contact-decor-08.png'
import Decor05 from '~/assets/general/images/contact/contact-decor-09.png'
import Decor10 from '~/assets/general/images/contact/contact-decor-10-1.png'
import Decor11 from '~/assets/general/images/contact/contact-decor-11.png'
import { toast } from 'vue3-toastify'
import { toastConfig } from "~/config";
import { BannerType, HomeContactState } from '~/enums'
import { useBannerObserver } from '~/composables/utility/observer'
import { bannerAnimation, zIndex } from '~/config'
import type { IContactType } from '~/types/home'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

export interface Props {
    contactList: IContactType[]
}

const props = defineProps<Props>()

const contactList = props.contactList ?? []

const { activeBanner } = useBannerObserver([
  BannerType.FIRST_BANNER,
  BannerType.SECOND_BANNER,
  BannerType.THIRD_BANNER
])

const copyToClipboard = (text: string) => {
     navigator.clipboard.writeText(text)
    .then(() => {
        toast.success(`${t('copied')}: ${text}`, toastConfig)
    })
    .catch(() => {
        toast.error(`${t('copy')} ${t('failed')}!`, toastConfig)
    })
}
</script>

<template>
    <div
        class="relative w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        <!-- Contact Card -->
        <div class="container h-full mx-auto flex flex-col items-center justify-center gap-y-8 relative" :style="{ zIndex: zIndex.base }">
            <div class="w-full max-w-lg mx-auto bg-[var(--color-custom-gray)]/50 p-10 rounded space-y-5">
                <div v-for="(item, i) in contactList" :key="i" class="list-disc list-inside text-md text-[var(--color-medium-gray)]">
                    <div 
                        v-if="item.type === HomeContactState.TEXT"
                        @click="copyToClipboard(item.value)" 
                        class="flex items-center gap-x-5 group cursor-pointer"
                    >
                        <img :src="item.image" class="w-6 h-6"/>
                        <p>{{ item.display }}</p>
                        <icon name="material-symbols:content-copy" size="20" class="text-[var(--color-dark-gray)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <a 
                        v-if="item.type === HomeContactState.LINK"
                        :href="item.value" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-5 group hover:underline"
                    >
                        <img :src="item.image" class="w-6 h-6"/>
                        <p>{{ item.display }}</p>
                        <icon name="material-symbols:open-in-new" size="20" class="text-[var(--color-dark-gray)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Decoration -->
        <div class="absolute top-0 right-4 h-full grid grid-cols-2 gap-4 overflow-hidden pointer-events-none">
            <div class="flex items-end justify-end mr-10">
                <img 
                    :src="Decor02" 
                    alt="Contact-Decoration-02"
                    class="w-32 h-auto shadow-md"
                    :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                    :class="activeBanner === BannerType.THIRD_BANNER
                        ? 'opacity-0 sm:opacity-30 lg:opacity-100 translate-x-10 visible'
                        : 'opacity-0 translate-x-0 invisible'"
                />
            </div>
            <div class="flex items-end justify-start mr-10">
                <img 
                    :src="Decor03" 
                    alt="Contact-Decoration-03"
                    class="w-40 h-auto shadow-md mb-10" 
                    :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                    :class="activeBanner === BannerType.THIRD_BANNER
                        ? 'opacity-0 sm:opacity-30 lg:opacity-100 translate-y-10 visible'
                        : 'opacity-0 translate-y-0 invisible'"
                />
            </div>
            <div class="row-span-2 ml-10">
                <img 
                    :src="Decor04" 
                    alt="Contact-Decoration-04"
                    class="w-48 h-auto shadow-md" 
                    :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                    :class="activeBanner === BannerType.THIRD_BANNER
                        ? 'opacity-0 sm:opacity-30 lg:opacity-100 translate-y-0 visible'
                        : 'opacity-0 translate-y-10 invisible'"
                />
            </div>
            <div class="row-span-2">
                <img 
                    :src="Decor05" 
                    alt="Contact-Decoration-05" 
                    class="w-28 h-auto shadow-md" 
                    :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                    :class="activeBanner === BannerType.THIRD_BANNER
                        ? 'opacity-0 sm:opacity-30 lg:opacity-100 translate-x-0 visible'
                        : 'opacity-0 translate-x-10 invisible'"
                />
            </div>
        </div>

        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[30%] overflow-hidden pointer-events-none">
            <img
                :src="Decor01"
                alt="Contact-Decoration-01"
                class="w-full h-full"
                :style="{ transitionDuration: bannerAnimation.duration + 'ms' }"
                :class="activeBanner === BannerType.THIRD_BANNER
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
                :class="activeBanner === BannerType.THIRD_BANNER
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
                :class="activeBanner === BannerType.THIRD_BANNER
                    ? 'opacity-0 sm:opacity-30 lg:opacity-100 translate-y-0 visible'
                    : 'opacity-0 translate-y-0 invisible'"
            />
        </div>

    </div>
</template>