import { createI18n } from "vue-i18n";
import { defaultLanguage } from "~/config";
import type { LangCode } from "~/types/global";

import en from "~/lang/en.json";
import th from "~/lang/th.json";

export default defineNuxtPlugin((nuxtApp) => {
  const defaultLang = process.client
    ? (localStorage.getItem("lang") as LangCode) || defaultLanguage
    : defaultLanguage;

  const i18n = createI18n({
    legacy: false,
    locale: defaultLang,
    fallbackLocale: defaultLanguage,
    messages: { en, th },
  });

  nuxtApp.vueApp.use(i18n);

  const setLanguage = (lang: LangCode) => {
    i18n.global.locale.value = lang;
    if (process.client) {
      localStorage.setItem("lang", lang);
    }
  };

  nuxtApp.provide("i18n", setLanguage);
});
