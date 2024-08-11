// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["@/assets/resources/css/styles.css"],
  modules: [
    'nuxt-vue3-google-signin'
  ],
  googleSignIn: {
    clientId: '72780742121-4j4tl98s5g99fmmcneked3d1pdnn7p9l.apps.googleusercontent.com',
  }
})
