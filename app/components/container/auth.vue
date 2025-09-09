<script lang="ts" setup>
import { AuthContainerType } from '~/enums/enum'
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

const clearContainer = () => {
  authStore.clearSelectedAuthContainer()
}

</script>

<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div
      v-if="authStore.selectedAuthContainer !== null"
      class="fixed z-30 top-0 left-0 w-full h-full bg-black/60"
      @click="clearContainer"
    ></div>
  </Transition>

  <!-- Modal -->
  <Transition name="slide-up">
    <div
      v-if="authStore.selectedAuthContainer !== null"
      class="fixed z-31 left-[50%] translate-x-[-50%] bottom-0 md:bottom-[50%] md:translate-y-[50%] duration-300"
    >
      <ContainerLogin
        v-if="authStore.selectedAuthContainer === AuthContainerType.Login"
      />
      <ContainerRegister
        v-if="authStore.selectedAuthContainer === AuthContainerType.Register"
      />
    </div>
  </Transition>
</template>

<style scoped>
/* Fade overlay */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Slide modal */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translate(0%, 100%);
  opacity: 0;
}
</style>