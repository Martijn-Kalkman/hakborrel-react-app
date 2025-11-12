<template>
  <div class="relative bg-black overflow-x-hidden h-screen flex flex-col">
    <!-- Background Effects - Matching home page -->
    <div class="fixed inset-0 bg-black" />
    <div class="fixed inset-0 bg-gradient-to-br from-green-500/6 via-transparent to-purple-500/8" />
    
    <!-- Atmospheric Glows - Matching home page -->
    <div class="fixed top-1/4 left-1/4 w-64 h-64 bg-green-500/6 rounded-full blur-[150px] animate-smooth-flow" style="animation-duration: 20s;" />
    <div class="fixed top-3/4 right-1/4 w-64 h-64 bg-purple-500/6 rounded-full blur-[150px] animate-smooth-flow" style="animation-duration: 25s; animation-delay: 5s;" />
    
    <!-- Simplified Noise Texture - Matching home page -->
    <div class="fixed inset-0 opacity-[0.015]" style="background-image: url('data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.5\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.3\'/%3E%3C/svg%3E');" />
    
    <!-- Diagonal Pattern - Matching home page -->
    <div 
      class="absolute inset-0 opacity-3"
      :style="{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255, 255, 255, 0.01) 4px, rgba(255, 255, 255, 0.01) 8px)'
      }"
    />

    <Navigation />

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 w-full max-w-4xl flex-1 flex flex-col justify-center overflow-y-auto py-4">
      <!-- Header Section -->
      <div class="text-center mb-4 sm:mb-6">
        <!-- Title with vertical bars - Matching EventsSection style -->
        <div class="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div class="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-500 to-purple-500/50"></div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-display">
            <span class="text-white">COMMUNITY RAVES</span>
          </h1>
          <div class="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-500 to-purple-500/50"></div>
        </div>

        <!-- Subtitle -->
        <p class="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-2 leading-relaxed font-body">
          Betreed het verborgen rijk van HAKBORREL
        </p>
        <p class="text-gray-400 text-xs sm:text-sm font-body max-w-xl mx-auto">
          Toegang tot exclusieve content, privé-evenementen en onvertelde verhalen
        </p>
      </div>

      <!-- Information Card - Using card-professional -->
      <div class="card-professional p-4 sm:p-5 md:p-6">
        <!-- Icon -->
        <div class="text-center mb-4 sm:mb-5">
          <div class="inline-flex items-center justify-center bg-purple-500/20 p-3 rounded-xl border border-purple-500/30 mb-3">
            <Icon name="heroicons:users" size="24px" class="text-purple-500 sm:w-6 sm:h-6" />
          </div>
        </div>

        <!-- General Information -->
        <div class="space-y-3 sm:space-y-4 mb-4 sm:mb-5">
          <div class="text-center">
            <h2 class="text-lg sm:text-xl font-display text-white mb-2 sm:mb-3">
              Toelatingsvragenlijst
            </h2>
            <p class="text-gray-300 text-xs sm:text-sm font-body leading-relaxed mb-3">
              Welkom bij de toelatingsvragenlijst voor SECRET CHAPTERS. Deze vragenlijst helpt ons om te begrijpen wie je bent en hoe je bij HAKBORREL bent gekomen.
            </p>
          </div>

          <div class="space-y-2 sm:space-y-3">
            <div class="flex items-start gap-2 sm:gap-3">
              <div class="w-5 h-5 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="heroicons:information-circle" size="14px" class="text-purple-500" />
              </div>
              <div>
                <h3 class="text-white font-medium mb-0.5 text-xs sm:text-sm">Wat kun je verwachten?</h3>
                <p class="text-gray-400 text-[10px] sm:text-xs leading-relaxed">
                  De vragenlijst bestaat uit een aantal vragen over jezelf en je connectie met de hardcore community. Dit helpt ons om de juiste mensen te vinden voor onze exclusieve evenementen.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-2 sm:gap-3">
              <div class="w-5 h-5 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="heroicons:clock" size="14px" class="text-green-500" />
              </div>
              <div>
                <h3 class="text-white font-medium mb-0.5 text-xs sm:text-sm">Hoe lang duurt het?</h3>
                <p class="text-gray-400 text-[10px] sm:text-xs leading-relaxed">
                  De vragenlijst duurt ongeveer 5-10 minuten om in te vullen. Neem de tijd om eerlijk en uitgebreid te antwoorden.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-2 sm:gap-3">
              <div class="w-5 h-5 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="heroicons:lock-closed" size="14px" class="text-purple-500" />
              </div>
              <div>
                <h3 class="text-white font-medium mb-0.5 text-xs sm:text-sm">Privacy</h3>
                <p class="text-gray-400 text-[10px] sm:text-xs leading-relaxed">
                  Alle informatie die je deelt wordt vertrouwelijk behandeld en alleen gebruikt voor toelatingsdoeleinden.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Start Button -->
        <div class="text-center">
          <NuxtLink to="/questionnaire">
            <button class="btn-professional btn-secondary w-full sm:w-auto px-6 sm:px-10 py-3 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 min-h-[44px]">
              <span>Begin Vragenlijst</span>
              <Icon name="heroicons:arrow-right" size="18px" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Secret Chapters - HAKBORREL',
  meta: [
    {
      name: 'description',
      content: 'Betreed het verborgen rijk van HAKBORREL. Exclusieve content en privé-evenementen wachten op je.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>

<style scoped>
/* Match home page styling */

/* Mobile-specific improvements */
@media (max-width: 640px) {
  /* Ensure footer text doesn't overflow */
  p {
    word-break: break-word;
  }
}
</style>
