import { useNuxtApp } from "#app";
import type { UserProfileResponse } from "~/types/auth";
import { Method } from "~/enums";

export const useAuthService = () => {
  const nuxtApp = useNuxtApp();
  const $api = nuxtApp.$api as (endpoint: string, options?: any) => Promise<any>;

  const login = async (email: string, password: string) => {
    const payload = { email, password };

    const response = (await $api("auth/login", {
      method: Method.POST,
      body: payload,
    })) as UserProfileResponse;

    if (response && response.is_success && response.data?.access_token) {
      localStorage.setItem("access_token", response.data?.access_token);
    }
    return response;
  };

  return { login }
};
