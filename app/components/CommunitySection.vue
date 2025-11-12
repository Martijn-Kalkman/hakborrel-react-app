<template>
  <section id="community" class="relative min-h-[calc(100vh-64px)] min-h-[calc(100dvh-64px)] px-3 sm:px-4 md:px-6 overflow-x-hidden py-3 sm:py-4 md:py-6 flex flex-col community-section-content">
    <!-- Community-specific hexagonal pattern -->
    <div 
      class="absolute inset-0 opacity-20"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M30 0l26 15v30L30 60 4 45V15L30 0z\'/%3E%3C/g%3E%3C/svg%3E'); animation: hexagon-move 15s linear infinite;"
    />

    <!-- Breathing side glows -->
    <div class="absolute top-1/2 left-0 w-80 h-80 rounded-full blur-[100px] -translate-y-1/2 animate-pulse" style="background-color: rgba(0, 211, 44, 0.15); animation-duration: 4s;" />
    <div class="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-[100px] -translate-y-1/2 animate-pulse" style="background-color: rgba(147, 51, 234, 0.15); animation-duration: 5s; animation-delay: 1s;" />
    
    <!-- Floating access indicators -->
    <div class="absolute top-1/4 left-1/4 w-6 h-6 rounded-full animate-bounce" style="background-color: rgba(0, 211, 44, 0.4); animation-duration: 2s;" />
    <div class="absolute top-1/4 right-1/4 w-6 h-6 rounded-full animate-bounce" style="background-color: rgba(147, 51, 234, 0.4); animation-duration: 2.5s; animation-delay: 0.5s;" />
    
    <!-- Central pulsing accent -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] animate-pulse" style="background: linear-gradient(to right, rgba(0, 211, 44, 0.08), rgba(147, 51, 234, 0.08)); animation-duration: 6s;" />

    <div class="container mx-auto relative z-10 max-w-7xl flex-1 flex flex-col">
      <div class="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 flex-shrink-0">
        <div class="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
          <div class="w-1 h-4 sm:h-6 md:h-8" style="background-color: #00D32C;"></div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display">
            <span class="text-white">COMMUNITY</span>
            <span style="color: #00D32C;"> RAVES</span>
          </h2>
          <div class="w-1 h-4 sm:h-6 md:h-8" style="background-color: #00D32C;"></div>
        </div>
      </div>

      <!-- Community Raves Card (Single Block - Centered) -->
      <div class="flex items-center justify-center flex-1 overflow-y-auto">
        <div class="w-full max-w-2xl bg-black/60 backdrop-blur-sm border border-purple-500/70 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 group hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 flex flex-col">
          <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
            <div class="rounded-lg flex items-center justify-center p-3 sm:p-4 md:p-5 flex-shrink-0 bg-purple-500/20 border border-purple-500/30">
              <Icon name="heroicons:users" class="text-purple-500 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            </div>
            <div class="min-w-0">
              <h3 class="text-purple-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">COMMUNITY RAVES</h3>
            </div>
          </div>

          <div class="space-y-3 sm:space-y-3.5 md:space-y-4 mb-5 sm:mb-6 md:mb-8 flex-1">
            <div class="flex items-center gap-3 text-gray-300 text-sm sm:text-base md:text-lg">
              <Icon name="heroicons:lock-closed" class="text-purple-500 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span class="min-w-0">Invites only</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300 text-sm sm:text-base md:text-lg">
              <Icon name="heroicons:map-pin" class="text-purple-500 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span class="min-w-0">Signature venues</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300 text-sm sm:text-base md:text-lg">
              <Icon name="heroicons:users" class="text-purple-500 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span class="min-w-0">Intimate atmosphere</span>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink to="/questionnaire" class="block w-full">
              <button class="w-full bg-purple-600 hover:bg-purple-600/90 text-white font-semibold py-2.5 sm:py-3 md:py-3 text-sm sm:text-base md:text-base rounded-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                JOIN
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Community Raves section with NuxtIcons
</script>

<style scoped>
@keyframes hexagon-move {
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(10px) translateY(-5px);
  }
  50% {
    transform: translateX(0) translateY(-10px);
  }
  75% {
    transform: translateX(-10px) translateY(-5px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
</style>