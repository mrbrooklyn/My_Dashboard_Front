import { useNuxtApp } from "#app";
import type { UserProfileListResponse, ProfileResponse, LoginPayload, RegisterPayload, TokenResponse, UpdateProfilePayload, ChangePasswordPayload } from "~/types/auth";
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
  
  const profile = async () => {
    const response = (await $api("users/profile", {
      method: Method.GET,
    })) as ProfileResponse;

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
  
  const updateProfile = async (payload: UpdateProfilePayload) => {
    const response = (await $api("users/profile", {
      method: Method.PUT,
      body: payload,
    })) as UserProfileListResponse;

    if (response.data && response.is_success && response.data?.access_token) {
      localStorage.setItem("access_token", response.data?.access_token);
      authStore.setUserProfile(response.data.user);
    }
    return response;
  };
  
  const changePassword = async (payload: ChangePasswordPayload) => {
    const response = (await $api("auth/reset-password", {
      method: Method.POST,
      body: payload,
    })) as UserProfileListResponse;

    if (response.data && response.is_success && response.data?.access_token) {
      localStorage.setItem("access_token", response.data?.access_token);
      authStore.setUserProfile(response.data.user);
    }
    return response;
  };

  return { login, register, profile, refreshToken, updateProfile, changePassword };
};
