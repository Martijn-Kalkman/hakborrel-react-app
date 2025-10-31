<template>
  <section id="story" class="relative min-h-[calc(100vh-64px)] min-h-[calc(100dvh-64px)] px-3 sm:px-4 md:px-6 overflow-x-hidden py-3 sm:py-4 md:py-6 flex flex-col story-section-content">
    <div class="container mx-auto relative z-10 max-w-4xl flex-1 flex flex-col">
      <div class="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 flex-shrink-0">
        <div class="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
          <div class="w-1 h-4 sm:h-6 md:h-8" style="background-color: #00D32C;"></div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <span class="text-white">THE STORY OF</span>
            <span style="color: #00D32C;"> HAKBORREL</span>
          </h2>
          <div class="w-1 h-4 sm:h-6 md:h-8" style="background-color: #00D32C;"></div>
        </div>
        <p class="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
          Not just a party. It's a movement.
        </p>
      </div>

      <div class="space-y-4 sm:space-y-6 md:space-y-8 flex-1 overflow-y-auto">
        <div class="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-[#00D32C]/30 transition-all duration-300">
          <div class="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
            <div class="bg-[#00D32C]/10 p-2 sm:p-3 md:p-4 rounded-xl border border-[#00D32C]/20 flex-shrink-0">
              <Icon name="heroicons:heart" class="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" style="color: #00D32C;" />
            </div>
            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white">Ons Begin</h3>
          </div>
          <div class="space-y-2 sm:space-y-3 md:space-y-4 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            <p>
              HAKborrel begon als een simpel idee: creëer een ruimte waar hardcore muziekliefhebbers konden samenkomen zonder
              pretentie, zonder oordeel, gewoon pure energie en authentieke verbinding.
            </p>
            <p>
              Wat begon als kleine bijeenkomsten op underground locaties is uitgegroeid tot een beweging die steden omspant,
              waarbij mensen samenkomen die begrijpen dat hardcore niet alleen muziek is—het is een levensstijl.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <div class="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-3 sm:p-4 md:p-6 hover:border-[#00D32C]/30 transition-all duration-300 group">
            <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
              <div class="bg-[#00D32C]/10 p-2 sm:p-3 rounded-lg border border-[#00D32C]/20 group-hover:bg-[#00D32C]/20 transition-colors flex-shrink-0">
                <Icon name="heroicons:users" class="h-4 w-4 sm:h-5 sm:w-5" style="color: #00D32C;" />
              </div>
              <h4 class="text-sm sm:text-base md:text-lg font-bold text-white">Community Eerst</h4>
            </div>
            <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Elk evenement is gebouwd rondom de community. Wij geloven in het creëren van ruimtes waar iedereen zich welkom voelt,
              ongeacht achtergrond of ervaringsniveau.
            </p>
          </div>

          <div class="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-3 sm:p-4 md:p-6 hover:border-purple-500/30 transition-all duration-300 group">
            <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
              <div class="bg-purple-500/10 p-2 sm:p-3 rounded-lg border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                <Icon name="heroicons:musical-note" class="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
              </div>
              <h4 class="text-sm sm:text-base md:text-lg font-bold text-white">Muziekkwaliteit</h4>
            </div>
            <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Wij cureren lineups die het beste van hardcore muziek vertegenwoordigen, van gevestigde legendes tot opkomende
              talenten die de grenzen van het genre verleggen.
            </p>
          </div>

          <div class="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-3 sm:p-4 md:p-6 hover:border-[#00D32C]/30 transition-all duration-300 group">
            <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
              <div class="bg-[#00D32C]/10 p-2 sm:p-3 rounded-lg border border-[#00D32C]/20 group-hover:bg-[#00D32C]/20 transition-colors flex-shrink-0">
                <Icon name="heroicons:bolt" class="h-4 w-4 sm:h-5 sm:w-5" style="color: #00D32C;" />
              </div>
              <h4 class="text-sm sm:text-base md:text-lg font-bold text-white">Ruwe Energie</h4>
            </div>
            <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Onze evenementen vangen de rauwe, ongefilterde energie die hardcore cultuur definieert. Geen compromissen, geen
              commerciële overwegingen—gewoon pure underground geest.
            </p>
          </div>

          <div class="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-3 sm:p-4 md:p-6 hover:border-purple-500/30 transition-all duration-300 group">
            <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
              <div class="bg-purple-500/10 p-2 sm:p-3 rounded-lg border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                <Icon name="heroicons:heart" class="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
              </div>
              <h4 class="text-sm sm:text-base md:text-lg font-bold text-white">Authentieke Ervaring</h4>
            </div>
            <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Van geheime locaties tot intieme venues, elk detail is ontworpen om een authentieke underground
              ervaring te creëren die de wortels van hardcore cultuur eert.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// The Story of HAKBORREL section
</script>
