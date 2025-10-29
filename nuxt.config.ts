import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: true,
    },
  },
  modules: ['@nuxt/image', '@nuxt/icon'],
  image: {
    domains: ['images.unsplash.com'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2],
    format: ['webp'],
    quality: 95,
    provider: 'ipx',
  },
  nitro: {
    experimental: {
      wasm: true
    },
    routeRules: {
      '/**': {
        headers: {
          'Permissions-Policy': 'accelerometer=(), autoplay=(), clipboard-write=(), encrypted-media=(), gyroscope=(), picture-in-picture=(), interest-cohort=()',
          'Content-Security-Policy': "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com; frame-ancestors 'self';"
        }
      }
    }
  },
  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Permissions-Policy',
          content: 'accelerometer=(), autoplay=(), clipboard-write=(), encrypted-media=(), gyroscope=(), picture-in-picture=(), interest-cohort=()'
        },
        {
          'http-equiv': 'Referrer-Policy',
          content: 'no-referrer-when-downgrade'
        }
      ]
    }
  },
  devServer: {
    port: 3000,
    host: 'localhost'
  }
});