<script lang="ts" setup>
import { useAuthStore } from "~/store/auth"
import { useAuthService } from '~/composables/services/use-auth'
import { useGlobalStore } from '~/store/global'
import { toast } from "vue3-toastify"
import { toastConfig } from "~/config"
import { ref, reactive, watch } from 'vue'
import type { UpdateProfileForm, ChangePasswordForm } from '~/types/auth'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const authStore = useAuthStore();
const authService = useAuthService();
const globalStore = useGlobalStore()

const isLoading = computed(() => globalStore.isLoading)

export interface Props {
  show: boolean
  onClosePanel: () => void
  onChagePanel: () => void
}

const prop= defineProps<Props>()

const profileForm = reactive<UpdateProfileForm>({
  email: '',
  first_name: '',
  last_name: '',
  phone: '',
})

const profileErrors = reactive<Partial<Record<keyof UpdateProfileForm, string>>>({
  email: '',
  first_name: '',
  last_name: '',
  phone: '',
})

const resetProfileForm = () => {
  profileForm.email = authStore.userProfile?.email;
  profileForm.first_name = authStore.userProfile?.first_name;
  profileForm.last_name = authStore.userProfile?.last_name;
  profileForm.phone = authStore.userProfile?.phone;
}

const resetProfileErrors = () => {
  profileErrors.email = '';
  profileErrors.first_name = '';
  profileErrors.last_name = '';
  profileErrors.phone = '';
}

const handleProfileFormChange = (name: string, value: string) => {
  (profileForm as any)[name] = value
}

// const validateProfileForm = () => {
//   let valid = true
//   profileErrors.first_name = ''
//   profileErrors.last_name = ''
//   profileErrors.phone = ''

//   if (!profileForm.first_name) {
//     profileErrors.first_name = 'Input here'
//     valid = false
//   }

//   if (!profileForm.last_name) {
//     profileErrors.last_name = 'Input here'
//     valid = false
//   }
  
//   if (!profileForm.phone) {
//     profileErrors.phone = 'Input here'
//     valid = false
//   }

//   return valid
// }

const handleSubmitUpdateProfile = async () => {
  // if (!validateProfileForm()) return
  const payload = {first_name: profileForm.first_name, last_name: profileForm.last_name, phone: profileForm.phone}
  const response = await authService.updateProfile(payload)
  if (!response.is_success) {
    if (typeof response.data === "string") {
      switch(response.status_code) {
        case 10009:
          profileErrors.first_name = response.data;
          profileErrors.last_name = response.data;
          profileErrors.phone = response.data;
          break;
        default:
          profileErrors.phone = response.data;
      }
    }
  } else {
    toast.success(`${t('save')} ${t('success').toLowerCase()}!`, toastConfig);
  }
}

const passwordForm = reactive<ChangePasswordForm>({
  old_password: '',
  new_password: '',
  confirm_new_password: '',
})

const passwordErrors = reactive<Partial<Record<keyof ChangePasswordForm, string>>>({
  old_password: '',
  new_password: '',
  confirm_new_password: '',
})

const resetPasswordForm = () => {
  passwordForm.old_password = '';
  passwordForm.new_password = '';
  passwordForm.confirm_new_password = '';
}

const resetPasswordErrors = () => {
  passwordErrors.old_password = '';
  passwordErrors.new_password = '';
  passwordErrors.confirm_new_password = '';
}

const handlePasswordFormChange = (name: string, value: string) => {
  (passwordForm as any)[name] = value
}

const validatePasswordForm = () => {
  let valid = true
  resetPasswordErrors();

  if (!passwordForm.old_password) {
    passwordErrors.old_password = t('old_password') + ' ' + t('is_required')
    valid = false
  }

  if (!passwordForm.new_password) {
    passwordErrors.new_password = t('new_password') + ' ' + t('is_required')
    valid = false
  }
  
  if (!passwordForm.confirm_new_password) {
    passwordErrors.confirm_new_password = t('confirm_new_password') + ' ' + t('is_required')
    valid = false
  }

  return valid
}

