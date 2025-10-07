<script lang="ts" setup>
import { useAuthStore } from "~/store/auth"
import { toast } from "vue3-toastify"
import { toastConfig, zIndex } from "~/config"
import { useI18n } from 'vue-i18n'
import { useNuxtApp } from "#app"

const nuxtApp = useNuxtApp();
const authStore = useAuthStore();

export interface Props {
  show: boolean
  onClosePanel: () => void
  onChagePanel: (data: boolean) => void
}

const prop= defineProps<Props>()

const $setLanguage = nuxtApp.$i18n as (lang: "en" | "th") => Promise<any>;
const { t, locale } = useI18n()

const switchToThai = () => {
  $setLanguage("th");
}

const switchToEnglish = () => {
  $setLanguage("en");
}

const handleMouseLeave = () => {
  prop.onClosePanel()
}

const handleEditProfileClick = () => {
  prop.onChagePanel(true)
}

const handleLogoutClick = () => {
  // toast.success("Logout.", toastConfig)
  authStore.logout()
  prop.onClosePanel()
}

</script>

<template>
  <div
    @mouseleave="handleMouseLeave"
    class="fixed w-screen max-w-[900px] h-full bg-gradient-to-b from-[var(--color-light-gray)] to-[var(--color-lavender-gray)] py-6 pr-4 pl-8 duration-300"
    :class="show ? 'top-0 right-0 opacity-100' : 'top-[-500px] right-[-400px] opacity-0'"
    :style="{ clipPath: 'circle(50% at 100% 0%)', zIndex: zIndex.rightPanel }"
    id="right-panel"
  >
    <div class="flex flex-col items-end gap-4">
      <div class="flex justify-center items-center size-8 hover:cursor-pointer" @click="onClosePanel">
        <Icon
          name="material-symbols:close-small-rounded"
          class="text-black hover:text-gray-400"
          size="30"
        />
      </div>

      <div class="flex gap-2 mr-3" v-if="prop.show">
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

      <div class="flex flex-col items-end gap-3 mt-5">
        <ButtonList
          iconName="material-symbols:person-edit-outline"
          :onClick="handleEditProfileClick"
        >
          {{ t('edit_profile') }}
        </ButtonList>

        <ButtonList
          iconName="mdi:logout"
          :onClick="handleLogoutClick"
        >
          {{ t('logout') }}
        </ButtonList>
      </div>
    </div>
  </div>
</template>
