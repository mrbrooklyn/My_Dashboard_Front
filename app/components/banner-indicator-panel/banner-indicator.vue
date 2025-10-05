<script setup lang="ts">
import { computed } from 'vue'
import { BannerIndicatorState } from '~/enums'

export interface Props {
    value: string
    onClick: (v: string) => void
    indicatorState: BannerIndicatorState
}
const { indicatorState } = defineProps<Props>()

const position = computed(() => {
    let c: string
    switch (indicatorState) {
        case BannerIndicatorState.PAST:
            c = 'top-14'
            break;
        case BannerIndicatorState.COMING:
            c = '-top-14'
            break;
        case BannerIndicatorState.ACTIVE:
        default:
            c = 'top-0'
            break;
    }
    return c
})
</script>

<template>
    <div class="relative w-full h-14 bg-white/20 overflow-hidden hover:cursor-pointer border border-[var(--color-medium-gray)]/40 rounded-lg hover:shadow-lg transition"@click="onClick(value)">
        <div :class="`absolute w-full h-full bg-gradient-to-b from-[var(--color-dark-brown)] to-[var(--color-medium-brown)] ease-in-out duration-500 ${position}`"></div>
    </div>
</template>