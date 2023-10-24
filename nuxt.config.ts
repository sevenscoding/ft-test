import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
  swiper: {
    modules: ['navigation'],
  },
  alias: {
    '@c': resolve(__dirname, './components'),
    styles: resolve(__dirname, './styles'),
    '~styles': resolve(__dirname, './styles'),
  },
  css: ['~/assets/styles/vars.css', '~/assets/styles/normalize.css', '~/assets/fonts/style.css', '~/assets/styles/main.css'],
})
