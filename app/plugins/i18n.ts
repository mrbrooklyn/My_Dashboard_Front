import { createI18n } from "vue-i18n";
import en from "~/lang/en.json";
import th from "~/lang/th.json";

export default defineNuxtPlugin((nuxtApp) => {
  const defaultLanguage = process.client
    ? (localStorage.getItem("lang") as "en" | "th")
    : "en";

  const i18n = createI18n({
    legacy: false,
    locale: defaultLanguage,
    fallbackLocale: "en",
    messages: { en, th },
  });

  nuxtApp.vueApp.use(i18n);

  const setLanguage = (lang: "en" | "th") => {
    i18n.global.locale.value = lang;
    if (process.client) {
      localStorage.setItem("lang", lang);
    }
  };

  nuxtApp.provide("i18n", setLanguage);
});
