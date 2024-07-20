// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-20',
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    baseURL: '/api/auth',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        getSession: { path: '/session', method: 'get' }
      },
      pages: {
        login: '/auth/signin'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken'
      },
      session: {
        dataType: {
          id: 'string',
          name: 'string',
          email: 'string',
          avatar: 'string',
          role: '\'admin\' | \'guest\' | \'account\'',
          subscriptions: '{ id: number, status: \'ACTIVE\' | \'INACTIVE\' }[]'
        },
        dataResponsePointer: '/'
      }
    },
    globalAppMiddleware: true,
    sessionRefresh: {
      enableOnWindowFocus: true,
      enablePeriodically: 10000
    }
  },
  build: {
    transpile: ['jsonwebtoken']
  },
  typescript: {
    shim: false
  },
})
