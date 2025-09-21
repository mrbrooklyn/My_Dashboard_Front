// plugins/api.ts
import { defineNuxtPlugin } from "#app";
import { useAuthService } from "~/composables/services/use-auth";
import { useAuthStore } from "~/store/auth";
import { toast } from "vue3-toastify";
import { toastConfig } from "~/config";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apiBaseUrl: string = config.public.apiBaseUrl;
  const authService = useAuthService();
  const authStore = useAuthStore();
  let token: string | null = null;

  if (process.client) {
    token = localStorage.getItem("access_token");
  }
  
  const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    } as Record<string, string>;

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = `${apiBaseUrl}/${endpoint.replace(/^\/+/, "")}`;

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
        const res = await fetch(`${apiBaseUrl}/auth/refresh-token`, {
          method: "POST",
          headers,
          body: JSON.stringify({ token: token }),
        });
        const data = await res.json();

        if (!data.is_success) {
          authStore.logout();
          toast.error("Session expired.", toastConfig);
        } else {
          let newToken = data.data.access_token;
          localStorage.setItem("access_token", newToken);
          window.location.reload()
        }
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
