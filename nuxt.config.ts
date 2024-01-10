// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sanity',
  ],
  googleFonts: {
    families: {
      'Shippori+Mincho': true
    }
  },
  sanity: {
    projectId: 're8wfcz8',
  },
  runtimeConfig: {
    apiSecret: ''
  }
})
