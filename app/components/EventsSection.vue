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
            <span class="text-white">{{ showingPastEvents ? 'VERLEDEN' : 'UPCOMING' }} </span>
            <span class="text-gradient-primary">EVENTS</span>
          </h2>
          <div class="w-1 h-4 sm:h-6 md:h-8 lg:h-10 bg-gradient-to-b from-green-500 to-green-500/50"></div>
        </div>
        <p class="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-2 sm:mb-3 md:mb-4 leading-relaxed font-body px-2">
          Sluit je aan bij onze open bijeenkomsten. Ervaar de energie, voel de bass, en word onderdeel van de underground beweging.
        </p>
        
        <!-- Professional status indicators -->
        <div class="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-[10px] sm:text-xs text-gray-400 mb-2 sm:mb-3 md:mb-4 flex-wrap">
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

      <!-- Events Selector/Tabs -->
      <div class="flex justify-center mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
        <div class="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-1 flex gap-1">
          <button
            @click="showingPastEvents = false"
            :class="[
              'px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-md transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base',
              showingPastEvents 
                ? 'text-gray-400 hover:text-gray-300' 
                : 'bg-green-500 text-black shadow-lg'
            ]"
          >
            AANKOMENDE EVENEMENTEN
          </button>
          <button
            @click="showingPastEvents = true"
            :class="[
              'px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-md transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base',
              showingPastEvents 
                ? 'bg-green-500 text-black shadow-lg' 
                : 'text-gray-400 hover:text-gray-300'
            ]"
          >
            VERLEDEN EVENEMENTEN
          </button>
        </div>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-1 overflow-y-auto">
        <div v-for="event in displayedEvents" :key="event.id" @click="openEventModal(event)" class="group relative bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] h-full flex flex-col w-full cursor-pointer">
          
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

      <!-- Get Your Tickets Button -->
      <div class="text-center mt-4 sm:mt-6 md:mt-8 flex-shrink-0">
        <NuxtLink to="/tickets">
          <button class="bg-green-500 hover:bg-green-500/90 text-black font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base md:text-lg">
            GET YOUR TICKETS!
          </button>
        </NuxtLink>
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
                  <div v-if="selectedEvent.status !== 'past'" class="w-full sm:w-auto">
                    <a v-if="selectedEvent.ticketUrl" :href="selectedEvent.ticketUrl" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
                    <button 
                      :disabled="selectedEvent.status === 'sold-out'"
                      class="btn-professional w-full sm:w-auto px-8 py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {{ selectedEvent.status === 'sold-out' ? 'UITVERKOCHT' : 'TICKETS KOPEN' }}
                    </button>
                  </a>
                    <button 
                      v-else
                      disabled
                      class="btn-professional w-full sm:w-auto px-8 py-3 text-lg font-semibold opacity-50 cursor-not-allowed"
                    >
                      TICKETS BINNENKORT
                    </button>
                  </div>
                  <div v-else class="w-full sm:w-auto">
                    <div class="bg-gray-500/20 border border-gray-500/30 text-gray-400 px-8 py-3 text-lg font-semibold rounded-lg text-center">
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Selected event for modal
const selectedEvent = ref(null)

// Toggle state for showing past events
const showingPastEvents = ref(false)

