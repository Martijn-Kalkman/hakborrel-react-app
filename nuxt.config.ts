import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  
  // CSS configuration
  css: ['~/assets/css/main.css'],
  
  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false, // Disable type checking during build for faster builds
  },
  
  // Vite configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: process.dev, // Only enable sourcemaps in development
      cssCodeSplit: true, // Split CSS for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue', 'vue-router'],
            'swiper': ['swiper']
          }
        }
      }
    },
  },
  
  // Modules
  modules: ['@nuxt/image', '@nuxt/icon'],
  
  // Image module configuration
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
    quality: 80, // Reduced from 95 for better performance (80 is still high quality)
    provider: 'ipx',
    presets: {
      thumbnail: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 400
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 1200
        }
      }
    }
  },
  
  // Nitro server configuration
  nitro: {
    experimental: {
      wasm: true
    },
    compressPublicAssets: true, // Compress static assets
    routeRules: {
      '/**': {
        headers: {
          // XSS Protection
          'X-XSS-Protection': '1; mode=block',
          // Prevent MIME type sniffing
          'X-Content-Type-Options': 'nosniff',
          // Clickjacking protection
          'X-Frame-Options': 'SAMEORIGIN',
          // Referrer Policy
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          // Permissions Policy - Only include widely supported features
          // Removed unsupported features: accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture
          'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), interest-cohort=()',
          // Content Security Policy
          'Content-Security-Policy': process.dev ? [
            // Development: Allow Vite HMR and dev server
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:* ws://localhost:*",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com http://localhost:*",
            "img-src 'self' data: https: blob:",
            "font-src 'self' data: https://fonts.gstatic.com",
            "connect-src 'self' http://localhost:* ws://localhost:* wss://localhost:*",
            "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'self'"
          ].join('; ') : [
            // Production: Strict CSP
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "img-src 'self' data: https: blob:",
            "font-src 'self' data: https://fonts.gstatic.com",
            "connect-src 'self'",
            "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'self'",
            "upgrade-insecure-requests"
          ].join('; ')
        }
      }
    }
  },
  
  // App configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'HAKBORREL - Underground Rave Events',
      titleTemplate: '%s | HAKBORREL',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap'
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'HAKBORREL - Underground rave events in Rotterdam. Experience the raw energy of hardcore techno.'
        },
        {
          'http-equiv': 'Referrer-Policy',
          content: 'strict-origin-when-cross-origin'
        }
      ]
    }
  },
  
  // Development server configuration
  devServer: {
    port: 3000,
    host: 'localhost'
  }
});