<script setup lang="ts">
import BannerTabMenu from './banner-tab-menu.vue';
import type { IBannerTabMenu } from '~/types/banner';
import { handleScrollTo } from '~/composables/utility/handle-scroll'

export interface Props {
    menus: IBannerTabMenu[]
    activeBanner: string
}
defineProps<Props>()
</script>

<template>
    <div class="absolute top-20 w-full flex justify-center">
        <div class="flex">
            <BannerTabMenu v-for="(menu) in menus" :value="menu.value" :onClick="handleScrollTo" :active="menu.value === activeBanner">
                {{ menu.text }}
            </BannerTabMenu>
        </div>
    </div>
</template>