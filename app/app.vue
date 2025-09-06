<script setup lang="ts">
import { toastContainers } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
</script>

<template>
  <toastContainers />
  <div class="w-full h-screen">
    <LayoutHeaderPanel />
    <div class="w-full h-full overflow-y-auto">
      <NuxtPage />
    </div>
  </div>
</template>
