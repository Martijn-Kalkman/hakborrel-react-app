    <template>
  <!-- Event Agenda Section -->
  <section id="agenda" class="relative section-padding overflow-hidden">
    <!-- Agenda-specific background elements -->
    <div 
      class="absolute inset-0 opacity-10"
      style="
        background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'10\' r=\'1\'/%3E%3Ccircle cx=\'50\' cy=\'10\' r=\'1\'/%3E%3Ccircle cx=\'10\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'50\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'10\' cy=\'50\' r=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'50\' r=\'1\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');
        animation: hexagon-move 15s linear infinite;
      "
    />

    <!-- Subtle side glows -->
    <div class="absolute top-1/2 left-0 w-60 h-60 bg-green-500/12 rounded-full blur-[100px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 8s;" />
    <div class="absolute top-1/2 right-0 w-60 h-60 bg-purple-500/12 rounded-full blur-[100px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 10s; animation-delay: 2s;" />
    
    <!-- Subtle floating agenda indicators -->
    <div class="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500/25 rounded-full animate-wave-motion" style="animation-duration: 6s;" />
    <div class="absolute top-1/4 right-1/4 w-4 h-4 bg-purple-500/25 rounded-full animate-wave-motion" style="animation-duration: 7s; animation-delay: 1s;" />
    
    <!-- Subtle floating particles -->
    <div class="absolute top-1/3 left-1/3 w-2 h-2 bg-green-500/15 rounded-full animate-atmospheric-drift" />
    <div class="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-500/15 rounded-full animate-atmospheric-drift" style="animation-delay: 3s;" />
    
    <!-- Subtle central accent -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-full blur-[120px] animate-subtle-glow" style="animation-duration: 6s;" />

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Professional header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-4 mb-8">
          <div class="w-1 h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
          <h2 class="text-5xl md:text-7xl font-display">
            <span class="text-white">EVENT </span>
            <span class="text-gradient-primary">AGENDA</span>
          </h2>
          <div class="w-1 h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
        </div>
        <p class="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-body mb-12">
          Check out the complete lineup and schedule for our upcoming event.
        </p>

        <!-- Event info card -->
        <div class="card-professional p-8 max-w-4xl mx-auto mb-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-green-500/20 p-4 rounded-xl border border-green-500/30 w-fit mx-auto mb-4">
                <svg class="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-gradient-primary text-xl font-heading mb-2">DATE</h3>
              <p class="text-gray-300 font-body">{{ formatDate(eventInfo.date) }}</p>
            </div>
            <div class="text-center">
              <div class="bg-purple-500/20 p-4 rounded-xl border border-purple-500/30 w-fit mx-auto mb-4">
                <svg class="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-gradient-secondary text-xl font-heading mb-2">VENUE</h3>
              <p class="text-gray-300 font-body">{{ eventInfo.venue }}</p>
            </div>
            <div class="text-center">
              <div class="bg-green-500/20 p-4 rounded-xl border border-green-500/30 w-fit mx-auto mb-4">
                <svg class="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-gradient-primary text-xl font-heading mb-2">TIMES</h3>
              <p class="text-gray-300 font-body">Doors: {{ eventInfo.doors }} | End: {{ eventInfo.end }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lineup display -->
      <div class="max-w-6xl mx-auto mb-16">
        <div
          v-for="stage in lineupData"
          :key="stage.id"
          class="mb-16"
        >
          <div class="text-center mb-8">
            <h3 :class="[
              'text-3xl font-display mb-2',
              stage.color === 'primary' ? 'text-gradient-primary' : 'text-gradient-secondary'
            ]">
              {{ stage.name }}
            </h3>
            <div :class="[
              'w-24 h-1 mx-auto rounded-full',
              stage.color === 'primary' ? 'bg-green-500' : 'bg-purple-500'
            ]"></div>
          </div>

          <div class="space-y-4">
            <div
              v-for="(event, index) in stage.events"
              :key="index"
              class="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-4 sm:p-6 hover:border-green-500/60 transition-all duration-300 hover:bg-black/90 group"
            >
              <!-- Mobile Layout: Stack vertically -->
              <div class="flex flex-col sm:hidden gap-4">
                <!-- Top Row: Date and Icon with Title -->
                <div class="flex items-center gap-3">
                  <div class="flex flex-col items-center min-w-[50px]">
                    <div class="text-2xl font-bold text-green-500">
                      {{ event.date }}
                    </div>
                    <div class="text-gray-400 text-xs font-body uppercase tracking-wide">
                      {{ event.month }}
                    </div>
                  </div>
                  <div :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                    stage.color === 'primary' 
                      ? 'bg-gradient-to-b from-green-500/30 to-purple-500/30 border border-green-500/30' 
                      : 'bg-gradient-to-b from-purple-500/30 to-green-500/30 border border-purple-500/30'
                  ]">
                    <span class="text-white text-xs font-bold uppercase">
                      {{ event.icon }}
                    </span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-white text-base font-heading truncate h-6 leading-6">{{ event.artist }}</h4>
                  </div>
                </div>
                
                <!-- Details Section -->
                <div class="pl-1">
                  <p class="text-gray-400 text-sm font-body truncate mb-1">{{ event.location }}</p>
                  <p class="text-green-500 font-body text-sm">{{ event.time }}</p>
                </div>

                <!-- Actions -->
                <div>
                  <button class="border border-gray-400 text-gray-400 hover:border-green-500 hover:text-green-500 px-4 py-2 rounded-full text-sm font-body transition-all duration-300 w-full text-center">
                    Meer info
                  </button>
                </div>
              </div>

              <!-- Desktop Layout: Horizontal -->
              <div class="hidden sm:flex items-center gap-4 md:gap-6">
                <!-- Date Section -->
                <div class="flex flex-col items-center min-w-[80px]">
                  <div class="text-4xl font-bold text-green-500 mb-1">
                    {{ event.date }}
                  </div>
                  <div class="text-gray-400 text-sm font-body uppercase tracking-wide">
                    {{ event.month }}
                  </div>
                </div>

                <!-- Event Icon -->
                <div :class="[
                  'w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0',
                  stage.color === 'primary' 
                    ? 'bg-gradient-to-b from-green-500/30 to-purple-500/30 border border-green-500/30' 
                    : 'bg-gradient-to-b from-purple-500/30 to-green-500/30 border border-purple-500/30'
                ]">
                  <span class="text-white text-xs font-bold uppercase">
                    {{ event.icon }}
                  </span>
                </div>

                <!-- Event Details -->
                <div class="flex-1 min-w-0">
                  <h4 class="text-white text-xl font-heading mb-2">{{ event.artist }}</h4>
                  <p class="text-gray-400 font-body mb-1 truncate">{{ event.location }}</p>
                  <p class="text-green-500 font-body text-sm">{{ event.time }}</p>
                </div>

                <!-- Actions -->
                <div class="flex flex-col items-end gap-3 flex-shrink-0">
                  <button class="border border-gray-400 text-gray-400 hover:border-green-500 hover:text-green-500 px-4 py-2 rounded-full text-sm font-body transition-all duration-300 whitespace-nowrap">
                    Meer info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional action button -->
      <div class="text-center mt-20">
        <button class="btn-professional px-12 py-4 text-lg cursor-pointer">
          GET TICKETS NOW
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>

// Sample lineup data - replace with real data
const lineupData = [
  {
    id: "main-stage",
    name: "MAIN STAGE",
    color: "primary",
    events: [
      { 
        date: "20", 
        month: "SEPTEMBER", 
        time: "22:00 - 06:00", 
        artist: "THUNDER STORM", 
        genre: "Hardcore", 
        location: "Industrial Warehouse, Rotterdam",
        status: "confirmed",
        icon: "THUNDER"
      },
      { 
        date: "21", 
        month: "SEPTEMBER", 
        time: "23:00 - 05:00", 
        artist: "BASS DESTROYER", 
        genre: "Hardcore", 
        location: "Industrial Warehouse, Rotterdam",
        status: "confirmed",
        icon: "BASS"
      },
      { 
        date: "22", 
        month: "SEPTEMBER", 
        time: "22:30 - 06:30", 
        artist: "NEON PULSE", 
        genre: "Hardcore", 
        location: "Industrial Warehouse, Rotterdam",
        status: "confirmed",
        icon: "NEON"
      },
    ]
  }
]

const eventInfo = {
  date: "2024-04-20",
  venue: "Industrial Warehouse, Rotterdam",
  doors: "21:00",
  end: "06:00"
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
