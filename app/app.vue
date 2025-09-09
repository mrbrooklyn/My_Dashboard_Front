<script setup lang="ts">
import { toastContainers } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import RightPanel from './components/layout/right-panel.vue';

const showRightPanel = ref(false)

const handleShowRightPanel = () => {
    showRightPanel.value = true
}

const handleCloseRightPanel = () => {
    showRightPanel.value = false
}

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
