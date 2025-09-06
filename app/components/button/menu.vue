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
      'flex justify-center gap-x-2 items-center px-3 py-1.5 rounded-3xl border duration-300 text-[var(--color-dark-gray)] group hover:bg-[var(--color-dark-gray)] hover:text-white',
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
      class="text-[var(--color-dark-gray)] size-4 group-hover:text-white" 
    />
    <slot></slot>
  </button>
</template>
