<script lang="ts" setup>
import { onMounted } from 'vue'
import type { RegisterForm } from '~/types/auth'
import { AuthContainerType } from '~/enums/enum'
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

const handleHideAuthContainer = () => { 
  authStore.clearSelectedAuthContainer()
}

const handleShowRegisterContainer = () => {
  authStore.setSelectedAuthContainer(AuthContainerType.Login)
}

const handleFormChange = () => {
   
}

const handleSubmitLogin = () => {
   
}

</script>

<template>
  <!-- TODO: Login Form  -->
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
    <form @submit.prevent="handleSubmitLogin">
      <div>
        <InputText
          name="email"
          type="text"
          placeHolder="Email"
          iconName="material-symbols:person-2-rounded"
          :value="''"
          :onChange="handleFormChange"
          :errorText="''"
        />
      </div>
      <div>
        <InputText
          name="password"
          type="password"
          placeHolder="Password"
          iconName="material-symbols:key"
          :value="''"
          :onChange="handleFormChange"
          :errorText="''"
        />
      </div>
      <div>
        <InputText
          name="password"
          type="password"
          placeHolder="Confirm Password"
          iconName="material-symbols:key"
          :value="''"
          :onChange="handleFormChange"
          :errorText="''"
        />
      </div>
      <div class="flex justify-center items-center mb-6">
        <button class="bg-black text-white w-full rounded-lg hover:bg-gray-400 hover:text-black">Register</button>
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
