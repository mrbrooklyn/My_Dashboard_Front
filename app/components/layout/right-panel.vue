<script lang="ts" setup>
import { useAuthStore } from "~/store/auth";
import { toast } from "vue3-toastify";
import { toastConfig } from "~/config";

const authStore = useAuthStore();

export interface Props {
  show: boolean
  onClosePanel: () => void
  onChagePanel: (data: boolean) => void
}

const prop= defineProps<Props>()

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
    class="fixed z-30 w-screen max-w-[400px] h-full bg-gradient-to-b from-[var(--color-light-gray)] to-[var(--color-lavender-gray)] py-6 pr-4 pl-8 duration-300"
    :class="show ? 'top-0 right-0 opacity-100' : 'top-[-400px] right-[-400px] opacity-0'"
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

      <ButtonMenu
        iconName="material-symbols:person-edit-outline"
        className="h-12"
        :onClick="handleEditProfileClick"
      >
        Edit Profile
      </ButtonMenu>

      <ButtonMenu
        iconName="mdi:logout"
        className="h-12"
        :onClick="handleLogoutClick"
      >
        Logout
      </ButtonMenu>
    </div>
  </div>
</template>
