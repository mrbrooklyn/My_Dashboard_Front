<script setup lang="ts">
import LogoText from '~/assets/general/images/logo.svg'
</script>

<template>
  <div class="absolute w-full h-[60px] px-2 py-4 flex justify-between items-center bg-white opacity-60 lg:px-4 lg:py-5">
    <div class="w-30 h-10">
      <img class="w-full h-full object-contain" :src="LogoText"/>
    </div>
  </div>
</template>