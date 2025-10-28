<template>
  <section id="media" class="relative pt-24 pb-12 px-6 overflow-hidden">
    <!-- Animated media gallery background -->
    <div class="absolute inset-0 bg-black" />
    <div 
      class="absolute inset-0 opacity-25"
      style="background: radial-gradient(circle at 30% 30%, rgba(128, 0, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(57, 255, 20, 0.15) 0%, transparent 50%); animation: media-pulse 12s ease-in-out infinite;"
    />
    
    <!-- Animated grid pattern -->
    <div 
      class="absolute inset-0 opacity-10"
      style="background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px); background-size: 60px 60px; animation: grid-move 20s linear infinite;"
    />

    <!-- Rotating central glow -->
    <div 
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full blur-[150px] animate-spin" 
      style="background: linear-gradient(to right, rgba(0, 211, 44, 0.08), rgba(147, 51, 234, 0.08)); animation-duration: 30s;"
    />
    
    <!-- Floating media indicators -->
    <div class="absolute top-1/4 left-1/4 w-8 h-8 rounded-full animate-bounce" style="background-color: rgba(0, 211, 44, 0.2); animation-duration: 2s;" />
    <div class="absolute top-1/4 right-1/4 w-8 h-8 rounded-full animate-bounce" style="background-color: rgba(147, 51, 234, 0.2); animation-duration: 2.5s; animation-delay: 0.5s;" />
    <div class="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full animate-bounce" style="background-color: rgba(0, 211, 44, 0.2); animation-duration: 3s; animation-delay: 1s;" />
    <div class="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full animate-bounce" style="background-color: rgba(147, 51, 234, 0.2); animation-duration: 3.5s; animation-delay: 1.5s;" />
    
    <!-- Pulsing corner accents -->
    <div class="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] animate-pulse" style="background-color: rgba(0, 211, 44, 0.15); animation-duration: 4s;" />
    <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] animate-pulse" style="background-color: rgba(147, 51, 234, 0.15); animation-duration: 5s; animation-delay: 1s;" />

    <!-- Title Section with Container -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-1 h-8 bg-purple-500"></div>
          <h2 class="text-4xl md:text-6xl font-bold">
            <span class="text-purple-500">MEDIA</span>
            <span class="text-white"> GALLERY</span>
          </h2>
          <div class="w-1 h-8 bg-purple-500"></div>
        </div>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Relive the energy and atmosphere of our underground gatherings through our photo gallery.
        </p>
      </div>
    </div>

    <!-- Full Width Swiper -->
    <div class="mb-12 -mx-6 sm:-mx-0">
        <Swiper
          ref="swiperInstance"
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :autoplay="isHovered ? false : {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }"
          :speed="5000"
          :loop="true"
          :grab-cursor="false"
          :allow-touch-move="false"
          :breakpoints="{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 }
          }"
          @mouseenter="pauseSwiper"
          @mouseleave="resumeSwiper"
          class="pb-12 media-swiper"
        >
          <SwiperSlide v-for="item in mediaItems" :key="item.id">
            <div class="group relative overflow-hidden rounded-lg bg-black/60 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div class="aspect-[4/3] relative">
                <NuxtImg
                  :src="item.src"
                  :alt="item.title"
                  class="object-cover group-hover:scale-105 transition-transform duration-500"
                  style="width: 100%; height: 100%;"
                  loading="lazy"
                  format="webp"
                  quality="95"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 class="text-white font-semibold text-sm">{{ item.title }}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    <!-- Social Media Icons with Container -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex justify-center items-center gap-8 mb-8">
        <a 
          href="https://youtube.com/@hakborrel" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
        >
          <div class="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center border border-red-600/30 group-hover:bg-red-600/30 group-hover:border-red-600/50 transition-all duration-300">
            <Icon name="heroicons:play" class="h-8 w-8 text-red-500 group-hover:text-red-400" />
          </div>
          <span class="text-gray-400 text-sm group-hover:text-white transition-colors">YouTube</span>
        </a>

        <a 
          href="https://tiktok.com/@hakborrel" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
        >
          <div class="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border border-gray-600/30 group-hover:bg-black/30 group-hover:border-gray-500/50 transition-all duration-300">
            <Icon name="heroicons:musical-note" class="h-8 w-8 text-white group-hover:text-gray-300" />
          </div>
          <span class="text-gray-400 text-sm group-hover:text-white transition-colors">TikTok</span>
        </a>

        <a 
          href="https://instagram.com/hakborrel" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
        >
          <div class="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center border border-purple-600/30 group-hover:from-purple-600/30 group-hover:to-pink-600/30 group-hover:border-purple-500/50 transition-all duration-300">
            <Icon name="heroicons:camera" class="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
          </div>
          <span class="text-gray-400 text-sm group-hover:text-white transition-colors">Instagram</span>
        </a>
      </div>

      <div class="text-center mt-12 mb-12">
        <NuxtLink to="/tickets">
          <button class="bg-purple-500 hover:bg-purple-500/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            GET TICKETS
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { ref, onMounted } from 'vue'
import 'swiper/css'

const modules = [Autoplay]

// Media Gallery section with photo grid and social links

const swiperInstance = ref(null)
const isHovered = ref(false)

const pauseSwiper = () => {
  isHovered.value = true
  if (swiperInstance.value && swiperInstance.value.swiper) {
    swiperInstance.value.swiper.autoplay.stop()
  }
}

const resumeSwiper = () => {
  isHovered.value = false
  if (swiperInstance.value && swiperInstance.value.swiper) {
    swiperInstance.value.swiper.autoplay.start()
  }
}

const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    title: "Underground Rave #22",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&crop=center",
    title: "Festival 2023",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
    title: "Bunker Sessions",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop&crop=center",
    title: "Midnight Madness",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1553783308-b9bb4ba7e9d1?w=600&h=400&fit=crop&crop=center",
    title: "Neon Nights",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center",
    title: "Bass Drop",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&h=400&fit=crop&crop=center",
    title: "Flash Mob",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=600&h=400&fit=crop&crop=center",
    title: "Electric Dreams",
  },
  // Duplicates for seamless loop
  {
    id: 9,
    type: "image",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    title: "Underground Rave #22",
  },
  {
    id: 10,
    type: "image",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&crop=center",
    title: "Festival 2023",
  },
  {
    id: 11,
    type: "image",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
    title: "Bunker Sessions",
  },
  {
    id: 12,
    type: "image",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop&crop=center",
    title: "Midnight Madness",
  },
  {
    id: 13,
    type: "image",
    src: "https://images.unsplash.com/photo-1553783308-b9bb4ba7e9d1?w=600&h=400&fit=crop&crop=center",
    title: "Neon Nights",
  },
  {
    id: 14,
    type: "image",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center",
    title: "Bass Drop",
  },
  {
    id: 15,
    type: "image",
    src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&h=400&fit=crop&crop=center",
    title: "Flash Mob",
  },
  {
    id: 16,
    type: "image",
    src: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=600&h=400&fit=crop&crop=center",
    title: "Electric Dreams",
  },
]
</script>

<style scoped>
/* Linear timing for constant speed scrolling */
:global(.media-swiper .swiper-wrapper) {
  transition-timing-function: linear !important;
}

@keyframes media-pulse {
  0%, 100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.35;
  }
}

@keyframes grid-move {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(60px) translateY(60px);
  }
}
</style>
