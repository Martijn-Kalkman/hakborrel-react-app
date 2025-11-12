<template>
  <!-- Events Section -->
  <div id="events" class="relative min-h-[calc(100vh-64px)] min-h-[calc(100dvh-64px)] overflow-x-hidden flex flex-col events-section-content">
    
    <!-- Simplified static pattern -->
    <div class="absolute inset-0 opacity-5" 
         style="background-image: url('data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.01\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'90\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'90\' r=\'1\'/%3E%3Ccircle cx=\'90\' cy=\'90\' r=\'1\'/%3E%3Ccircle cx=\'60\' cy=\'60\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');" />

    <!-- Reduced side glows - Only 2 instead of 6 -->
    <div class="absolute top-1/2 left-0 w-48 h-48 bg-green-500/6 rounded-full blur-[80px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 20s;" />
    <div class="absolute top-1/2 right-0 w-48 h-48 bg-purple-500/6 rounded-full blur-[80px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 25s; animation-delay: 5s;" />

    <div class="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 relative z-10 flex-1 flex flex-col">
      <div class="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 flex-shrink-0">
        <div class="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
          <div class="w-1 h-4 sm:h-6 md:h-8 lg:h-10 bg-gradient-to-b from-green-500 to-green-500/50"></div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display">
            <span class="text-gradient-primary">EVENTS</span>
          </h2>
          <div class="w-1 h-4 sm:h-6 md:h-8 lg:h-10 bg-gradient-to-b from-green-500 to-green-500/50"></div>
        </div>
        <p class="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-2 sm:mb-3 md:mb-4 leading-relaxed font-body px-2">
          Sluit je aan bij onze open bijeenkomsten. Ervaar de energie, voel de bass, en word onderdeel van de underground beweging.
        </p>
      </div>


      <!-- Events Slider -->
      <div class="relative pb-12 flex items-center justify-center gap-3 md:gap-4 flex-1">
        <!-- Navigation Arrow - Previous -->
        <button class="swiper-button-prev-events flex-shrink-0 bg-black/50 hover:bg-green-500/20 hover:border-green-500/50 border border-transparent rounded-full p-3 text-white hover:text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] hidden md:flex items-center justify-center z-10 cursor-pointer">
          <Icon name="heroicons:chevron-left" class="h-6 w-6" />
        </button>

        <!-- Swiper Container -->
        <div class="flex-1 min-w-0">
          <Swiper
            ref="eventsSwiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="20"
            :navigation="{
              nextEl: '.swiper-button-next-events',
              prevEl: '.swiper-button-prev-events',
            }"
            :breakpoints="{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2.5, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 }
            }"
            class="events-swiper"
          >
            <SwiperSlide v-for="event in displayedEvents" :key="event.id">
              <div @click="openEventModal(event)" class="group relative bg-black/60 backdrop-blur-sm border border-green-500/70 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] h-full flex flex-col w-full cursor-pointer">
                <!-- Image -->
                <div class="relative h-40 sm:h-48 overflow-hidden">
                  <NuxtImg 
                    :src="event.image" 
                    :alt="event.title"
                    class="object-cover group-hover:scale-110 transition-transform duration-500"
                    style="width: 100%; height: 100%;"
                    loading="lazy"
                    format="webp"
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
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- Navigation Arrow - Next -->
        <button class="swiper-button-next-events flex-shrink-0 bg-black/50 hover:bg-green-500/20 hover:border-green-500/50 border border-transparent rounded-full p-3 text-white hover:text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] hidden md:flex items-center justify-center z-10 cursor-pointer">
          <Icon name="heroicons:chevron-right" class="h-6 w-6" />
        </button>
      </div>


      <!-- Event Modal Overlay -->
      <Teleport to="body">
        <div v-if="selectedEvent" 
             @click.self="closeEventModal"
             class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            ref="modalContent"
            class="relative bg-black/95 border border-green-500/30 rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto overscroll-contain"
            style="scrollbar-width: thin; scrollbar-color: rgba(57, 255, 20, 0.3) transparent;"
          >
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
                  preset="hero"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
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

              <!-- Price Info -->
              <div class="card-professional p-6 mt-6">
                <div class="text-center">
                  <div class="text-gray-400 text-sm font-body mb-1">Ticketprijs</div>
                  <div class="text-3xl font-bold text-gradient-primary">{{ selectedEvent.price || 'TBA' }}</div>
                  <div v-if="selectedEvent.priceNote" class="text-gray-400 text-xs font-body mt-1">{{ selectedEvent.priceNote }}</div>
                  <div v-if="selectedEvent.status === 'past'" class="mt-4">
                    <div class="bg-gray-500/20 border border-gray-500/30 text-gray-400 px-8 py-3 text-lg font-semibold rounded-lg text-center inline-block">
                      DIT EVENEMENT IS VERSTREKEN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>

    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'

// Selected event for modal
const selectedEvent = ref(null)
const modalContent = ref(null)

// Swiper instance
const eventsSwiper = ref(null)
const modules = [Navigation]

