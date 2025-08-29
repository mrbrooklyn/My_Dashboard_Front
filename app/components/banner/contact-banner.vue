<template>
    <div
        class="w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        this is contact banner
    </div>

</template>

<script setup lang="ts">
import BannerUrl from '~/assets/desktop/images/banner/banner-03.png'

export interface Props {
    // title: string
    // content: string
}
defineProps<Props>()
</script>