<template>
  <section id="media" class="relative min-h-[calc(100vh-64px)] min-h-[calc(100dvh-64px)] px-3 sm:px-4 md:px-6 overflow-x-hidden py-3 sm:py-4 md:py-6 flex flex-col media-section-content">
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
    <div class="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 flex-1 flex flex-col">
      <div class="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 flex-shrink-0">
        <div class="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
          <div class="w-1 h-4 sm:h-6 md:h-8 bg-purple-500"></div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display">
            <span class="text-purple-500">CONTENT</span>
          </h2>
          <div class="w-1 h-4 sm:h-6 md:h-8 bg-purple-500"></div>
        </div>
      </div>

      <!-- Content Selector/Tabs -->
      <div class="flex justify-center mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
        <div class="bg-black/40 backdrop-blur-sm border border-purple-500/60 rounded-lg p-1 flex gap-1">
          <button
            @click="showingVideo = true"
            :class="[
              'px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-md transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base cursor-pointer',
              showingVideo 
                ? 'bg-purple-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-gray-300'
            ]"
          >
            VIDEOS
          </button>
          <button
            @click="showingVideo = false"
            :class="[
              'px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-md transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base cursor-pointer',
              showingVideo 
                ? 'text-gray-400 hover:text-gray-300' 
                : 'bg-purple-600 text-white shadow-lg'
            ]"
          >
            PHOTO GALLERY
          </button>
        </div>
      </div>

      <!-- Featured Video -->
      <div v-if="showingVideo" class="max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex-shrink-0 w-full">
        <div class="relative bg-black rounded-lg overflow-hidden border border-purple-500/60 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] video-player-container group">
          <!-- Video Player with Overlays -->
          <div class="relative w-full bg-black" style="position: relative; padding-bottom: 56.25%; height: 0; width: 100%;">
            <!-- YouTube Video Embed - Privacy Enhanced (No Cookies) -->
            <iframe 
              :src="youtubeEmbedUrl"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="absolute top-0 left-0"
              style="width: 100%; height: 100%; border: none; z-index: 1; position: absolute;"
            ></iframe>
            
            <!-- Top Left - Video Info Overlay -->
            <div class="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg pointer-events-auto">
              <div class="w-4 h-4 bg-purple-500 rounded flex-shrink-0"></div>
              <span class="text-white text-xs sm:text-sm font-semibold">HAKborrel 15.02.2025 @ Groothandelsgebouw Rotterdam</span>
            </div>
            
            <!-- Top Right - Copy Link Button -->
            <div class="absolute top-3 right-3 z-20 pointer-events-auto">
              <button 
                @click="copyVideoLink"
                class="bg-black/70 backdrop-blur-sm hover:bg-black/90 border border-white/20 hover:border-white/40 rounded-lg px-3 py-2 flex flex-col items-center gap-1 transition-all duration-300 group/copy"
              >
                <div class="w-4 h-4 border border-white/60 rounded-sm flex items-center justify-center group-hover/copy:border-white transition-colors">
                  <div class="w-2 h-2 bg-white/60 rounded-sm group-hover/copy:bg-white transition-colors"></div>
                </div>
                <span class="text-white/80 text-[10px] group-hover/copy:text-white transition-colors">Copy link</span>
              </button>
            </div>
            
            
            <!-- Bottom Left - YouTube Branding -->
            <div class="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg pointer-events-auto">
              <span class="text-white/80 text-xs">Watch on</span>
              <svg class="w-12 h-4" viewBox="0 0 90 20" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0000" d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5701 5.35042 27.9727 3.12324Z"/>
                <path fill="white" d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Photo Collections Grid (shown when Foto Galerij is selected) -->
      <div v-if="!showingVideo" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 flex-1 max-w-5xl mx-auto">
        <div 
          v-for="collection in photoCollections" 
          :key="collection.id" 
          @click="openCollection(collection)"
          class="group relative overflow-hidden rounded-lg bg-black/60 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer aspect-square"
        >
          <div class="relative w-full h-full overflow-hidden bg-black/40">
            <NuxtImg
              :src="collection.thumbnail"
              :alt="collection.title"
              class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              format="webp"
              quality="95"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
              <h3 class="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{{ collection.title }}</h3>
              <p class="text-gray-300 text-[10px] sm:text-xs">{{ collection.photoCount }} foto's</p>
            </div>
            <div class="absolute top-2 right-2 bg-purple-500/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-white text-[10px] sm:text-xs font-semibold">BEKIJKEN</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Full Width Swiper (always visible at bottom) - COMMENTED OUT -->
    <!-- <div class="mb-2 sm:mb-3 md:mb-4 lg:mb-6 -mx-3 sm:-mx-4 md:-mx-6 flex-shrink-0">
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
      </div> -->

    <!-- Photo Gallery Modal/Lightbox -->
    <Teleport to="body">
      <div 
        v-if="selectedCollection" 
        @click.self="closeCollection"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
      >
        <!-- Close Button -->
        <button 
          @click="closeCollection" 
          class="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors bg-black/50 rounded-full p-2"
        >
          <Icon name="heroicons:x-mark" class="h-6 w-6" />
        </button>

        <!-- Collection Info -->
        <div class="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
          <h3 class="text-white text-lg font-bold mb-1">{{ selectedCollection.title }}</h3>
          <p class="text-gray-300 text-sm">{{ currentPhotoIndex + 1 }} / {{ selectedCollection.photos.length }}</p>
        </div>

        <!-- Photo Slider -->
        <div class="max-w-6xl w-full relative">
          <Swiper
            ref="gallerySwiper"
            :modules="galleryModules"
            :slides-per-view="1"
            :space-between="20"
            :navigation="true"
            :keyboard="{ enabled: true }"
            class="gallery-swiper"
            @slideChange="onSlideChange"
          >
            <SwiperSlide v-for="(photo, index) in selectedCollection.photos" :key="index">
              <div class="relative aspect-video bg-black rounded-lg overflow-hidden">
                <NuxtImg
                  :src="photo.src"
                  :alt="photo.title || `${selectedCollection.title} - Foto ${index + 1}`"
                  class="object-contain w-full h-full"
                  loading="eager"
                  format="webp"
                  quality="100"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- Navigation Arrows (custom if needed) -->
        <button
          @click="previousPhoto"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-all"
        >
          <Icon name="heroicons:chevron-left" class="h-6 w-6" />
        </button>
        <button
          @click="nextPhoto"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-all"
        >
          <Icon name="heroicons:chevron-right" class="h-6 w-6" />
        </button>
      </div>
    </Teleport>

    <!-- Social Media Icons with Container -->
    <div class="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 flex-shrink-0">
      <div class="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-3 sm:mb-4 md:mb-6">
        <a 
          href="https://youtube.com/@hakborrel" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
        >
          <div class="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center border border-red-600/30 group-hover:bg-red-600/30 group-hover:border-red-600/50 transition-all duration-300">
            <Icon name="mdi:youtube" class="h-8 w-8 text-red-500 group-hover:text-red-400" />
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
            <Icon name="simple-icons:tiktok" class="h-8 w-8 text-white group-hover:text-gray-300" />
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
            <Icon name="mdi:instagram" class="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
          </div>
          <span class="text-gray-400 text-sm group-hover:text-white transition-colors">Instagram</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Keyboard } from 'swiper/modules'
