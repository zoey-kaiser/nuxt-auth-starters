// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-20',
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    globalAppMiddleware: {
      isEnabled: true,
      allow404WithoutAuth: true,
      addDefaultCallbackUrl: true,
    }
  },
  typescript: {
    shim: false
  }
})
