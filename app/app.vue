<script setup lang="ts">
import 'vue3-toastify/dist/index.css'
import { onMounted, ref } from "vue"
import { toastContainers } from 'vue3-toastify'
import { useAuthStore } from '~/store/auth'
import { useAuthService } from '~/composables/services/use-auth'
import RightPanel from './components/layout/right-panel.vue';
import ProfilePanel from './components/layout/profile-panel.vue'

const authStore = useAuthStore()
const authService = useAuthService();
const showRightPanel = ref(false)
const showProfilePanel = ref(false)

const handleShowRightPanel = () => {
  showRightPanel.value = true
}

const handleCloseRightPanel = () => {
  showRightPanel.value = false
}

const handleShowProfilePanel = () => {
  showProfilePanel.value = true
}

const handleCloseProfilePanel = () => {
  showProfilePanel.value = false
}

const handleDefaultPanle = () => {
  showRightPanel.value = true
  showProfilePanel.value = false
}

onMounted(async () => {
  if(!authStore.isAuthenticated && localStorage.getItem("access_token")) {
    await authService.profile()
  }
})
</script>

<template>
  <toastContainers />
  <LayoutHeaderPanel :onHamburgerClick="handleShowRightPanel" />
  <RightPanel :show="showRightPanel" :onClosePanel="handleCloseRightPanel" :onChagePanel="handleShowProfilePanel" />
  <ProfilePanel :show="showProfilePanel" :onClosePanel="handleCloseProfilePanel" :onChagePanel="handleDefaultPanle" />
  <div class="w-full h-screen">
    <NuxtPage />
  </div>

  <ContainerAuth />
</template>