import { ref, computed } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Autoplay]
const galleryModules = [Navigation, Keyboard]

// Toggle state for showing video or gallery
const showingVideo = ref(true)

// Selected collection for gallery modal
const selectedCollection = ref(null)
const gallerySwiper = ref(null)
const currentPhotoIndex = ref(0)

// Photo collections
const photoCollections = [
  {
    id: 1,
    title: "UNDERGROUND RAVE #23",
    photoCount: 12,
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    photos: [
      { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 1" },
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 2" },
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 3" },
      { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 4" },
      { src: "https://images.unsplash.com/photo-1553783308-b9bb4ba7e9d1?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 5" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 6" },
      { src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 7" },
      { src: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 8" },
      { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 9" },
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 10" },
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 11" },
      { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop&crop=center", title: "Underground Rave #23 - Foto 12" }
    ]
  },
  {
    id: 2,
    title: "HARDCORE FESTIVAL 2024",
    photoCount: 15,
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&crop=center",
    photos: [
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 1" },
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 2" },
      { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 3" },
      { src: "https://images.unsplash.com/photo-1553783308-b9bb4ba7e9d1?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 4" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 5" },
      { src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 6" },
      { src: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 7" },
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 8" },
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 9" },
      { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 10" },
      { src: "https://images.unsplash.com/photo-1553783308-b9bb4ba7e9d1?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 11" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 12" },
      { src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 13" },
      { src: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 14" },
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop&crop=center", title: "Hardcore Festival 2024 - Foto 15" }
    ]
  },
  {
    id: 3,
    title: "MIDNIGHT SESSIONS",
    photoCount: 10,
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
    photos: [
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 1" },
      { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 2" },
      { src: "https://images.unsplash.com/photo-1553783308-b9bb4ba7e9d1?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 3" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 4" },
      { src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 5" },
      { src: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 6" },
      { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 7" },
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 8" },
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 9" },
      { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop&crop=center", title: "Midnight Sessions - Foto 10" }
    ]
  },
]

// Open collection modal
const openCollection = (collection) => {
  selectedCollection.value = collection
  currentPhotoIndex.value = 0
  if (process.client) {
    document.body.style.overflow = 'hidden'
  }
}

// Close collection modal
const closeCollection = () => {
  selectedCollection.value = null
  currentPhotoIndex.value = 0
  if (process.client) {
    document.body.style.overflow = ''
  }
}

// Navigation functions for gallery
const nextPhoto = () => {
  if (gallerySwiper.value && gallerySwiper.value.swiper) {
    gallerySwiper.value.swiper.slideNext()
  }
}

const previousPhoto = () => {
  if (gallerySwiper.value && gallerySwiper.value.swiper) {
    gallerySwiper.value.swiper.slidePrev()
  }
}

// Update current photo index when slide changes
const onSlideChange = (swiper) => {
  currentPhotoIndex.value = swiper.activeIndex
}

// Content section with video and photo grid

// YouTube video URL
const youtubeUrl = 'https://www.youtube.com/watch?v=SOH49z-S0G0'

// Convert YouTube URL to privacy-enhanced embed URL (no cookies, no ads)
const youtubeEmbedUrl = computed(() => {
  const videoId = youtubeUrl.split('v=')[1]?.split('&')[0]
  if (!videoId) {
    if (process.dev) {
      console.error('Invalid YouTube URL:', youtubeUrl)
    }
    return ''
  }
  // Use youtube-nocookie.com to prevent cookies and tracking
  // Parameters: no ads, no related videos, minimal branding, no info cards
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0&playsinline=1`
})

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

// Copy video link to clipboard
const copyVideoLink = async () => {
  try {
    await navigator.clipboard.writeText(youtubeUrl)
    // Link copied successfully (could add toast notification here)
  } catch (err) {
    // Fallback for older browsers
    if (process.dev) {
      console.warn('Clipboard API failed, using fallback:', err)
    }
    const textArea = document.createElement('textarea')
    textArea.value = youtubeUrl
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
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
