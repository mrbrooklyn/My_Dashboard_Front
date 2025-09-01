<script setup lang="ts">
export interface Props {
  value: string
  onClick: (v: string) => void
  active?: boolean
}
defineProps<Props>()
</script>

<template>
  <div
    class="px-3 py-1.5 text-[var(--color-dark-gray)] hover:cursor-pointer hover:shadow-md first:rounded-l-2xl last:rounded-r-2xl transition"
    :class="active ? 'bg-[var(--color-dark-gray)]/10 font-semibold' : 'bg-white/60 '"
    @click="onClick(value)"
  >
    <slot></slot>
  </div>
</template>
