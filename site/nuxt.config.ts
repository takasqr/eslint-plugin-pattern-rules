// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'ja',
        iso: 'ja-JP'
      },
      {
        code: 'es',
        iso: 'es-ES'
      },
      {
        code: 'fr',
        iso: 'fr-FR'
      }
    ],
    strategy: "no_prefix",
    vueI18n: './i18n.config.ts'
  }
})