<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0">
    
    <!-- Simplified diagonal pattern -->
    <div 
      class="absolute inset-0 opacity-3"
      style="
        background-image: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 4px,
          rgba(255, 255, 255, 0.01) 4px,
          rgba(255, 255, 255, 0.01) 8px
        );
      "
    />

    <!-- Reduced corner glow effects - Only 2 instead of 4 -->
    <div class="absolute top-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-green-500/6 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-smooth-flow" />
    <div class="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-500/6 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 animate-smooth-flow" style="animation-delay: 3s;" />
    
    <!-- Removed floating particles and atmospheric glows for better performance -->

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col items-center text-center">
      <!-- Logo and Title -->
      <div class="mb-6 md:mb-8 flex items-center justify-center gap-2 md:gap-4 px-3 md:px-6 flex-shrink-0">
        <NuxtImg 
          src="/logo/HakBorrel-LOGOS_white 1.png"
          alt="HakBorrel Logo"
          class="object-contain flex-shrink-0"
          style="width: 112px; height: 112px;"
          loading="eager"
          format="webp"
          quality="100"
          sizes="112px"
        />
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display leading-tight flex-shrink-0">
          <span class="text-white">HAKBORREL</span>
        </h1>
      </div>

      <!-- Slogan -->
      <div class="mb-4 md:mb-6">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-display mb-2 md:mb-4 tracking-wider max-w-2xl mx-auto text-center leading-tight px-4">
          <span class="text-gradient-primary">Join our hardcore adventure</span>
        </h2>
      </div>

      <!-- Subtitle -->
      <p class="text-gray-400 text-xs sm:text-sm md:text-base mb-8 md:mb-16 tracking-wider max-w-2xl mx-auto text-center leading-relaxed font-body uppercase px-4">
        UNDERGROUND • HARDCORE • MOVEMENT
      </p>

      <div class="w-full max-w-5xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
          <!-- Open Gatherings Card -->
          <div class="card-professional p-4 md:p-6 group">
            <div class="flex items-start gap-4 mb-6">
              <div class="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                <Icon name="heroicons:globe-alt" size="24px" class="text-green-500" />
              </div>
              <div class="text-left flex-1">
                <h3 class="text-gradient-primary text-xl font-heading mb-3">OPEN GATHERINGS</h3>
                <p class="text-gray-300 text-sm leading-relaxed font-body">
                  Public events for everyone. Experience the energy, feel the bass, join the collective underground movement.
                </p>
              </div>
            </div>
            <NuxtLink to="/tickets">
              <button class="btn-professional w-full text-black font-semibold py-3 text-base group-hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2">
                GET TICKETS
                <Icon name="heroicons:chevron-right" size="16px" />
              </button>
            </NuxtLink>
          </div>

          <!-- Community Raves Card -->
          <div class="card-professional p-4 md:p-6 group">
            <div class="flex items-start gap-4 mb-6">
              <div class="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
                <Icon name="heroicons:lock-closed" size="24px" class="text-purple-500" />
              </div>
              <div class="text-left flex-1">
                <h3 class="text-gradient-secondary text-xl font-heading mb-3">COMMUNITY RAVES</h3>
                <p class="text-gray-300 text-sm leading-relaxed font-body">
                  Exclusive underground events. Hidden locations, secret lineups, intimate experiences for the initiated.
                </p>
              </div>
            </div>
            <NuxtLink to="/tickets">
              <button class="btn-professional btn-secondary w-full text-white font-semibold py-3 text-base group-hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2">
                GET TICKETS
                <Icon name="heroicons:chevron-right" size="16px" />
              </button>
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <!-- Events Card -->
          <div class="card-professional p-3 md:p-4 text-center group">
            <div class="flex justify-center mb-4">
              <div class="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                <Icon name="heroicons:musical-note" size="24px" class="text-green-500" />
              </div>
            </div>
            <h3 class="text-gradient-primary text-lg font-heading mb-2">EVENTS</h3>
            <p class="text-gray-400 text-xs mb-4 font-body">Upcoming shows and festivals</p>
            <NuxtLink to="/tickets">
              <button class="btn-professional px-4 py-2 text-xs group-hover:scale-105 cursor-pointer">
                GET TICKETS
              </button>
            </NuxtLink>
          </div>

          <!-- Community Card -->
          <div class="card-professional p-3 md:p-4 text-center group">
            <div class="flex justify-center mb-4">
              <div class="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
                <Icon name="heroicons:users" size="24px" class="text-purple-500" />
              </div>
            </div>
            <h3 class="text-gradient-secondary text-lg font-heading mb-2">COMMUNITY</h3>
            <p class="text-gray-400 text-xs mb-4 font-body">Join the underground movement</p>
            <NuxtLink to="/tickets">
              <button class="btn-professional btn-secondary px-4 py-2 text-xs group-hover:scale-105 cursor-pointer">
                GET TICKETS
              </button>
            </NuxtLink>
          </div>

          <!-- Music Card -->
          <div class="card-professional p-3 md:p-4 text-center group">
            <div class="flex justify-center mb-4">
              <div class="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                <Icon name="heroicons:speaker-wave" size="24px" class="text-green-500" />
              </div>
            </div>
            <h3 class="text-gradient-primary text-lg font-heading mb-2">MUSIC</h3>
            <p class="text-gray-400 text-xs mb-4 font-body">Latest tracks and mixes</p>
            <NuxtLink to="/tickets">
              <button class="btn-professional px-4 py-2 text-xs group-hover:scale-105 cursor-pointer">
                GET TICKETS
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>