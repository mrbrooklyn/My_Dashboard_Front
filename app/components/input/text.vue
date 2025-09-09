<script setup lang="ts">

const props = defineProps<{
  name: string
  type: string
  placeHolder?: string
  value: string
  onChange: (name: string, value: string, e: Event) => void
  iconName?: string
  disabled?: boolean
  errorText?: string
}>()

const showPassword = ref(false)

const handleToggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const handleInputChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  props.onChange(input.name, input.value, e)
}

const haveIcon = computed(() => !!props.iconName)

const inputType = computed(() => {
  if (props.type === 'password' && showPassword.value) {
    return 'text'
  }
  return props.type
})
</script>

<template>
  <div class="relative">
    <input
      :name="props.name"
      :class="`bg-white focus:outline-none text-black focus:shadow-outline border border-gray-300 rounded-lg py-2 block w-full appearance-none leading-normal ${haveIcon ? 'pl-9' : 'pl-4'} ${props.disabled ? 'bg-slate-200 text-slate-400 pointer-events-none' : ''} ${props.type === 'password' ? 'pr-8' : 'pr-4'}`"
      :type="inputType"
      :placeholder="props.placeHolder"
      :value="props.value"
      @input="handleInputChange"
      :disabled="props.disabled"
    />

    <div class="h-5 text-red-600 text-sm mt-1">
      {{ props.errorText }}
    </div>

    <div v-if="haveIcon" class="absolute top-[12px] left-[10px] size-4">
      <Icon :name="props.iconName ?? ''" style="color: gray" size="20"/>
    </div>

    <div
      v-if="props.type === 'password'"
      class="absolute top-[12px] right-[10px] size-4 hover:cursor-pointer"
      @click="handleToggleShowPassword"
    >
      <Icon v-if="showPassword" name="ic:baseline-visibility" style="color: gray" size="15"/>
      <Icon v-else name="ic:baseline-visibility-off" style="color: gray" size="15"/>
    </div>
  </div>
</template>