// All events data (both upcoming and past)
const allEvents = [
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
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
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
  },
  // Additional past events
  {
    id: "10",
    title: "SPRING HARDCORE SESSION",
    date: "2023-05-20",
    time: "22:00",
    location: "Industrial Warehouse, Amsterdam",
    address: "Warehouse District, Amsterdam",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
    description: "An epic spring gathering that kicked off the season.",
    fullDescription: "SPRING HARDCORE SESSION was one of our most successful events. This massive warehouse gathering brought together the finest hardcore talent for an unforgettable night.\n\nThe event featured:\n• Multiple stages\n• International DJs\n• Professional sound systems\n• Amazing atmosphere\n• Extended hours until sunrise",
    ticketUrl: "",
    status: "past",
    formattedDate: "20 mei 2023",
    price: "€35",
    schedule: "Started at 22:00 | Until 08:00",
    ageRestriction: "18+",
    dressCode: "Rave attire welcome",
    genre: "Hardcore Techno",
    lineup: [
      "SPRING WARRIOR",
      "BASS DESTROYER",
      "NEON PULSE",
      "THUNDER STRIKE"
    ],
    additionalInfo: "This event has passed. Thank you to everyone who made it unforgettable!"
  },
  {
    id: "11",
    title: "UNDERGROUND RAVE #21",
    date: "2023-10-15",
    time: "23:00",
    location: "Secret Location, Amsterdam",
    address: "Exact location revealed to ticket holders",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    description: "A legendary underground gathering that set the bar high.",
    fullDescription: "UNDERGROUND RAVE #21 was an epic night of hardcore techno in an intimate underground setting. This event brought together the best local and international DJs for a night of relentless beats.\n\nThe night featured:\n• Intimate underground setting\n• State-of-the-art sound system\n• International guest DJs\n• Immersive lighting\n• Exclusive atmosphere",
    ticketUrl: "",
    status: "past",
    formattedDate: "15 oktober 2023",
    price: "€25",
    schedule: "Doors opened at 23:00 | Event until 07:00",
    ageRestriction: "18+",
    dressCode: "All black preferred",
    genre: "Hardcore Techno",
    lineup: [
      "DJ HAKBORREL",
      "BASS DESTROYER",
      "NEON PULSE",
      "THUNDER STRIKE"
    ],
    additionalInfo: "This event has passed. Thank you to everyone who attended!"
  },
  // Upcoming events (placeholders)
  {
    id: "7",
    title: "SUMMER HARDCORE SESSION",
    date: "2026-06-15",
    time: "20:00",
    location: "Open Air Venue, Amsterdam",
    address: "To be announced",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
    description: "Join us for an epic summer hardcore experience under the stars.",
    fullDescription: "SUMMER HARDCORE SESSION brings the underground to the outdoors. Experience the raw power of hardcore techno in a unique open-air setting that combines the best of both worlds.\n\nThis special summer event features:\n• Open-air venue with stunning atmosphere\n• Extended daytime and nighttime sets\n• Outdoor sound system\n• Multiple DJ stages\n• Food and drink vendors\n• Sunset to sunrise experience",
    ticketUrl: "",
    status: "available",
    formattedDate: "15 juni 2026",
    price: "€30",
    priceNote: "Early bird pricing available",
    schedule: "Starts at 20:00 | Until sunrise",
    ageRestriction: "18+",
    dressCode: "Rave attire welcome",
    genre: "Hardcore Techno",
    lineup: [
      "SUMMER WARRIOR",
      "OUTDOOR BASS",
      "NIGHT PULSE",
      "SUNSET SESSION DJ"
    ],
    additionalInfo: "• Outdoor venue - dress accordingly\n• Weather-dependent event\n• Bring sunscreen for daytime sets\n• Rain plan in place"
  },
  {
    id: "8",
    title: "UNDERGROUND RAVE #24",
    date: "2026-07-20",
    time: "23:00",
    location: "Secret Location, Amsterdam",
    address: "Exact location revealed 24 hours before the event",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    description: "The next chapter in our underground series. Pure hardcore energy.",
    fullDescription: "UNDERGROUND RAVE #24 continues our legendary series of intimate underground gatherings. This event promises to push boundaries and deliver an unforgettable night of relentless hardcore beats.\n\nExpect:\n• Intimate underground setting\n• State-of-the-art sound system\n• International guest DJs\n• Immersive lighting and visuals\n• Exclusive atmosphere for true hardcore fans",
    ticketUrl: "",
    status: "available",
    formattedDate: "20 juli 2026",
    price: "€25",
    priceNote: "Limited capacity",
    schedule: "Doors open at 23:00 | Event until 07:00",
    ageRestriction: "18+",
    dressCode: "All black preferred",
    genre: "Hardcore Techno",
    lineup: [
      "DJ HAKBORREL",
      "SPECIAL GUEST",
      "BASS DESTROYER",
      "NEON PULSE"
    ],
    additionalInfo: "• Secret location - revealed to ticket holders\n• Limited tickets available\n• No re-entry policy\n• Lockers provided"
  },
  {
    id: "9",
    title: "HARDCORE HAVEN 2026",
    date: "2026-08-10",
    time: "22:00",
    location: "Industrial Warehouse, Rotterdam",
    address: "Warehouse District, Rotterdam",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&crop=center",
    description: "A massive hardcore gathering featuring international headliners.",
    fullDescription: "HARDCORE HAVEN 2024 is our biggest summer event. This massive warehouse gathering brings together the finest international hardcore talent for an epic night of non-stop energy.\n\nThe event features:\n• Multiple stages with different vibes\n• International headlining acts\n• Local talent showcase\n• Professional sound systems\n• Immersive visual installations\n• Food vendors and bars\n• Chill-out areas\n• Extended hours until sunrise",
    ticketUrl: "",
    status: "available",
    formattedDate: "10 augustus 2026",
    price: "€40",
    priceNote: "Early bird tickets available",
    schedule: "Doors open at 22:00 | Event until 08:00",
    ageRestriction: "18+",
    dressCode: "Rave attire welcome",
    genre: "Hardcore Techno",
    lineup: [
      "INTERNATIONAL HEADLINER",
      "DJ MASTERMIND",
      "BASS CRUSHER",
      "NEON WARRIOR",
      "HARDCORE PHENOMENON",
      "And 20+ more artists"
    ],
    additionalInfo: "• Multiple stages\n• Food vendors available\n• Lockers and coat check\n• Parking available\n• Public transport accessible"
  },
  // Past events
  {
    id: "4",
    title: "UNDERGROUND RAVE #22",
    date: "2024-02-10",
    time: "23:00",
    location: "Secret Location, Amsterdam",
    address: "Exact location revealed 24 hours before the event",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&crop=center",
    description: "An epic night of hardcore techno that rocked Amsterdam.",
    fullDescription: "UNDERGROUND RAVE #22 was an unforgettable night that brought together the best of the hardcore techno scene. The event featured incredible sets from local and international DJs in an intimate underground setting.\n\nThe energy was electric from start to finish, with non-stop beats that kept the crowd moving until the early hours. This was one of our most successful events, with a sold-out crowd and incredible feedback from attendees.\n\nThe night featured:\n• 8 hours of relentless hardcore beats\n• International headliner performance\n• State-of-the-art sound system\n• Immersive lighting and visuals\n• Amazing crowd energy",
    ticketUrl: "",
    status: "past",
    formattedDate: "10 februari 2024",
    price: "€25",
    schedule: "Doors opened at 23:00 | Event until 07:00",
    ageRestriction: "18+",
    dressCode: "All black preferred",
    genre: "Hardcore Techno",
    lineup: [
      "DJ HAKBORREL",
      "BASS DESTROYER",
      "NEON PULSE",
      "THUNDER STRIKE",
      "MIDNIGHT MASTER"
    ],
    additionalInfo: "This event has passed. Thank you to everyone who attended!"
  },
  {
    id: "5",
    title: "NEW YEAR'S RAVE 2024",
    date: "2023-12-31",
    time: "22:00",
    location: "Industrial Warehouse, Rotterdam",
    address: "Warehouse District, Rotterdam",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&crop=center",
    description: "Welcomed 2024 with a massive hardcore celebration.",
    fullDescription: "NEW YEAR'S RAVE 2024 was the ultimate way to ring in the new year. This massive event featured over 20 DJs across multiple stages, creating an unforgettable celebration of hardcore techno.\n\nThe countdown to midnight was epic, with the entire crowd counting down together as the bass dropped at exactly midnight. The party continued until sunrise, making it one of the longest and most intense events of the year.\n\nHighlights included:\n• Midnight countdown with epic bass drop\n• Multiple stages with different vibes\n• International DJ lineup\n• Food vendors and chill-out areas\n• 10+ hours of non-stop music\n• Amazing New Year's atmosphere",
    ticketUrl: "",
    status: "past",
    formattedDate: "31 december 2023",
    price: "€40",
    schedule: "Started at 22:00 | Until 08:00",
    ageRestriction: "18+",
    dressCode: "Rave attire welcome",
    genre: "Hardcore Techno",
    lineup: [
      "INTERNATIONAL HEADLINER",
      "DJ MASTERMIND",
      "BASS CRUSHER",
      "NEON WARRIOR",
      "HARDCORE PHENOMENON",
      "And 15+ more artists"
    ],
    additionalInfo: "This event has passed. Thanks to everyone who made it unforgettable!"
  },
  {
    id: "6",
    title: "WINTER UNDERGROUND SESSION",
    date: "2024-01-20",
    time: "23:00",
    location: "Underground Bunker, Utrecht",
    address: "Location revealed to ticket holders",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
    description: "A deep underground winter gathering that warmed our hearts.",
    fullDescription: "WINTER UNDERGROUND SESSION brought the heat during the coldest month of the year. Despite the freezing temperatures outside, the energy inside was absolutely scorching.\n\nThis intimate bunker setting provided the perfect atmosphere for an intense night of dark hardcore. The raw, unfiltered sound system filled every corner of the space, creating an immersive experience that attendees still talk about.\n\nThe event featured:\n• Deep, dark hardcore beats\n• Extended DJ sets\n• Intimate crowd\n• Raw underground atmosphere\n• Non-stop energy until sunrise\n• Minimal decor, maximum sound",
    ticketUrl: "",
    status: "past",
    formattedDate: "20 januari 2024",
    price: "€20",
    schedule: "Started at 23:00 | Until 07:00",
    ageRestriction: "21+",
    dressCode: "Dark/Underground",
    genre: "Dark Hardcore",
    lineup: [
      "MIDNIGHT MASTER",
      "DARK FREQUENCY",
      "BUNKER SOUNDS",
      "UNDERGROUND LEGEND",
      "WINTER WARRIOR"
    ],
    additionalInfo: "This event has passed. Thank you to all the dedicated ravers who braved the cold!"
  }
]

// Computed property to filter events based on current view
const displayedEvents = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  if (showingPastEvents.value) {
    // Show past events (events with date before today)
    return allEvents.filter(event => {
      const eventDate = new Date(event.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate < today
    }).sort((a, b) => {
      // Sort past events by date (newest first)
      return new Date(b.date) - new Date(a.date)
    })
  } else {
    // Show upcoming events (events with date today or in the future)
    return allEvents.filter(event => {
      const eventDate = new Date(event.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate >= today
    }).sort((a, b) => {
      // Sort upcoming events by date (soonest first)
      return new Date(a.date) - new Date(b.date)
    })
  }
})


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
