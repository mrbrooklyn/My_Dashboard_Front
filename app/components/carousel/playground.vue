<script setup lang="ts">
import { ref } from "vue";
import type { ICarouselType } from '~/types/carousel'
import { useRouter } from "vue-router";

export interface Props {
  slides: ICarouselType[]
}

const props = defineProps<Props>()

const current = ref(0);
const total = props.slides.length;
const router = useRouter();

const next = () => {
  current.value = (current.value + 1) % total;
};
const prev = () => {
  current.value = (current.value - 1 + total) % total;
};

const getPosition = (index: number) => {
  if (index === current.value) return "active";
  if (index === (current.value - 1 + total) % total) return "prev";
  if (index === (current.value + 1) % total) return "next";
  return "hidden";
};

const handleClick = (index: number, path?: string) => {
  if (index === current.value && path) {
    router.push(path);
  }
};

const getTransform = (index: number) => {
  const pos = getPosition(index);
  if (pos === "active") return "translateX(0%) scale(1)";
  if (pos === "prev") return "translateX(-40%) scale(0.5)";
  if (pos === "next") return "translateX(40%) scale(0.5)";
  return "translateX(0%) scale(0.75)";
};

const getZIndex = (index: number) => {
  const pos = getPosition(index);
  if (pos === "active") return 11;
  if (pos === "prev" || pos === "next") return 10;
  return 0;
};

// let autoScroll: ReturnType<typeof setInterval> | null = null

// const startAutoScroll = () => {
//   stopAutoScroll()
//   autoScroll = setInterval(next, 5000)
// }
// const stopAutoScroll = () => {
//   if (autoScroll) clearInterval(autoScroll)
// }

// onMounted(() => {
//   startAutoScroll()
// })

// onBeforeUnmount(() => {
//   stopAutoScroll()
// })
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-xl h-110 flex items-center justify-center">
    <div class="relative flex items-center justify-center h-full w-full">
      <div
        v-for="(slide, index) in props.slides"
        :key="index"
        class="absolute w-4/6 h-full rounded-xl overflow-hidden cursor-pointer transition-transform duration-700 ease-in-out"
        :class="getPosition(index) === 'hidden' ? 'opacity-0 pointer-events-none' : (getPosition(index) === 'active' ? 'opacity-100' : 'opacity-70')"
        :style="{
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
      class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white/50 hover:bg-white/80 shadow z-12"
    >
      <Icon name="material-symbols:chevron-left-rounded" class="text-[var(--color-dark-gray)] size-6" />
    </button>

    <button
      @click="next"
      class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white/50 hover:bg-white/80 shadow z-12"
    >
      <Icon name="material-symbols:chevron-right-rounded" class="text-[var(--color-dark-gray)] size-6" />
    </button>

    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-white/50 p-2 rounded-full z-12">
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
