<script lang="ts" setup>
import { useAuthStore } from "~/store/auth";
import { toast } from "vue3-toastify";
import { toastConfig } from "~/config";
import { ref } from 'vue'

const authStore = useAuthStore();

export interface Props {
  show: boolean
  onClosePanel: () => void
  onChagePanel: () => void
}

const prop= defineProps<Props>()

const handleMouseLeave = () => {
  prop.onClosePanel()
}

</script>

<template>
  <div
    @mouseleave="handleMouseLeave"
    class="fixed z-30 w-screen max-w-[300px] h-full flex flex-col bg-gradient-to-b from-[var(--color-light-gray)] to-[var(--color-medium-gray)] pt-6 duration-300"
    :class="show ? 'right-0 opacity-100' : 'right-[-300px] opacity-0'"
    id="right-panel"
  >
    <div class="flex justify-between items-center pr-4 pl-4  gap-4">
      <div class="flex justify-center items-center size-8 hover:cursor-pointer" @click="onChagePanel">
        <Icon
          name="material-symbols:arrow-back-ios-rounded"
          class="text-black hover:text-gray-400"
          size="20"
        />
      </div>

      <div class="flex-1 text-center font-semibold text-gray-700">
        Edit Profile
      </div>
      
      <div class="flex justify-center items-center size-8 hover:cursor-pointer" @click="onClosePanel">
        <Icon
          name="material-symbols:close-small-rounded"
          class="text-black hover:text-gray-400"
          size="30"
        />
      </div>
    </div>

    <hr class="border-0 h-px my-5 bg-gradient-to-r from-transparent via-[var(--color-medium-gray)] to-transparent my-2">

    <div class="flex-1 overflow-y-auto w-full pr-4 pl-4 ">
      <div class="flex flex-col">
        <InputText
          name="email"
          type="text"
          placeHolder="Email"
          iconName="material-symbols:mail-outline-rounded"
          :value="''"
          :onChange="() => {}"
          :errorText="''"
        />
        <InputText
          name="first_name"
          type="text"
          placeHolder="First Name"
          iconName="material-symbols:person-2-rounded"
          :value="''"
          :onChange="() => {}"
          :errorText="''"
        />
        <InputText
          name="last_name"
          type="text"
          placeHolder="Last Name"
          iconName="material-symbols:person-2-rounded"
          :value="''"
          :onChange="() => {}"
          :errorText="''"
        />
        <InputText
          name="phone"
          type="number"
          placeHolder="Phone"
          iconName="material-symbols:call-outline-rounded"
          :value="''"
          :onChange="() => {}"
          :errorText="''"
        />
      </div>

      <button type="submit" class="bg-black text-white w-full rounded-lg hover:bg-gray-300 hover:text-black">Save Change</button>

      <hr class="border-0 h-px my-5 bg-gradient-to-r from-transparent via-white to-transparent my-8">

      <InputText
        name="old_password"
        type="password"
        placeHolder="Old Password"
        iconName="material-symbols:key"
        :value="''"
        :onChange="() => {}"
        :errorText="''"
      />
      <InputText
        name="password"
        type="password"
        placeHolder="Password"
        iconName="material-symbols:key"
        :value="''"
        :onChange="() => {}"
        :errorText="''"
      />
      <InputText
        name="confirm_password"
        type="password"
        placeHolder="Confirm Password"
        iconName="material-symbols:key"
        :value="''"
        :onChange="() => {}"
        :errorText="''"
      />

      <button type="submit" class="bg-black text-white w-full rounded-lg hover:bg-gray-300 hover:text-black">Change Password</button>

    </div>
  </div>
</template>
