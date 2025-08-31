<script setup lang="ts">
import BannerUrl from '~/assets/general/images/banner/banner-01.png'

export interface Props {
    // title: string
    // content: string
}
defineProps<Props>()
</script>

<template>
    <div
        class="w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        this is home banner 
    </div>

</template>