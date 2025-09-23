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
  <div class="relative floating-input">
    <input
      :name="props.name"
      :class="`bg-white focus:outline-none text-black focus:shadow-outline border border-gray-300 rounded-lg py-2 block w-full appearance-none leading-normal ${haveIcon ? 'pl-9' : 'pl-4'} ${props.disabled ? 'bg-slate-200 text-slate-400 pointer-events-none' : ''} ${props.type === 'password' ? 'pr-8' : 'pr-4'}`"
      :type="inputType"
      :placeholder="''"
      :value="props.value"
      @input="handleInputChange"
      :disabled="props.disabled"
    />
    <label>{{ props.placeHolder }}</label>

    <div class="min-h-6 text-red-600 text-sm mt-1 break-words">
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

<style scoped>
.floating-input label {
  position: absolute;
  left: 40px;
  top: 10px;
  color: #aaa;
  font-size: 16px;
  pointer-events: none;
  transition: 0.2s ease all;
}

.floating-input input:focus + label,
.floating-input input:not(:placeholder-shown) + label {
  top: -8px;
  left: 8px;
  font-size: 12px;
  color: #555;
  background: white;
  border-radius: 6px;
  padding: 0 4px;
}
</style>