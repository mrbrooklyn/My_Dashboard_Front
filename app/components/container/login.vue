<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { LoginForm } from '~/types/auth'
import { AuthContainerType } from '~/enums'
import { useAuthStore } from '~/store/auth'
import { useAuthService } from '~/composables/services/use-auth'
import { toast } from "vue3-toastify";
import { toastConfig } from "~/config";

const authStore = useAuthStore()
const authService = useAuthService();

const handleHideAuthContainer = () => { 
    authStore.clearSelectedAuthContainer()
}

const handleShowRegisterContainer = () => {
    authStore.setSelectedAuthContainer(AuthContainerType.Register)
}

const form = reactive<LoginForm>({
  email: '',
  password: '',
})
// const loginInitialValues: LoginForm = {
//     email: '',
//     password: '',
// }

const errors = reactive<Partial<Record<keyof LoginForm, string>>>({
  email: '',
  password: '',
})

const handleFormChange = (name: string, value: string) => {
  (form as any)[name] = value
}

const validateForm = () => {
  let valid = true
  errors.email = ''
  errors.password = ''

  if (!form.email) {
    errors.email = 'Email is required'
    valid = false
  }

  if (!form.password) {
    errors.password = 'Password is required'
    valid = false
  }

  return valid
}

const handleSubmitLogin = async () => {
  if (!validateForm()) return
  const response = await authService.login(form.email, form.password)
  if (!response.is_success) {
    if (typeof response.data === "string") {
        errors.email = response.data;
    }
  } else {
    toast.success("Welcome back!", toastConfig);
    handleHideAuthContainer()
  }
}
</script>

<template>
  <div
    class="w-screen max-w-[390px] p-6 rounded-t-xl rounded-b-none md:rounded-xl bg-gradient-to-b from-white to-[var(--color-light-gray)]"
  >
    <div class="flex justify-end">
      <div class="size-5 hover:cursor-pointer" @click="handleHideAuthContainer">
        <Icon
          name="material-symbols:close-small-rounded"
          style="color: gray"
          size="30"
        />
      </div>
    </div>

    <div class="text-center mb-6">
      <div class="text-2xl text-black">Login Form</div>
    </div>

    <form @submit.prevent="handleSubmitLogin">
        <InputText
            name="email"
            type="text"
            placeHolder="Email"
            iconName="material-symbols:person-2-rounded"
            :value="form.email"
            :onChange="handleFormChange"
            :errorText="errors.email"
        />

        <InputText
            name="password"
            type="password"
            placeHolder="Password"
            iconName="material-symbols:key"
            :value="form.password"
            :onChange="handleFormChange"
            :errorText="errors.password"
        />
        <button type="submit" class="bg-black text-white w-full rounded-lg mb-6">
            Login
        </button>
        <div class="text-center">
            <div class="text-black">
                Not a member?
                <span
                    class="text-blue-500 underline hover:cursor-pointer"
                    @click="handleShowRegisterContainer"
                >
                    Sign up now
                </span>
            </div>
        </div>
    </form>
  </div>
</template>
