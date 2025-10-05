import { toast as vueToast } from "vue3-toastify";

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
