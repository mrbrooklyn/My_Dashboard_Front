<script setup lang="ts">
import 'vue3-toastify/dist/index.css'
import { onMounted, ref } from "vue"
import { toastContainers } from 'vue3-toastify'
import { useAuthStore } from '~/store/auth'
import { useAuthService } from '~/composables/services/use-auth'

const authStore = useAuthStore()
const authService = useAuthService();

onMounted(async () => {
  if(!authStore.isAuthenticated && localStorage.getItem("access_token")) {
    await authService.profile()
  }
})
</script>

<template>
  <toastContainers />
  <div class="w-full h-screen">
    <NuxtPage />
  </div>

  <ContainerAuth />
</template>
