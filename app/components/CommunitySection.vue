<template>
  <section id="community" class="relative py-24 px-6 overflow-hidden">
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

    <div class="container mx-auto relative z-10 max-w-7xl">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-1 h-8" style="background-color: #00D32C;"></div>
          <h2 class="text-4xl md:text-6xl font-bold">
            <span class="text-white">COMMUNITY</span>
            <span style="color: #00D32C;"> RAVES</span>
          </h2>
          <div class="w-1 h-8" style="background-color: #00D32C;"></div>
        </div>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          Choose your experience: Open gatherings for everyone or exclusive secret events for the initiated.
        </p>
      </div>

      <!-- Two side-by-side cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">   
        <!-- Open Gatherings Card -->
        <div class="bg-black/60 backdrop-blur-sm border border-[#00D32C]/30 rounded-xl p-8 group hover:border-[#00D32C]/60 hover:bg-black/70 hover:scale-[1.02] transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="rounded-lg flex items-center justify-center p-4" style="background-color: rgba(0, 211, 44, 0.2);">
                <Icon
  name="heroicons:globe-alt"
  class="text-[#00D32C] text-[2rem]"
/>
            </div>
            <div>
              <h3 class="text-2xl font-bold" style="color: #00D32C;">OPEN GATHERINGS</h3>
              <p class="text-gray-400 text-sm">Public events for everyone</p>
            </div>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="heroicons:users" class="text-[1.5rem]" style="color: #00D32C;" />
              <span>Open to all hardcore enthusiasts</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="heroicons:calendar" class="text-[1.5rem]" style="color: #00D32C;" />
              <span>Regular monthly events</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="heroicons:map-pin" class="text-[1.5rem]" style="color: #00D32C;" />
              <span>Public venues and locations</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="heroicons:musical-note" class="text-[1.5rem]" style="color: #00D32C;" />
              <span>Diverse lineup of DJs</span>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-[#00D32C]/10 rounded-lg p-4">
              <h4 class="font-semibold mb-2" style="color: #00D32C;">Next Open Event</h4>
              <p class="text-gray-300 text-sm mb-2">UNDERGROUND RAVE #23</p>
              <p class="text-gray-400 text-xs">March 15, 2024 • Secret Location, Amsterdam</p>
            </div>
            
            <button class="w-full font-semibold py-3 text-lg group-hover:scale-[1.02] cursor-pointer rounded-md transition-all text-black hover:opacity-90" style="background-color: #00D32C;">
              VIEW OPEN EVENTS
            </button>
          </div>
        </div>

        <!-- Secret Events Card -->
        <div class="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 group hover:border-purple-500/60 hover:bg-black/70 hover:scale-[1.02] transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="rounded-lg flex items-center justify-center p-4" style="background-color: rgba(147, 51, 234, 0.2);">
              <Icon
                name="heroicons:lock-closed"
                class="text-purple-500 text-[2rem]"
              />
            </div>
            <div>
              <h3 class="text-purple-500 text-2xl font-bold">SECRET EVENTS</h3>
              <p class="text-gray-400 text-sm">Exclusive underground gatherings</p>
            </div>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="heroicons:lock-closed" class="text-[1.5rem] text-purple-500" />
              <span>Invite-only community access</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="heroicons:map-pin" class="text-[1.5rem] text-purple-500" />
              <span>Hidden locations revealed 24h before</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="heroicons:musical-note" class="text-[1.5rem] text-purple-500" />
              <span>Secret lineups and special guests</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="heroicons:users" class="text-[1.5rem] text-purple-500" />
              <span>Intimate atmosphere, limited capacity</span>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-purple-500/10 rounded-lg p-4">
              <h4 class="text-purple-500 font-semibold mb-2">Access Required</h4>
              <p class="text-gray-300 text-sm mb-2">Enter your community code to unlock</p>
              <p class="text-gray-400 text-xs">Attend an event to receive your access code</p>
            </div>

            <div class="space-y-3">
              <input
                type="text"
                placeholder="Enter your code..."
                class="bg-black/40 border-purple-500/50 text-white placeholder:text-gray-400 focus:border-purple-500 h-10 w-full rounded-md border px-3 py-2 text-sm transition-colors outline-none"
              />

              <button class="w-full bg-purple-500 hover:bg-purple-500/90 text-white font-semibold py-3 text-lg rounded-md transition-all">
                UNLOCK SECRET ACCESS
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional info -->
      <div class="mt-12 text-center">
        <div class="bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 max-w-4xl mx-auto">
          <h4 class="text-white text-lg font-bold mb-4">HOW IT WORKS</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
            <div class="text-center">
              <div class="bg-[#00D32C]/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="text-[#00D32C] font-bold">1</span>
              </div>
              <h5 class="font-semibold mb-2">Attend Open Events</h5>
              <p>Start with our public gatherings to experience the community</p>
            </div>
            <div class="text-center">
              <div class="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="text-purple-500 font-bold">2</span>
              </div>
              <h5 class="font-semibold mb-2">Get Your Code</h5>
              <p>Receive your exclusive access code at the event</p>
            </div>
            <div class="text-center">
              <div class="bg-[#00D32C]/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="text-[#00D32C] font-bold">3</span>
              </div>
              <h5 class="font-semibold mb-2">Unlock Secrets</h5>
              <p>Access exclusive events and hidden locations</p>
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