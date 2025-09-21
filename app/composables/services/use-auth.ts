import { useNuxtApp } from "#app";
import type { UserProfileListResponse, MeResponse, LoginPayload, RegisterPayload, TokenResponse } from "~/types/auth";
import { Method } from "~/enums";
import { useAuthStore } from "~/store/auth";

export const useAuthService = () => {
  const authStore = useAuthStore();
  const nuxtApp = useNuxtApp();
  const $api = nuxtApp.$api as (endpoint: string, options?: any) => Promise<any>;

  const login = async (payload: LoginPayload) => {
    const response = (await $api("auth/login", {
      method: Method.POST,
      body: payload,
    })) as UserProfileListResponse;

    if (response.data && response.is_success && response.data?.access_token) {
      localStorage.setItem("access_token", response.data?.access_token);
      authStore.setUserProfile(response.data.user);
      authStore.setIsAuthenticated(true);
    }
    return response;
  };
  
  const register = async (payload: RegisterPayload) => {
    const response = (await $api("auth/register", {
      method: Method.POST,
      body: payload,
    })) as UserProfileListResponse;

    if (response.data && response.is_success && response.data?.access_token) {
      localStorage.setItem("access_token", response.data?.access_token);
      authStore.setUserProfile(response.data.user);
      authStore.setIsAuthenticated(true);
    }
    return response;
  };
  
  const me = async () => {
    const response = (await $api("users/me", {
      method: Method.GET,
    })) as MeResponse;

    if (response.data && response.is_success) {
      authStore.setUserProfile(response.data);
      authStore.setIsAuthenticated(true);
    }
    return response;
  };

  const refreshToken = async (access_token: string) => {
    const response = (await $api("auth/refresh-token", {
      method: Method.POST,
      body: { token: access_token },
    })) as TokenResponse;

    if (response.data && response.is_success) {
      localStorage.setItem("access_token", response.data?.access_token);
    }
    return response;
  };

  return { login, register, me, refreshToken };
};
