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
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <span class="text-white">COMMUNITY</span>
            <span style="color: #00D32C;"> RAVES</span>
          </h2>
          <div class="w-1 h-4 sm:h-6 md:h-8" style="background-color: #00D32C;"></div>
        </div>
        <p class="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-2 sm:mb-3 md:mb-4 leading-relaxed px-2">
          Kies je ervaring: Open bijeenkomsten voor iedereen of exclusieve geheime evenementen voor ingewijden.
        </p>
      </div>

      <!-- Two side-by-side cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-1 overflow-y-auto">   
        <!-- Open Gatherings Card -->
        <div class="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4 md:p-5 group hover:border-green-500 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300 h-full flex flex-col">
          <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div class="rounded-lg flex items-center justify-center p-2 sm:p-2.5 flex-shrink-0 bg-green-500/20">
              <Icon name="heroicons:globe-alt" class="text-green-500 text-base sm:text-lg md:text-xl" />
            </div>
            <div class="min-w-0">
              <h3 class="text-green-500 text-sm sm:text-base md:text-lg font-bold">OPEN GATHERINGS</h3>
              <p class="text-gray-400 text-xs sm:text-sm">Openbare evenementen voor iedereen</p>
            </div>
          </div>

          <div class="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 flex-1">
            <div class="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Icon name="heroicons:users" class="text-green-500 h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
              <span class="min-w-0">Open voor alle hardcore liefhebbers</span>
            </div>
            <div class="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Icon name="heroicons:calendar" class="text-green-500 h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
              <span class="min-w-0">Reguliere maandelijkse evenementen</span>
            </div>
            <div class="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Icon name="heroicons:map-pin" class="text-green-500 h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
              <span class="min-w-0">Openbare locaties en venues</span>
            </div>
            <div class="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Icon name="heroicons:musical-note" class="text-green-500 h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
              <span class="min-w-0">Gevariëerde lineup van DJ's</span>
            </div>
          </div>

          <div class="mt-auto space-y-2 sm:space-y-3">
            <div class="bg-green-500/10 rounded-lg p-2 sm:p-3">
              <h4 class="font-semibold mb-1 text-xs sm:text-sm text-green-500">Volgend Open Evenement</h4>
              <p class="text-gray-300 text-xs sm:text-sm mb-1">UNDERGROUND RAVE #23</p>
              <p class="text-gray-400 text-[10px] sm:text-xs">15 december 2025 • Amsterdam</p>
            </div>
            
            <NuxtLink to="/tickets" class="block w-full">
              <button class="w-full bg-green-500 hover:bg-green-500/90 text-black font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base rounded-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                OPEN EVENEMENTEN BEKIJKEN
              </button>
            </NuxtLink>
          </div>
        </div>

        <!-- Secret Events Card -->
        <div class="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4 md:p-5 group hover:border-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300 h-full flex flex-col">
          <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div class="rounded-lg flex items-center justify-center p-2 sm:p-2.5 flex-shrink-0 bg-purple-500/20">
              <Icon name="heroicons:lock-closed" class="text-purple-500 text-base sm:text-lg md:text-xl" />
            </div>
            <div class="min-w-0">
              <h3 class="text-purple-500 text-sm sm:text-base md:text-lg font-bold">SECRET EVENTS</h3>
              <p class="text-gray-400 text-xs sm:text-sm">Exclusieve underground bijeenkomsten</p>
            </div>
          </div>

          <div class="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 flex-1">
            <div class="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Icon name="heroicons:lock-closed" class="text-purple-500 h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
              <span class="min-w-0">Alleen op uitnodiging community toegang</span>
            </div>
            <div class="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Icon name="heroicons:map-pin" class="text-purple-500 h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
              <span class="min-w-0">Verborgen locaties onthuld 24 uur van tevoren</span>
            </div>
            <div class="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Icon name="heroicons:musical-note" class="text-purple-500 h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
              <span class="min-w-0">Geheime lineups en speciale gasten</span>
            </div>
            <div class="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Icon name="heroicons:users" class="text-purple-500 h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
              <span class="min-w-0">Intieme sfeer, beperkte capaciteit</span>
            </div>
          </div>

          <div class="mt-auto space-y-2 sm:space-y-3">
            <div class="bg-purple-500/10 rounded-lg p-2 sm:p-3">
              <h4 class="text-purple-500 font-semibold mb-1 text-xs sm:text-sm">Toegang Vereist</h4>
              <p class="text-gray-300 text-xs sm:text-sm mb-1">Voer je community code in om te ontgrendelen</p>
              <p class="text-gray-400 text-[10px] sm:text-xs">Woon een evenement bij om je toegangscode te ontvangen</p>
            </div>

            <div class="space-y-2">
              <input
                type="text"
                placeholder="Voer je code in..."
                class="bg-black/40 border-purple-500/50 text-white placeholder:text-gray-400 focus:border-purple-500 h-8 sm:h-9 md:h-10 w-full rounded-md border px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors outline-none"
              />

              <button class="w-full bg-purple-500 hover:bg-purple-500/90 text-white font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base rounded-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                GEHEIME TOEGANG ONTSLUITEN
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional info -->
      <div class="mt-4 sm:mt-6 md:mt-8 text-center flex-shrink-0">
        <div class="bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 sm:p-4 md:p-4 lg:p-4 max-w-4xl mx-auto">
          <h4 class="text-white text-sm sm:text-base md:text-sm lg:text-base font-bold mb-2 sm:mb-3 md:mb-2 lg:mb-3">HOE HET WERKT</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-300">
            <div class="text-center">
              <div class="bg-green-500/20 w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-2 lg:mb-3">
                <span class="text-green-500 font-bold text-sm sm:text-base md:text-sm lg:text-base">1</span>
              </div>
              <h5 class="font-semibold mb-1 sm:mb-2 md:mb-1 lg:mb-2 text-xs sm:text-sm md:text-xs lg:text-sm">Woon Open Evenementen Bij</h5>
              <p class="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">Begin met onze openbare bijeenkomsten om de community te ervaren</p>
            </div>
            <div class="text-center">
              <div class="bg-purple-500/20 w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-2 lg:mb-3">
                <span class="text-purple-500 font-bold text-sm sm:text-base md:text-sm lg:text-base">2</span>
              </div>
              <h5 class="font-semibold mb-1 sm:mb-2 md:mb-1 lg:mb-2 text-xs sm:text-sm md:text-xs lg:text-sm">Krijg Je Code</h5>
              <p class="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">Ontvang je exclusieve toegangscode bij het evenement</p>
            </div>
            <div class="text-center">
              <div class="bg-green-500/20 w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-2 lg:mb-3">
                <span class="text-green-500 font-bold text-sm sm:text-base md:text-sm lg:text-base">3</span>
              </div>
              <h5 class="font-semibold mb-1 sm:mb-2 md:mb-1 lg:mb-2 text-xs sm:text-sm md:text-xs lg:text-sm">Ontsluit Geheimen</h5>
              <p class="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">Krijg toegang tot exclusieve evenementen en verborgen locaties</p>
            </div>
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