const handleSubmitChangePassword = async () => {
  if (!validatePasswordForm()) return
  const payload = {old_password: passwordForm.old_password, new_password: passwordForm.new_password}
  const response = await authService.changePassword(payload)
  if (!response.is_success) {
    if (typeof response.data === "string") {
      switch(response.status_code) {
        case 10009:
          passwordErrors.new_password = response.data;
          passwordErrors.confirm_new_password = response.data;
          break;
        case 10010:
          passwordErrors.new_password = response.data;
          passwordErrors.confirm_new_password = response.data;
          break;
        case 10011:
          passwordErrors.old_password = response.data;
          break;
        default:
          passwordErrors.new_password = response.data;
      }
    }
  } else {
    toast.success(`${t('save')} ${t('success').toLowerCase()}!`, toastConfig);
    resetPasswordForm();
  }
}

const handleMouseLeave = () => {
  prop.onClosePanel()
}

watch(
  () => prop.show,
  (newVal) => {
    if (newVal) {
      resetProfileForm();
      resetProfileErrors();
      resetPasswordForm();
      resetPasswordErrors();
    }
  }
)

</script>

<template>
  <div
    class="fixed z-30 w-screen max-w-[300px] h-full flex flex-col bg-gradient-to-b from-[var(--color-lavender-gray)] to-[var(--color-lavender-gray)] pt-6 duration-300"
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
        {{ t('edit_profile') }}
      </div>
      
      <div class="flex justify-center items-center size-8 hover:cursor-pointer" @click="onClosePanel">
        <Icon
          name="material-symbols:close-small-rounded"
          class="text-black hover:text-gray-400"
          size="30"
        />
      </div>
    </div>

    <hr class="border-0 h-px bg-gradient-to-r from-transparent via-[var(--color-medium-gray)] to-transparent my-6">

    <div class="flex-1 overflow-y-auto w-full px-4 pt-2 pb-4">
      <form @submit.prevent="handleSubmitUpdateProfile">
        <div class="flex flex-col">
          <InputText
            name="email"
            type="text"
            :placeHolder="t('email')"
            iconName="material-symbols:mail-outline-rounded"
            :value="profileForm.email ?? ''"
            :onChange="() => {}"
            :errorText="profileErrors.email"
            :disabled="true"
          />
          <InputText
            name="first_name"
            type="text"
          :placeHolder="t('first_name')"
            iconName="material-symbols:person-2-rounded"
            :value="profileForm.first_name ?? ''"
            :onChange="handleProfileFormChange"
            :errorText="profileErrors.first_name"
          />
          <InputText
            name="last_name"
            type="text"
          :placeHolder="t('last_name')"
            iconName="material-symbols:person-2-rounded"
            :value="profileForm.last_name ?? ''"
            :onChange="handleProfileFormChange"
            :errorText="profileErrors.last_name"
          />
          <InputText
            name="phone"
            type="tel"
          :placeHolder="t('phone')"
            iconName="material-symbols:call-outline-rounded"
            :value="profileForm.phone ?? ''"
            :onChange="handleProfileFormChange"
            :errorText="profileErrors.phone"
          />
        </div>
        <button :disabled="isLoading" type="submit" class="bg-[var(--color-dark-gray)] text-white w-full rounded-lg hover:bg-[var(--color-light-gray)] hover:text-black">
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
            {{ t('button_save_change') }}
          </template>
        </button>
      </form>

      <hr class="border-0 h-px bg-gradient-to-r from-transparent via-[var(--color-medium-gray)] to-transparent my-8">

      <form @submit.prevent="handleSubmitChangePassword">
        <InputText
          name="old_password"
          type="password"
          :placeHolder="t('old_password')"
          iconName="material-symbols:key"
          :value="passwordForm.old_password"
          :onChange="handlePasswordFormChange"
          :errorText="passwordErrors.old_password"
        />
        <InputText
          name="new_password"
          type="password"
          :placeHolder="t('new_password')"
          iconName="material-symbols:key-outline"
          :value="passwordForm.new_password"
          :onChange="handlePasswordFormChange"
          :errorText="passwordErrors.new_password"
        />
        <InputText
          name="confirm_new_password"
          type="password"
          :placeHolder="t('confirm_new_password')"
          iconName="material-symbols:key-outline"
          :value="passwordForm.confirm_new_password"
          :onChange="handlePasswordFormChange"
          :errorText="passwordErrors.confirm_new_password"
        />
        <button :disabled="isLoading" type="submit" class="bg-[var(--color-dark-gray)] text-white w-full rounded-lg hover:bg-[var(--color-light-gray)] hover:text-black">
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
            {{ t('button_change_password') }}
          </template>
        </button>
      </form>
    </div>
  </div>
</template>
