<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { RegisterForm } from '~/types/auth'
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
  authStore.setSelectedAuthContainer(AuthContainerType.Login)
}

const form = reactive<RegisterForm>({
  email: '',
  password: '',
  confirm_password: '',
})

const errors = reactive<Partial<Record<keyof RegisterForm, string>>>({
  email: '',
  password: '',
  confirm_password: '',
})

const handleFormChange = (name: string, value: string, e: Event) => {
  (form as any)[name] = value
}

const validateForm = () => {
  let valid = true
  errors.email = ''
  errors.password = ''
  errors.confirm_password = ''

  if (!form.email) {
    errors.email = 'Email is required'
    valid = false
  }

  if (!form.password) {
    errors.password = 'Password is required'
    valid = false
  }
  
  if (!form.confirm_password) {
    errors.confirm_password = 'Confirm password is required'
    valid = false
  }
  
  if (form.password != form.confirm_password) {
    errors.confirm_password = 'Password not matched'
    valid = false
  }

  return valid
}

const handleSubmitRegister = async () => {
  if (!validateForm()) return
  const payload = {email: form.email, password: form.password}
  const response = await authService.register(payload)
  if (!response.is_success) {
    if (typeof response.data === "string") {
      switch(response.status_code) {
        case 10001:
          errors.email = response.data;
          break;
        case 10002:
          errors.password = response.data;
          break;
        default:
          break;
      }
    }
  } else {
    toast.success("Register success!", toastConfig);
    handleHideAuthContainer()
  }
}
</script>

<template>
  <div class="w-screen max-w-[390px] p-6 rounded-t-xl rounded-b-none md:rounded-xl bg-gradient-to-b from-white to-[var(--color-light-gray)]">
    <div class="flex justify-end">
      <div
        class="size-5 hover:cursor-pointer"
        @click="handleHideAuthContainer"
      >
        <Icon
          name="material-symbols:close-small-rounded"
          style="color: gray"
          size="30"
        />
      </div>
    </div>
    <div class="text-center mb-6">
      <div class="text-2xl text-black">Register Form</div>
    </div>
    <form @submit.prevent="handleSubmitRegister">
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
  
      <InputText
        name="confirm_password"
        type="password"
        placeHolder="Confirm Password"
        iconName="material-symbols:key"
        :value="form.confirm_password"
        :onChange="handleFormChange"
        :errorText="errors.confirm_password"
      />
      <div class="flex justify-center items-center mb-6">
        <button type="submit" class="bg-black text-white w-full rounded-lg hover:bg-gray-400 hover:text-black">Register</button>
      </div>
      <div class="text-center">
        <div class="text-black">
          Already a member?
          <span
            class="text-blue-500 underline hover:cursor-pointer"
            @click="handleShowRegisterContainer"
          >
            Sign in now
          </span>
        </div>
      </div>
    </form>
  </div>
</template>
