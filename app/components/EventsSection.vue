<template>
  <!-- Events Section -->
  <div id="events" class="relative section-padding overflow-hidden pb-16">
    
    <!-- Simplified static pattern -->
    <div class="absolute inset-0 opacity-5" 
         style="background-image: url('data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.01\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'90\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'90\' r=\'1\'/%3E%3Ccircle cx=\'90\' cy=\'90\' r=\'1\'/%3E%3Ccircle cx=\'60\' cy=\'60\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');" />

    <!-- Reduced side glows - Only 2 instead of 6 -->
    <div class="absolute top-1/2 left-0 w-48 h-48 bg-green-500/12 rounded-full blur-[80px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 20s;" />
    <div class="absolute top-1/2 right-0 w-48 h-48 bg-purple-500/12 rounded-full blur-[80px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 25s; animation-delay: 5s;" />

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="text-center mb-12 sm:mb-16 lg:mb-20">
        <div class="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div class="w-1 h-8 sm:h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
          <h2 class="text-4xl md:text-6xl font-display">
            <span class="text-white">UPCOMING </span>
            <span class="text-gradient-primary">EVENTS</span>
          </h2>
          <div class="w-1 h-8 sm:h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
        </div>
        <p class="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-body">
          Sluit je aan bij onze open bijeenkomsten. Ervaar de energie, voel de bass, en word onderdeel van de underground beweging.
        </p>
        
        <!-- Professional status indicators -->
        <div class="flex justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-400">
          <div class="flex items-center gap-1 sm:gap-2">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Beschikbaar</span>
          </div>
          <div class="flex items-center gap-1 sm:gap-2">
            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Bijna Uitverkocht</span>
          </div>
          <div class="flex items-center gap-1 sm:gap-2">
            <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Uitverkocht</span>
          </div>
        </div>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="event in upcomingEvents" :key="event.id" @click="openEventModal(event)" class="group relative bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] h-full flex flex-col w-full cursor-pointer">
          
          <!-- Status Badge -->
          <div v-if="event.status === 'selling-fast'" class="absolute top-4 right-4 z-10 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold">
            SELLING FAST
          </div>
          <div v-if="event.status === 'sold-out'" class="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            SOLD OUT
          </div>

          <!-- Image -->
          <div class="relative h-40 sm:h-48 overflow-hidden">
            <NuxtImg 
              :src="event.image" 
              :alt="event.title"
              class="object-cover group-hover:scale-110 transition-transform duration-500"
              style="width: 100%; height: 100%;"
              loading="lazy"
              format="webp"
              quality="100"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          <!-- Content -->
          <div class="p-4 sm:p-6 flex-1 flex flex-col">
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-500 transition-colors">
              {{ event.title }}
            </h3>

            <div class="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <div class="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                <Icon name="heroicons:calendar" class="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span>{{ event.formattedDate }} • {{ event.time }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                <Icon name="heroicons:map-pin" class="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span>{{ event.location }}</span>
              </div>
            </div>

            <p class="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 flex-1">{{ event.description }}</p>

            <div class="flex items-center justify-between mt-auto">
              <span class="text-green-500 text-xs sm:text-sm font-bold group-hover:underline">Bekijk Details</span>
              <Icon name="heroicons:chevron-right" class="h-4 w-4 sm:h-5 sm:w-5 text-green-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      <!-- Event Modal Overlay -->
      <Teleport to="body">
        <div v-if="selectedEvent" 
             @click.self="closeEventModal"
             class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div class="relative bg-black/95 border border-green-500/30 rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            <!-- Close Button -->
            <button @click="closeEventModal" class="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors bg-black/50 rounded-full p-2">
              <Icon name="heroicons:x-mark" class="h-5 w-5" />
            </button>

            <!-- Modal Content -->
            <div class="p-6 md:p-8">
              <!-- Event Image -->
              <div class="relative h-56 md:h-80 rounded-lg overflow-hidden mb-6">
                <NuxtImg 
                  :src="selectedEvent.image" 
                  :alt="selectedEvent.title"
                  class="object-cover w-full h-full"
                  loading="eager"
                  format="webp"
                  quality="100"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <!-- Status Badge -->
                <div v-if="selectedEvent.status === 'selling-fast'" class="absolute top-4 right-4 bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  SELLING FAST
                </div>
                <div v-if="selectedEvent.status === 'sold-out'" class="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  SOLD OUT
                </div>
                <div v-if="selectedEvent.status === 'available'" class="absolute top-4 right-4 bg-green-500/20 border border-green-500/50 text-green-500 px-4 py-2 rounded-full text-sm font-bold">
                  AVAILABLE
                </div>
              </div>

              <!-- Event Header -->
              <div class="mb-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-gray-400 text-sm font-body uppercase tracking-wide">{{ selectedEvent.genre || 'Hardcore Techno' }}</span>
                </div>
                <h2 class="text-3xl md:text-5xl font-display text-white mb-4">
                  {{ selectedEvent.title }}
                </h2>
              </div>

              <!-- Quick Info Grid -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="card-professional p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <Icon name="heroicons:calendar" class="h-4 w-4 text-green-500" />
                    <span class="text-gray-400 text-xs font-body uppercase">Datum</span>
                  </div>
                  <div class="text-white font-heading text-sm">{{ selectedEvent.formattedDate }}</div>
                </div>
                
                <div class="card-professional p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <Icon name="heroicons:clock" class="h-4 w-4 text-green-500" />
                    <span class="text-gray-400 text-xs font-body uppercase">Tijd</span>
                  </div>
                  <div class="text-white font-heading text-sm">{{ selectedEvent.time }}</div>
                </div>
                
                <div class="card-professional p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <Icon name="heroicons:map-pin" class="h-4 w-4 text-green-500" />
                    <span class="text-gray-400 text-xs font-body uppercase">Locatie</span>
                  </div>
                  <div class="text-white font-heading text-sm">{{ selectedEvent.location }}</div>
                </div>
                
                <div class="card-professional p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <Icon name="heroicons:ticket" class="h-4 w-4 text-green-500" />
                    <span class="text-gray-400 text-xs font-body uppercase">Prijs</span>
                  </div>
                  <div class="text-white font-heading text-sm">{{ selectedEvent.price || 'TBA' }}</div>
                </div>
              </div>

              <!-- Full Description -->
              <div class="mb-6">
                <h3 class="text-gradient-primary text-xl font-heading mb-3 flex items-center gap-2">
                  <Icon name="heroicons:information-circle" class="h-5 w-5" />
                  Over Dit Evenement
                </h3>
                <div class="text-gray-300 font-body leading-relaxed whitespace-pre-line">
                  {{ selectedEvent.fullDescription || selectedEvent.description }}
                </div>
              </div>

              <!-- Lineup -->
              <div v-if="selectedEvent.lineup && selectedEvent.lineup.length > 0" class="mb-6">
                <h3 class="text-gradient-primary text-xl font-heading mb-3 flex items-center gap-2">
                  <Icon name="heroicons:musical-note" class="h-5 w-5" />
                  Lineup
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div v-for="(artist, index) in selectedEvent.lineup" :key="index" class="flex items-center gap-2 text-gray-300 py-2 border-b border-white/5 last:border-0">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span class="font-body">{{ artist }}</span>
                  </div>
                </div>
              </div>

              <!-- Practical Info -->
              <div class="mb-6">
                <h3 class="text-gradient-primary text-xl font-heading mb-4 flex items-center gap-2">
                  <Icon name="heroicons:clipboard-document-list" class="h-5 w-5" />
                  Praktische Informatie
                </h3>
                <div class="space-y-4">
                  <div v-if="selectedEvent.schedule" class="flex items-start gap-3">
                    <Icon name="heroicons:clock" class="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <div class="text-white font-heading text-sm mb-1">Tijdschema</div>
                      <div class="text-gray-400 font-body text-sm">{{ selectedEvent.schedule }}</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-3">
                    <Icon name="heroicons:map-pin" class="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <div class="text-white font-heading text-sm mb-1">Locatie</div>
                      <div class="text-gray-400 font-body text-sm">{{ selectedEvent.location }}</div>
                      <div v-if="selectedEvent.address" class="text-gray-500 font-body text-xs mt-1">{{ selectedEvent.address }}</div>
                    </div>
                  </div>

                  <div v-if="selectedEvent.ageRestriction" class="flex items-start gap-3">
                    <Icon name="heroicons:user" class="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <div class="text-white font-heading text-sm mb-1">Leeftijdsgrens</div>
                      <div class="text-gray-400 font-body text-sm">{{ selectedEvent.ageRestriction }}</div>
                    </div>
                  </div>

                  <div v-if="selectedEvent.dressCode" class="flex items-start gap-3">
                    <Icon name="heroicons:sparkles" class="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <div class="text-white font-heading text-sm mb-1">Kledingvoorschrift</div>
                      <div class="text-gray-400 font-body text-sm">{{ selectedEvent.dressCode }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Additional Info -->
              <div v-if="selectedEvent.additionalInfo" class="mb-6">
                <h3 class="text-gradient-primary text-xl font-heading mb-3 flex items-center gap-2">
                  <Icon name="heroicons:exclamation-triangle" class="h-5 w-5" />
                  Belangrijke Opmerkingen
                </h3>
                <div class="text-gray-300 font-body leading-relaxed whitespace-pre-line text-sm">
                  {{ selectedEvent.additionalInfo }}
                </div>
              </div>

              <!-- Price & Ticket Button -->
              <div class="card-professional p-6 mt-6">
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div class="text-center sm:text-left">
                    <div class="text-gray-400 text-sm font-body mb-1">Ticketprijs</div>
                    <div class="text-3xl font-bold text-gradient-primary">{{ selectedEvent.price || 'TBA' }}</div>
                    <div v-if="selectedEvent.priceNote" class="text-gray-400 text-xs font-body mt-1">{{ selectedEvent.priceNote }}</div>
                  </div>
                  <a :href="selectedEvent.ticketUrl" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
                    <button 
                      :disabled="selectedEvent.status === 'sold-out'"
                      class="btn-professional w-full sm:w-auto px-8 py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {{ selectedEvent.status === 'sold-out' ? 'UITVERKOCHT' : 'TICKETS KOPEN' }}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>

      <!-- Professional action button -->
      <div class="text-center mt-12 sm:mt-16 lg:mt-20">
        <a href="/tickets">
          <button class="btn-professional px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg cursor-pointer">
            ALLE EVENEMENTEN BEKIJKEN
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Selected event for modal
const selectedEvent = ref(null)

// Events data
const upcomingEvents = [
  {
    id: "1",
    title: "UNDERGROUND RAVE #23",
    date: "2024-03-15",
    time: "23:00",
    location: "Secret Location, Amsterdam",
    address: "Exact location revealed 24 hours before the event",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    description: "Experience the raw energy of hardcore techno in an intimate underground setting.",
    fullDescription: "Join us for an unforgettable night of underground hardcore techno at our secret location in Amsterdam. This intimate gathering brings together the best local and international DJs for a night of relentless beats and raw energy.\n\nExpect an immersive audiovisual experience with state-of-the-art sound systems, mesmerizing light shows, and an atmosphere like no other. This is more than a rave—it's a journey into the heart of the hardcore movement.\n\nThe location will be revealed 24 hours before the event to ticket holders. Be ready for an adventure.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-23",
    status: "available",
    formattedDate: "15 maart 2024",
    price: "€25",
    priceNote: "Early bird pricing",
    schedule: "Doors open at 23:00 | Event until 06:00",
    ageRestriction: "18+",
    dressCode: "All black preferred",
    genre: "Hardcore Techno",
    lineup: [
      "DJ HAKBORREL",
      "BASS DESTROYER",
      "NEON PULSE",
      "THUNDER STRIKE"
    ],
    additionalInfo: "• No re-entry allowed\n• ID required at entrance\n• Lockers available\n• Cash and card payments accepted"
  },
  {
    id: "2",
    title: "HARDCORE FESTIVAL 2024",
    date: "2024-04-20",
    time: "20:00",
    location: "Industrial Warehouse, Rotterdam",
    address: "Warehouse District, Rotterdam",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&crop=center",
    description: "The biggest hardcore gathering of the year with international DJs.",
    fullDescription: "The HARDCORE FESTIVAL 2024 is our biggest event of the year. This massive gathering brings together over 50 DJs from around the world in an industrial warehouse setting that perfectly captures the underground spirit.\n\nWith multiple stages, international headliners, and an epic 12-hour lineup, this is the hardcore event you've been waiting for. Experience raw, unfiltered hardcore techno from the pioneers of the genre alongside the hottest new talent.\n\nThe festival features:\n• 3 stages with different vibes\n• International headliners\n• Local talent showcase\n• Professional sound systems\n• Immersive light and visual installations\n• Food and drink vendors\n• Chill-out areas",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-festival",
    status: "available",
    formattedDate: "20 april 2024",
    price: "€45",
    priceNote: "Regular admission",
    schedule: "Doors open at 20:00 | Festival until 08:00",
    ageRestriction: "18+",
    dressCode: "Rave attire welcome",
    genre: "Hardcore Techno",
    lineup: [
      "INTERNATIONAL HEADLINER",
      "DJ MASTERMIND",
      "BASS CRUSHER",
      "NEON WARRIOR",
      "HARDCORE PHENOMENON",
      "THUNDER BOLT",
      "And 40+ more artists"
    ],
    additionalInfo: "• Multiple stages\n• Food vendors available\n• Lockers and coat check\n• Parking available\n• Public transport accessible"
  },
  {
    id: "3",
    title: "MIDNIGHT SESSIONS",
    date: "2024-05-10",
    time: "00:00",
    location: "Underground Bunker, Utrecht",
    address: "Location TBA",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
    description: "Deep underground vibes with the hardest beats until sunrise.",
    fullDescription: "MIDNIGHT SESSIONS takes you deep into the underground. Starting at midnight and going until sunrise, this is for the true hardcore warriors who don't know when to stop.\n\nThe unique bunker location adds to the raw, underground atmosphere. Expect minimal decor, maximum sound, and an intimate crowd of dedicated ravers who live and breathe hardcore.\n\nThis is not a mainstream event. This is pure, unadulterated underground culture. Be ready for:\n• Deep, dark hardcore beats\n• Minimal visual distractions\n• Focus on the music\n• Extended DJ sets\n• Sunrise finish",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-midnight",
    status: "selling-fast",
    formattedDate: "10 mei 2024",
    price: "€20",
    priceNote: "Limited capacity",
    schedule: "Starts at 00:00 | Until sunrise",
    ageRestriction: "21+",
    dressCode: "Dark/Underground",
    genre: "Dark Hardcore",
    lineup: [
      "MIDNIGHT MASTER",
      "DARK FREQUENCY",
      "BUNKER SOUNDS",
      "UNDERGROUND LEGEND"
    ],
    additionalInfo: "• Very limited capacity\n• Location revealed to ticket holders only\n• No phone policy (lockers provided)\n• Bring earplugs\n• Experience-focused event"
  }
]

// Modal functions
const openEventModal = (event) => {
  selectedEvent.value = event
  // Prevent body scroll when modal is open
  if (process.client) {
    document.body.style.overflow = 'hidden'
  }
}

const closeEventModal = () => {
  selectedEvent.value = null
  // Restore body scroll
  if (process.client) {
    document.body.style.overflow = ''
  }
}

// Handle Escape key to close modal
const handleEscapeKey = (e) => {
  if (e.key === 'Escape' && selectedEvent.value) {
    closeEventModal()
  }
}

onMounted(() => {
  if (process.client) {
    document.addEventListener('keydown', handleEscapeKey)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    document.removeEventListener('keydown', handleEscapeKey)
    // Restore body scroll if modal was open
    document.body.style.overflow = ''
  }
})
</script>
