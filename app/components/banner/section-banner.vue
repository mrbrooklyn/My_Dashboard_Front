<template>
    <div
        class="w-full h-screen bg-no-repeat bg-center bg-cover snap-start"
        :style="{ backgroundImage: `url(${BannerUrl})` }"
    >
        this is section banner
    </div>

</template>

<script setup lang="ts">
import BannerUrl from '~/assets/desktop/images/banner/banner-02.png'

export interface Props {
    // title: string
    // content: string
}
defineProps<Props>()
</script>