<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { RegisterForm } from '~/types/auth'
import { AuthContainerType } from '~/enums'
import { useAuthStore } from '~/store/auth'
import { useAuthService } from '~/composables/services/use-auth'
import { toast } from "vue3-toastify"
import { toastConfig } from "~/config"
import { useGlobalStore } from '~/store/global'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const authStore = useAuthStore()
const authService = useAuthService();
const globalStore = useGlobalStore()

const isLoading = computed(() => globalStore.isLoading)

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
    errors.email = t('email') + ' ' + t('is_required')
    valid = false
  }

  if (!form.password) {
    errors.password = t('password') + ' ' + t('is_required')
    valid = false
  }
  
  if (!form.confirm_password) {
    errors.confirm_password = t('confirm_password') + ' ' + t('is_required')
    valid = false
  }
  
  if (form.password != form.confirm_password) {
    errors.confirm_password = t('password_not_matched')
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
          errors.confirm_password = response.data;
      }
    }
  } else {
    toast.success(`${t('register')} ${t('success')}!`, toastConfig);
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
      <div class="text-2xl text-black">{{ t('register_form') }}</div>
    </div>
    <form @submit.prevent="handleSubmitRegister">
      <InputText
        name="email"
        type="text"
        :placeHolder="t('email')"
        iconName="material-symbols:person-2-rounded"
        :value="form.email"
        :onChange="handleFormChange"
        :errorText="errors.email"
      />
  
      <InputText
        name="password"
        type="password"
        :placeHolder="t('password')"
        iconName="material-symbols:key"
        :value="form.password"
        :onChange="handleFormChange"
        :errorText="errors.password"
      />
  
      <InputText
        name="confirm_password"
        type="password"
        :placeHolder="t('confirm_password')"
        iconName="material-symbols:key"
        :value="form.confirm_password"
        :onChange="handleFormChange"
        :errorText="errors.confirm_password"
      />
      <div class="flex justify-center items-center mb-6">
        <button :disabled="isLoading" type="submit" class="bg-black text-white w-full rounded-lg hover:bg-gray-400 hover:text-black">
          <template v-if="isLoading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="white"
              stroke-width="2"
              class="inline-block align-middle animate-spin"
            >
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
          </template>
          <template v-else>
            {{ t('register') }}
          </template>
        </button>
      </div>
      <div class="text-center">
        <div class="text-black">
          {{ t('register_form_already_member') }}
          <span
            class="text-blue-500 underline hover:cursor-pointer"
            @click="handleShowRegisterContainer"
          >
            {{ t('register_form_signin_now') }}
          </span>
        </div>
      </div>
    </form>
  </div>
</template>
