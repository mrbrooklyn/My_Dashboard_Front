<script setup lang="ts">
export interface Props {
  className?: string
  onClick?: () => void
}

const props = defineProps<Props>()
</script>

<template>
  <button
    :class="[
      'px-4 py-2 rounded-lg duration-200',
      props.className || 'text-gray-900 bg-white/40 hover:bg-gray-200'
    ]"
    @click="props.onClick"
  >
    <slot></slot>
  </button>
</template>
