<script setup lang="ts">
export interface Props {
  className?: string
  iconName?: string
  fullWidth?: boolean
  disabled?: boolean
  onClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  fullWidth: false,
  disabled: false
})
</script>

<template>
  <button
    :class="[
      'flex justify-center items-center h-6 duration-300 text-[var(--color-dark-gray)] group hover:underline hover:text-[var(--color-dark-gray)]/30',
      props.fullWidth ? 'w-full' : '',
      props.disabled ? 'bg-slate-600 text-slate-300 pointer-events-none' : '',
      props.className || ''
    ]"
    @click="props.onClick"
    :disabled="props.disabled"
  >
    <Icon 
      v-if="props.iconName" 
      :name="props.iconName" 
      class="text-[var(--color-dark-gray)] duration-300 size-4 group-hover:text-[var(--color-dark-gray)]/30" 
    />
    <slot></slot>
  </button>
</template>
