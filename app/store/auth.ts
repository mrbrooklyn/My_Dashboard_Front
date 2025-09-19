import { defineStore } from "pinia";
import { AuthContainerType } from "~/enums";
import type { UserProfile } from "~/types/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    selectedAuthContainer: null as AuthContainerType | null,
    userProfile: {} as UserProfile | null,
  }),
  actions: {
    clearSelectedAuthContainer() {
      this.selectedAuthContainer = null;
    },
    setSelectedAuthContainer(container: AuthContainerType) {
      this.selectedAuthContainer = container;
    },
    setUserProfile(data: UserProfile | null) {
      this.userProfile = data;
    },
  },
});
