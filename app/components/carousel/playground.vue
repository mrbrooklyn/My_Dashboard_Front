<script setup lang="ts">
import { ref } from "vue";
import type { ICarouselType } from '~/types/carousel'
import { useRouter } from "vue-router";
import { CarouselState } from "~/enums";
import { carouselConfig } from "~/config"

export interface Props {
  slides: ICarouselType[]
}

const props = defineProps<Props>()

const current = ref(0);
const total = props.slides.length;
const router = useRouter();

const next = () => {
  current.value = (current.value + 1) % total;
  startAutoScroll();
};
const prev = () => {
  current.value = (current.value - 1 + total) % total;
  startAutoScroll();
};

const getPosition = (index: number) => {
  if (index === current.value) return CarouselState.ACTIVE;
  if (index === (current.value - 1 + total) % total) return CarouselState.PREV;
  if (index === (current.value + 1) % total) return CarouselState.NEXT;
  return CarouselState.HIDDEN;
};

const handleClick = (index: number, path?: string) => {
  const pos = getPosition(index);

  if (pos === CarouselState.ACTIVE && path) {
    router.push(path);
  } else if (pos === CarouselState.PREV) {
    prev();
  } else if (pos === CarouselState.NEXT) {
    next();
  }
};

const getTransform = (index: number) => {
  const pos = getPosition(index);
  if (pos === CarouselState.ACTIVE) return "translateX(0%) scale(1)";
  if (pos === CarouselState.PREV) return "translateX(-40%) scale(0.5)";
  if (pos === CarouselState.NEXT) return "translateX(40%) scale(0.5)";
  return "translateX(0%) scale(0.75)";
};

const getZIndex = (index: number) => {
  const pos = getPosition(index);
  if (pos === CarouselState.ACTIVE) return 11;
  if (pos === CarouselState.PREV || pos === CarouselState.NEXT) return 10;
  return 0;
};

let autoScroll: ReturnType<typeof setInterval> | null = null

const startAutoScroll = () => {
  stopAutoScroll()
  autoScroll = setInterval(next, carouselConfig.interval)
}
const stopAutoScroll = () => {
  if (autoScroll) clearInterval(autoScroll)
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
})
</script>

<template>
  <div class="relative w-full sm:w-[80%] overflow-hidden h-60 sm:h-50 md:h-65 lg:h-80 xl:h-110 mx-auto z-21">
    <div class="relative flex justify-center h-full w-full">
      <div
        v-for="(slide, index) in props.slides"
        :key="index"
        class="absolute w-full sm:w-4/6 h-full rounded-none sm:rounded-xl overflow-hidden cursor-pointer transition-transform ease-in-out"
        :class="getPosition(index) === CarouselState.HIDDEN ? 'opacity-0 pointer-events-none' : (getPosition(index) === CarouselState.ACTIVE ? 'opacity-100' : 'opacity-70')"
        :style="{
          transitionDuration: carouselConfig.duration + 'ms',
          transform: getTransform(index),
          zIndex: getZIndex(index),
        }"
        @click="handleClick(index, slide.path)"
      >
        <img
          :src="slide.image"
          :alt="slide.text"
          class="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />
      </div>
    </div>

    <button
      @click="prev"
      class="absolute left-0 sm:left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-none sm:rounded-full h-full sm:h-10 bg-white/50 hover:bg-white/80 shadow z-22"
    >
      <Icon name="material-symbols:chevron-left-rounded" class="text-[var(--color-dark-gray)] size-6" />
    </button>

    <button
      @click="next"
      class="absolute right-0 sm:right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-none sm:rounded-full h-full sm:h-10 bg-white/50 hover:bg-white/80 shadow z-22"
    >
      <Icon name="material-symbols:chevron-right-rounded" class="text-[var(--color-dark-gray)] size-6" />
    </button>

    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-white/50 p-2 rounded-full z-22">
      <div
        v-for="(slide, index) in props.slides"
        :key="index"
        @click="current = index"
        class="w-3 h-3 rounded-full cursor-pointer transition"
        :class="current === index ? 'bg-[var(--color-dark-brown)]' : 'bg-gray-300'"
      ></div>
    </div>
  </div>
</template>
