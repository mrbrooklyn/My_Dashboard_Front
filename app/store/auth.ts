import { defineStore } from "pinia";
import { AuthContainerType } from "~/enums";
import type { UserProfile } from "~/types/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    selectedAuthContainer: null as AuthContainerType | null,
    isAuthenticated: false,
    userProfile: {} as UserProfile | null,
  }),
  actions: {
    clearSelectedAuthContainer() {
      this.selectedAuthContainer = null;
    },
    setSelectedAuthContainer(container: AuthContainerType) {
      this.selectedAuthContainer = container;
    },
    setIsAuthenticated(data: boolean) {
      this.isAuthenticated = data;
    },
    setUserProfile(data: UserProfile | null) {
      this.userProfile = data;
    },
    logout() {
      this.isAuthenticated = false;
      this.userProfile = null;
      localStorage.removeItem("access_token");
    },
  },
});
