<script setup lang="ts">
import 'vue3-toastify/dist/index.css'
import { onMounted } from "vue"
import { toastContainers } from 'vue3-toastify'
import { useAuthStore } from '~/store/auth'
import { useAuthService } from '~/composables/services/use-auth'
import RightPanel from './components/layout/right-panel.vue';

const authStore = useAuthStore()
const authService = useAuthService();
const showRightPanel = ref(false)

const handleShowRightPanel = () => {
    showRightPanel.value = true
}

const handleCloseRightPanel = () => {
    showRightPanel.value = false
}

onMounted(async () => {
  if(!authStore.isAuthenticated && localStorage.getItem("access_token")) {
    await authService.me()
  }
})
</script>

<template>
  <toastContainers />
  <LayoutHeaderPanel :onHamburgerClick="handleShowRightPanel" />
  <RightPanel :show="showRightPanel" :onClosePanel="handleCloseRightPanel" />
  <div class="w-full h-screen">
    <NuxtPage />
  </div>

  <ContainerAuth />
</template>
