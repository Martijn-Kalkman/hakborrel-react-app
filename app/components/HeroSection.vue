<template>
  <section class="relative min-h-[calc(100vh-64px)] min-h-[calc(100dvh-64px)] flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 hero-section-content mobile-hero-section desktop-hero-section">
    
    <!-- Simplified diagonal pattern -->
    <div 
      class="absolute inset-0 opacity-3"
      :style="patternStyle"
    />

    <!-- Reduced corner glow effects - Only 2 instead of 4 -->
    <div class="absolute top-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-green-500/6 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-smooth-flow" />
    <div class="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-500/6 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 animate-smooth-flow" style="animation-delay: 3s;" />
    
    <!-- Removed floating particles and atmospheric glows for better performance -->

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center text-center">
      <!-- Logo and Title -->
      <div class="mb-6 md:mb-8 lg:mb-10 flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-3 md:px-6 flex-shrink-0">
        <NuxtImg 
          :src="logoPath"
          alt="HakBorrel Logo"
          class="object-contain flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
          loading="eager"
          format="webp"
          fetchpriority="high"
          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px, 128px"
        />
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-display leading-tight flex-shrink-0">
          <span class="text-white">HAKBORREL</span>
        </h1>
      </div>

      <!-- Slogan -->
      <div class="mb-4 md:mb-6 lg:mb-8">
        <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display mb-2 sm:mb-3 md:mb-4 tracking-wider max-w-3xl mx-auto text-center leading-tight px-2 sm:px-4">
          <span class="text-gradient-primary">Join Our Hardcore Adventure</span>
        </h2>
      </div>

      <div class="w-full max-w-5xl md:max-w-6xl lg:max-w-5xl flex-shrink-0 px-2 sm:px-4 md:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 mb-4 md:mb-6">
          <!-- Open Gatherings Card -->
          <div class="card-professional card-green p-3 md:p-4 lg:p-5 group">
            <div class="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
              <div class="bg-green-500/20 p-2 md:p-2.5 rounded-xl border border-green-500/30 flex-shrink-0">
                <Icon name="heroicons:globe-alt" size="18px" class="text-green-500 md:w-5 md:h-5" />
              </div>
              <div class="text-left flex-1 min-w-0">
                <h3 class="text-gradient-primary text-sm md:text-base lg:text-lg font-heading mb-1">OPEN GATHERINGS</h3>
                <p class="text-gray-300 text-xs md:text-sm leading-relaxed font-body">
                  Big Hardcore events for everyone. They fuel the vibe — and the future
                </p>
              </div>
            </div>
            <NuxtLink to="/tickets">
              <button class="btn-professional w-full text-black font-semibold py-2.5 md:py-3 text-sm md:text-base group-hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2">
                GET TICKETS
                <Icon name="heroicons:chevron-right" size="16px" />
              </button>
            </NuxtLink>
          </div>

          <!-- Community Raves Card -->
          <div class="card-professional card-purple p-3 md:p-4 lg:p-5 group">
            <div class="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
              <div class="bg-purple-500/20 p-2 md:p-2.5 rounded-xl border border-purple-500/30 flex-shrink-0">
                <Icon name="heroicons:lock-closed" size="18px" class="text-purple-500 md:w-5 md:h-5" />
              </div>
              <div class="text-left flex-1 min-w-0">
                <h3 class="text-gradient-secondary text-sm md:text-base lg:text-lg font-heading mb-1">COMMUNITY RAVES</h3>
                <p class="text-gray-300 text-xs md:text-sm leading-relaxed font-body">
                  Exclusive events. Acces by dedication — or by referral from the community
                </p>
              </div>
            </div>
            <NuxtLink to="/tickets">
              <button class="btn-professional btn-secondary w-full text-white font-semibold py-2.5 md:py-3 text-sm md:text-base group-hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2">
                JOIN
                <Icon name="heroicons:chevron-right" size="16px" />
              </button>
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-3">
          <!-- Events Card -->
          <NuxtLink to="/#events" class="card-professional card-green p-2 md:p-3 text-center group cursor-pointer">
            <div class="flex justify-center mb-2">
              <div class="bg-green-500/20 p-2 rounded-xl border border-green-500/30">
                <Icon name="heroicons:musical-note" size="16px" class="text-green-500 md:w-4 md:h-4" />
              </div>
            </div>
            <h3 class="text-gradient-primary text-xs md:text-sm font-heading mb-1">EVENTS</h3>
            <p class="text-gray-400 text-[10px] md:text-xs mb-2 font-body">Upcoming shows and festivals</p>
          </NuxtLink>

          <!-- Community Card -->
          <NuxtLink to="/#community" class="card-professional card-purple p-2 md:p-3 text-center group cursor-pointer">
            <div class="flex justify-center mb-2">
              <div class="bg-purple-500/20 p-2 rounded-xl border border-purple-500/30">
                <Icon name="heroicons:users" size="16px" class="text-purple-500 md:w-4 md:h-4" />
              </div>
            </div>
            <h3 class="text-gradient-secondary text-xs md:text-sm font-heading mb-1">COMMUNITY</h3>
            <p class="text-gray-400 text-[10px] md:text-xs mb-2 font-body">Join the underground movement</p>
          </NuxtLink>

          <!-- Content Card -->
          <NuxtLink to="/#media" class="card-professional card-green p-2 md:p-3 text-center group cursor-pointer">
            <div class="flex justify-center mb-2">
              <div class="bg-green-500/20 p-2 rounded-xl border border-green-500/30">
                <Icon name="heroicons:speaker-wave" size="16px" class="text-green-500 md:w-4 md:h-4" />
              </div>
            </div>
            <h3 class="text-gradient-primary text-xs md:text-sm font-heading mb-1">CONTENT</h3>
            <p class="text-gray-400 text-[10px] md:text-xs mb-2 font-body">Latest tracks and mixes</p>
          </NuxtLink>
        </div>
        
        <!-- Scroll Arrow - positioned under the 3 blocks -->
        <div class="mt-4 md:mt-6 flex justify-center">
          <button 
            @click="scrollToNext"
            class="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 group"
          >
            <span class="text-xs uppercase tracking-wider font-body">Scroll</span>
            <Icon name="heroicons:chevron-down" size="24px" class="animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Use computed to ensure proper path handling in production
const logoPath = computed(() => '/logo/hakborrel.png')
const { scrollToNext } = useScrollSnap()

// Computed style to ensure consistent formatting between server and client
// This prevents hydration mismatches
const patternStyle = computed(() => ({
  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255, 255, 255, 0.01) 4px, rgba(255, 255, 255, 0.01) 8px)'
}))
</script>