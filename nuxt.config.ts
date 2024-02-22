// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    'shadcn-nuxt'
  ],
  components: {
    // Habilita o auto-importação para os componentes em `./components`
    global: true,
    dirs: [
      {
        path: './components',
        // Opcional: especifique extensões de arquivos
        extensions: ['vue', 'ts']
      }
    ]
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
