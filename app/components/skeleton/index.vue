<script setup lang="ts">
import { computed } from "vue"

export interface SkeletonProps {
  as?: any
  class?: any
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  as: "div",
})

const ui = computed(() => {
  return [
    "animate-pulse bg-gray-200 rounded-xl",
    props.class,
  ].join(" ")
})
</script>

<template>
  <component
    :is="as"
    :class="ui"
  >
    <slot></slot>
  </component>
</template>

