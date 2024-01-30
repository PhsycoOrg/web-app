// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ["./api"],
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'es'
      }
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: {
      public: {
          baseUrl: "http://localhost:3000",
          homeUrl: "/dashboard",
          loginUrl: "/login",
          verificationUrl: "/verify-email",
      },
  },
})
