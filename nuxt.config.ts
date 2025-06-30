// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts'
  ],

  // Configurações do Nuxt UI com as cores da Promaster

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Configurações de CSS e Tailwind
  css: ['~/assets/css/main.css'],

  // Configurações de fontes
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Poppins', provider: 'google' }
    ]
  },

  // SEO e meta tags
  app: {
    head: {
      title: 'Promaster - Agilidade e variedade à sua disposição!',
      meta: [
        { name: 'description', content: 'Site da Promaster - Agilidade e variedade à sua disposição!' },
        { name: 'keywords', content: 'promaster, agilidade, variedade' },
        { property: 'og:title', content: 'Promaster' },
        { property: 'og:description', content: 'Agilidade e variedade à sua disposição!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.promaster.eco.br/' }
      ]
    }
  }
})