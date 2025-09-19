// plugins/api.ts
import { defineNuxtPlugin, useNuxtApp } from "#app";
import { useAuthStore } from "~/store/auth";
import { toast } from "vue3-toastify";
import { toastConfig } from "~/config";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  let token: string | null = null;

  // if (process.client) {
  //   token = localStorage.getItem("access_token");
  // }

  const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    } as Record<string, string>;

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = `${config.public.apiBaseUrl}/${endpoint.replace(/^\/+/, "")}`;

    const response = await fetch(url, {
      ...options,
      headers,
      body:
        options.body && typeof options.body !== "string"
          ? JSON.stringify(options.body)
          : options.body,
    });

    let data: any = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }
    let errorMessage = data?.message || `HTTP error! Status: ${response.status}`;

    if (!response.ok) {
      if (response.status === 401 && token) {
        
      } else if (response.status === 401) {
        toast.error("Unauthorized. Please log in again.", toastConfig);
      } else if (response.status === 500) {
        toast.error("Server error. Please try later.", toastConfig);
      } else {
        toast.error(errorMessage || `Error ${response.status}`, toastConfig);
      }
      return { is_success: false, message: errorMessage, data: null };
    }

    return data;
  };

  nuxtApp.provide("api", apiFetch);
});
