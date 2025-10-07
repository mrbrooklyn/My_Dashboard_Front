<script setup lang="ts">
import { ref } from "vue";
import type { ICarouselType } from '~/types/carousel'
import { useRouter } from "vue-router"
import { CarouselState, AuthContainerType } from "~/enums"
import { carouselConfig, zIndex } from "~/config"
import { useAuthStore } from '~/store/auth'

export interface Props {
  slides: ICarouselType[]
}

const props = defineProps<Props>()

const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)

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
    if(!isAuthenticated.value) {
      authStore.setSelectedAuthContainer(AuthContainerType.LOGIN)
      return
    }
    
    window.location.href = path;
    //router.push(path);
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
  if (pos === CarouselState.ACTIVE) return zIndex.base + 1;
  if (pos === CarouselState.PREV || pos === CarouselState.NEXT) return zIndex.base;
  return 0;
};

const onClickLogin = () => {
    authStore.setSelectedAuthContainer(AuthContainerType.LOGIN)
};

const onClickRegister = () => {
    authStore.setSelectedAuthContainer(AuthContainerType.REGISTER)
};

let autoScroll: ReturnType<typeof setInterval> | null = null

const startAutoScroll = () => {
  stopAutoScroll()
  autoScroll = setInterval(next, carouselConfig.interval)
}
const stopAutoScroll = () => {
  if (autoScroll) clearInterval(autoScroll)
}

if (process.client) {
  onMounted(() => {
    startAutoScroll()
  })

  onBeforeUnmount(() => {
    stopAutoScroll()
  })
}
</script>

<template>
  <div class="relative w-full sm:w-[80%] overflow-hidden h-60 sm:h-50 md:h-65 lg:h-80 xl:h-120 mx-auto" :style="{ zIndex: zIndex.carouselComponent }">
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
        <div
          v-if="!isAuthenticated"
          class="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 text-white"
          :style="{ zIndex: zIndex.carouselComponent + 1 }"
        >
          <button 
            class="border-2 border-white font-bold rounded-full shadow-lg hover:bg-white/60 hover:text-black/70 transition duration-300" 
            @click.stop="onClickLogin()"
          >
            Sign in
          </button>
          or
          <button 
            class="border-2 border-white font-bold rounded-full shadow-lg hover:bg-white/60 hover:text-black/70 transition duration-300" 
            @click.stop="onClickRegister()"
          >
            Sign up
          </button>
        </div>
        
        <img
          :src="slide.image"
          :alt="slide.text"
          class="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />
      </div>
    </div>

    <button
      @click="prev"
      class="absolute left-0 sm:left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-none sm:rounded-full h-full sm:h-10 shadow bg-white/10 hover:bg-white/30 sm:bg-white/50 sm:hover:bg-white/80"
      :style="{ zIndex: zIndex.carouselComponent }"
    >
      <Icon name="material-symbols:chevron-left-rounded" class="text-[var(--color-dark-gray)]" size="20" />
    </button>

    <button
      @click="next"
      class="absolute right-0 sm:right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-none sm:rounded-full h-full sm:h-10 shadow bg-white/10 hover:bg-white/30 sm:bg-white/50 sm:hover:bg-white/80"
      :style="{ zIndex: zIndex.carouselComponent }"
    >
      <Icon name="material-symbols:chevron-right-rounded" class="text-[var(--color-dark-gray)]" size="20" />
    </button>

    <div
      class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/50 p-2 rounded-full"
      :style="{ zIndex: zIndex.carouselComponent }"
    >
      <div
        v-for="(slide, index) in props.slides"
        :key="index"
        @click="current = index"
        class="rounded-full cursor-pointer transition-all"
        :class="[current === index ? 'bg-[var(--color-dark-gray)]/60 w-3 h-3' : 'bg-gray-400 w-2 h-2']"
      ></div>
    </div>
  </div>
</template>
