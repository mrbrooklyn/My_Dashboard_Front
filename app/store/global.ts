import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    setLoading(value: boolean) {
      this.isLoading = value;
    },
  },
});