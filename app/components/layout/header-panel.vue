<script setup lang="ts">
import LogoText from '~/assets/general/images/logo.svg'
import { handleScrollTo } from '~/composables/utility/handle-scroll'
import { BannerType } from '~/enums/enum';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isAuthenticated = computed(() => {
    return false
})

const handleLoginClick = () => {

}

const handleRegisterClick = () => {

}

const handleClick = async () => {
    const isHomePath = route.path === '/'
    if (isHomePath) {
        handleScrollTo(BannerType.FirstBanner)
    } else {
        router.push(`/#${BannerType.FirstBanner}`)
    }
}

const onHamburgerClick = async () => {

}

</script>

<template>
  <div
    class="fixed top-0 left-0 z-20 w-full h-[60px] px-2 py-4 flex justify-between items-center bg-white opacity-60 lg:px-4 lg:py-5"
  >
    <div class="w-36 h-5 hover:cursor-pointer flex items-center" @click="handleClick">
      <img class="w-30 h-10 object-contain" alt="my-dashboard" :src="LogoText"/>
    </div>
    <div class="flex gap-x-3 items-center">
      <div v-if="!isAuthenticated" class="hidden sm:block">
        <ButtonMenu
          iconName="stash:signin"
          className="h-8"
          :onClick="handleLoginClick"
        >
          Login
        </ButtonMenu>
      </div>
      <div v-if="!isAuthenticated" class="hidden sm:block">
        <ButtonMenu
          iconName="material-symbols:person-add-outline"
          className="h-8"
          :onClick="handleRegisterClick"
        >
          Register
        </ButtonMenu>
      </div>
      <div class="flex justify-center hover:cursor-pointer" @click="onHamburgerClick">
        <Icon name="solar:hamburger-menu-linear" style="color: black" size="30"/>
      </div>
    </div>
  </div>
</template>