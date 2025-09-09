<script lang="ts" setup>

export interface Props {
  show: boolean
  onClosePanel: () => void
}

const { onClosePanel } = defineProps<Props>()

const handleMouseLeave = () => {
    onClosePanel()
}

const handleLoginClick = () => {
}

const handleRegisterClick = () => {
}

const handleLogoutClick = () => {

}

</script>

<template>
  <!-- TODO: Right Panel  -->
  <div
    class="fixed z-20 w-[300px] h-full bg-gradient-to-b from-[var(--color-light-gray)] to-[var(--color-dark-gray)] py-6 pr-4 pl-8 duration-300"
    :class="show ? 'top-0 right-0 opacity-100' : 'top-[-300px] right-[-300px] opacity-0'"
    :style="{ clipPath: 'circle(50% at 100% 0%)' }"
    id="right-panel"
  >
    <div class="flex justify-end mb-6">
      <div class="flex justify-center items-center size-8 hover:cursor-pointer" @click="onClosePanel">
        <Icon
          name="material-symbols:close-small-rounded"
          style="color: gray"
          size="30"
        />
      </div>
    </div>
  </div>
</template>
