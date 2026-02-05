import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/color.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.PUBLIC_API_BASE_URL,
    },
  },

  plugins: ["~/plugins/api.ts", "~/plugins/i18n.ts"],

  modules: ["@nuxt/icon", "@pinia/nuxt"],

  // i18n: {
  //   strategy: "no_prefix",
  //   locales: ["en", "th"],
  //   defaultLocale: "en",
  //   vueI18n: "~/plugins/i18n.ts",
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "lang",
  //     cookieCrossOrigin: false,
  //     cookieSecure: false,
  //     alwaysRedirect: true,
  //     fallbackLocale: "en",
  //   },
  // },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "My Dashboard",
      link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],
    },
  },
});
