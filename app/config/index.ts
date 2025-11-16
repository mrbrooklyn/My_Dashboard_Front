import { toast as vueToast } from "vue3-toastify"
import type { LangCode } from "~/types/global"

export const defaultLanguage = "en" as LangCode;

export const bannerAnimation = {
  duration: 800,
};

export const toastConfig = {
  position: vueToast.POSITION.TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: true,
  closeOnClick: true,
};

export const carouselConfig = {
  interval: 5000,
  duration: 800,
};

export const zIndex = {
  base: 10,

  // Layout
  bannerIndicator: 20,
  bannerMenuTab: 30,
  headerPanel: 30,
  rightPanel: 40,
  authModal: 50,

  // Components
  carouselComponent: 21,
};