// All events data (both upcoming and past)
const allEvents = [
  // Test event for January 3rd - HAKBORREL RIVERSIDE EDITION (UPCOMING)
  {
    id: "test-jan-3",
    title: "HAKBORREL RIVERSIDE EDITION",
    date: "2026-01-03",
    time: "19:00-02:00",
    location: "ZALMHUIS ROOFTOP BAR",
    address: "Zalmhuis Rooftop Bar, Rotterdam",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center", // Placeholder - will be replaced with actual photo from flyer
    description: "Join us for the Riverside Edition featuring legendary hardcore artists at Zalmhuis Rooftop Bar.",
    fullDescription: "HAKBORREL RIVERSIDE EDITION brings the underground to the rooftop. Experience an unforgettable night of hardcore techno at one of Rotterdam's most iconic venues.\n\nThis exclusive event features legendary artists from the hardcore scene, delivering relentless beats and raw energy against the stunning backdrop of Rotterdam's skyline. The Zalmhuis Rooftop Bar provides the perfect setting for this special edition—combining the raw power of hardcore music with an elevated atmosphere.\n\nExpect:\n• Legendary hardcore lineup\n• State-of-the-art sound system\n• Stunning rooftop views\n• Immersive light show\n• Exclusive atmosphere\n• Invites only event",
    ticketUrl: "https://sales.ticketing.cm.com/HAKborrelRiversideEdition",
    status: "available",
    formattedDate: "3 januari 2026",
    price: "TBA",
    priceNote: "Ticket prices to be announced",
    schedule: "Doors open at 19:00 | Event until 02:00",
    ageRestriction: "18+",
    dressCode: "Gabberwear appreciated",
    genre: "Hardcore Techno",
    lineup: [
      "Darkraver",
      "DJ Rob & MC Joe",
      "Hysta",
      "Marc Arcardipane",
      "Potato",
      "Promo",
      "Ricky da Dragon",
      "Hosted by Alee"
    ],
    additionalInfo: "• Invites only\n• Gabberwear appreciated\n• ID required at entrance\n• Lockers available\n• Cash and card payments accepted"
  },
  // Past events (4 past events - will use photos from app)
  {
    id: "1",
    title: "UNDERGROUND RAVE #23",
    date: "2024-03-15",
    time: "23:00",
    location: "Secret Location, Amsterdam",
    address: "Exact location revealed 24 hours before the event",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center", // Placeholder - will be replaced with actual photo
    description: "Experience the raw energy of hardcore techno in an intimate underground setting.",
    fullDescription: "Join us for an unforgettable night of underground hardcore techno at our secret location in Amsterdam. This intimate gathering brings together the best local and international DJs for a night of relentless beats and raw energy.\n\nExpect an immersive audiovisual experience with state-of-the-art sound systems, mesmerizing light shows, and an atmosphere like no other. This is more than a rave—it's a journey into the heart of the hardcore movement.\n\nThe location will be revealed 24 hours before the event to ticket holders. Be ready for an adventure.",
    ticketUrl: "",
    status: "past",
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
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&crop=center", // Placeholder - will be replaced with actual photo
    description: "The biggest hardcore gathering of the year with international DJs.",
    fullDescription: "The HARDCORE FESTIVAL 2024 is our biggest event of the year. This massive gathering brings together over 50 DJs from around the world in an industrial warehouse setting that perfectly captures the underground spirit.\n\nWith multiple stages, international headliners, and an epic 12-hour lineup, this is the hardcore event you've been waiting for. Experience raw, unfiltered hardcore techno from the pioneers of the genre alongside the hottest new talent.\n\nThe festival features:\n• 3 stages with different vibes\n• International headliners\n• Local talent showcase\n• Professional sound systems\n• Immersive light and visual installations\n• Food and drink vendors\n• Chill-out areas",
    ticketUrl: "",
    status: "past",
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
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop&crop=center", // Placeholder - will be replaced with actual photo
    description: "Deep underground vibes with the hardest beats until sunrise.",
    fullDescription: "MIDNIGHT SESSIONS takes you deep into the underground. Starting at midnight and going until sunrise, this is for the true hardcore warriors who don't know when to stop.\n\nThe unique bunker location adds to the raw, underground atmosphere. Expect minimal decor, maximum sound, and an intimate crowd of dedicated ravers who live and breathe hardcore.\n\nThis is not a mainstream event. This is pure, unadulterated underground culture. Be ready for:\n• Deep, dark hardcore beats\n• Minimal visual distractions\n• Focus on the music\n• Extended DJ sets\n• Sunrise finish",
    ticketUrl: "",
    status: "past",
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
    additionalInfo: "This event has passed. Thank you to everyone who attended!"
  }
]

// Computed property to show all events in one slider (upcoming first, then past)
const displayedEvents = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  // Separate upcoming and past events
  const upcoming = allEvents.filter(event => {
    const eventDate = new Date(event.date)
    eventDate.setHours(0, 0, 0, 0)
    return eventDate >= today
  }).sort((a, b) => {
    // Sort upcoming events by date (soonest first)
    return new Date(a.date) - new Date(b.date)
  })
  
  const past = allEvents.filter(event => {
    const eventDate = new Date(event.date)
    eventDate.setHours(0, 0, 0, 0)
    return eventDate < today
  }).sort((a, b) => {
    // Sort past events by date (newest first)
    return new Date(b.date) - new Date(a.date)
  })
  
  // Combine: upcoming first, then past
  return [...upcoming, ...past]
})


// Modal functions
const openEventModal = (event) => {
  selectedEvent.value = event
  // Prevent body scroll when modal is open
  if (process.client) {
    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
  }
}

const closeEventModal = () => {
  selectedEvent.value = null
  // Restore body scroll
  if (process.client) {
    const scrollY = document.body.style.top
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
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

<style scoped>
/* Events Swiper Custom Styles */
:global(.events-swiper .swiper-button-prev-events),
:global(.events-swiper .swiper-button-next-events) {
  color: #22c55e;
  width: 48px;
  height: 48px;
}

:global(.events-swiper .swiper-button-prev-events:hover),
:global(.events-swiper .swiper-button-next-events:hover) {
  color: #16a34a;
}

:global(.events-swiper .swiper-button-prev-events::after),
:global(.events-swiper .swiper-button-next-events::after) {
  display: none;
}

/* Ensure slides have proper height */
:global(.events-swiper .swiper-slide) {
  height: auto;
}
</style>
