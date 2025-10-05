<script setup lang="ts">
import Logo from '~/assets/general/images/logo.svg'
import { handleScrollTo } from '~/composables/utility/handle-scroll'
import { BannerType } from '~/enums';
import { useRoute, useRouter } from 'vue-router'
import { AuthContainerType } from '~/enums'
import { useAuthStore } from '~/store/auth'
import { useGlobalStore } from '~/store/global'
import { useI18n } from 'vue-i18n'
import { useNuxtApp } from "#app";

const nuxtApp = useNuxtApp();
const authStore = useAuthStore()
const globalStore = useGlobalStore()

export interface Props {
  onHamburgerClick: () => void
}

const { onHamburgerClick } = defineProps<Props>()

const $setLanguage = nuxtApp.$i18n as (lang: "en" | "th") => Promise<any>;
const { t, locale } = useI18n()
const onRender = ref<boolean>(false)

const switchToThai = () => {
  $setLanguage("th");
}

const switchToEnglish = () => {
  $setLanguage("en");
}

const router = useRouter()
const route = useRoute()

const isAuthenticated = computed(() => authStore.isAuthenticated)
const isLoading = computed(() => globalStore.isLoading)

const handleLoginClick = () => {
  authStore.setSelectedAuthContainer(AuthContainerType.LOGIN)
}

const handleRegisterClick = () => {
  authStore.setSelectedAuthContainer(AuthContainerType.REGISTER)  
}

const handleClick = async () => {
  const isHomePath = route.path === '/'
  if (isHomePath) {
    handleScrollTo(BannerType.FIRST_BANNER)
  } else {
    router.push(`/#${BannerType.FIRST_BANNER}`)
  }
}

onMounted(() => {
  onRender.value = true
})
</script>

<template>
  <div
    class="fixed top-0 left-0 z-20 w-full h-[60px] flex justify-between items-center bg-white opacity-60 pl-2 pr-5 py-4 lg:pl-4 lg:pr-6 lg:py-5"
  >
    <div class="w-36 h-5 hover:cursor-pointer flex items-center" @click="handleClick">
      <img class="w-30 h-10 object-contain" alt="my-dashboard" :src="Logo"/>
    </div>
    <div class="flex gap-x-3 items-center">
      <template v-if="isLoading || !onRender">
        <Skeleton class="h-5 w-[100px]" />
        <Skeleton class="h-5 w-[100px]" />
        <Skeleton class="h-5 w-[30px]" />
      </template>
      <template v-else>
        <div v-if="!isAuthenticated" class="flex gap-2 mr-3">
          <button
            class="text-sm rounded border"
            :class="locale === 'th' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'"
            @click="switchToThai"
          >
            TH
          </button>
          <button
            class="text-sm rounded border"
            :class="locale === 'en' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'"
            @click="switchToEnglish"
          >
            EN
          </button>
        </div>
        <div v-if="!isAuthenticated" class="hidden sm:block">
          <ButtonMenu
            iconName="stash:signin"
            className="h-8"
            :onClick="handleLoginClick"
          >
            {{ t('login') }}
          </ButtonMenu>
        </div>
        <div v-if="!isAuthenticated" class="hidden sm:block">
          <ButtonMenu
            iconName="material-symbols:person-add-outline"
            className="h-8"
            :onClick="handleRegisterClick"
          >
            {{ t('register') }}
          </ButtonMenu>
        </div>

        <div v-if="isAuthenticated" class="text-right text-xs sm:text-sm lg:text-lg">
            <p>{{ authStore.userProfile?.first_name }} {{ authStore.userProfile?.last_name }} </p>
        </div>
        <div v-if="isAuthenticated" class="flex justify-center hover:cursor-pointer" @click="onHamburgerClick">
          <Icon name="solar:hamburger-menu-linear" class="text-black hover:text-gray-600" size="30"/>
        </div>
      </template>
    </div>
  </div>
</template>