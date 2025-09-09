import { defineStore } from "pinia";
import { AuthContainerType } from "~/enums/enum";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    selectedAuthContainer: null as AuthContainerType | null,
  }),
  actions: {
    clearSelectedAuthContainer() {
      this.selectedAuthContainer = null;
    },
    setSelectedAuthContainer(container: AuthContainerType) {
      this.selectedAuthContainer = container;
    },
  },
});
