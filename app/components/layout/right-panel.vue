<script lang="ts" setup>
import { useAuthStore } from "~/store/auth";
import { toast } from "vue3-toastify";
import { toastConfig } from "~/config";
import { useI18n } from 'vue-i18n'

const authStore = useAuthStore();

export interface Props {
  show: boolean
  onClosePanel: () => void
  onChagePanel: (data: boolean) => void
}

const prop= defineProps<Props>()

const { t, locale } = useI18n()

const switchToThai = () => {
  locale.value = 'th'
}

const switchToEnglish = () => {
  locale.value = 'en'
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
    class="fixed z-30 w-screen max-w-[900px] h-full bg-gradient-to-b from-[var(--color-light-gray)] to-[var(--color-lavender-gray)] py-6 pr-4 pl-8 duration-300"
    :class="show ? 'top-0 right-0 opacity-100' : 'top-[-500px] right-[-400px] opacity-0'"
    :style="{ clipPath: 'circle(50% at 100% 0%)' }"
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

      <div class="flex gap-2 mr-3">
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

      <ButtonMenu
        iconName="material-symbols:person-edit-outline"
        className="h-12"
        :onClick="handleEditProfileClick"
      >
        {{ t('edit_profile') }}
      </ButtonMenu>

      <ButtonMenu
        iconName="mdi:logout"
        className="h-12"
        :onClick="handleLogoutClick"
      >
        {{ t('logout') }}
      </ButtonMenu>
    </div>
  </div>
</template>
