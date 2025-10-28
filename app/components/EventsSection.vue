<template>
  <!-- Events Section -->
  <div id="events" class="relative section-padding overflow-hidden pb-16">
    
    <!-- Simplified static pattern -->
    <div class="absolute inset-0 opacity-5" 
         style="background-image: url('data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.01\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'90\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'90\' r=\'1\'/%3E%3Ccircle cx=\'90\' cy=\'90\' r=\'1\'/%3E%3Ccircle cx=\'60\' cy=\'60\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');" />

    <!-- Reduced side glows - Only 2 instead of 6 -->
    <div class="absolute top-1/2 left-0 w-48 h-48 bg-green-500/6 rounded-full blur-[80px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 20s;" />
    <div class="absolute top-1/2 right-0 w-48 h-48 bg-purple-500/6 rounded-full blur-[80px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 25s; animation-delay: 5s;" />

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
          Join us at our open gatherings. Experience the energy, feel the bass, and become part of the underground movement.
        </p>
        
        <!-- Professional status indicators -->
        <div class="flex justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-400">
          <div class="flex items-center gap-1 sm:gap-2">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Available</span>
          </div>
          <div class="flex items-center gap-1 sm:gap-2">
            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Selling Fast</span>
          </div>
          <div class="flex items-center gap-1 sm:gap-2">
            <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Sold Out</span>
          </div>
        </div>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="event in upcomingEvents" :key="event.id" class="group relative bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] h-full flex flex-col w-full">
          
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
              <span class="text-green-500 text-xs sm:text-sm font-bold group-hover:underline">VIEW DETAILS</span>
              <Icon name="heroicons:chevron-right" class="h-4 w-4 sm:h-5 sm:w-5 text-green-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      <!-- Professional action button -->
      <div class="text-center mt-12 sm:mt-16 lg:mt-20">
        <a href="/tickets">
          <button class="btn-professional px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg cursor-pointer">
            VIEW ALL EVENTS
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Events data
const upcomingEvents = [
  {
    id: "1",
    title: "UNDERGROUND RAVE #23",
    date: "2024-03-15",
    time: "23:00",
    location: "Secret Location, Amsterdam",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    description: "Experience the raw energy of hardcore techno in an intimate underground setting.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-23",
    status: "available",
    formattedDate: "15 maart 2024"
  },
  {
    id: "2",
    title: "HARDCORE FESTIVAL 2024",
    date: "2024-04-20",
    time: "20:00",
    location: "Industrial Warehouse, Rotterdam",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&crop=center",
    description: "The biggest hardcore gathering of the year with international DJs.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-festival",
    status: "available",
    formattedDate: "20 april 2024"
  },
  {
    id: "3",
    title: "MIDNIGHT SESSIONS",
    date: "2024-05-10",
    time: "00:00",
    location: "Underground Bunker, Utrecht",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
    description: "Deep underground vibes with the hardest beats until sunrise.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-midnight",
    status: "selling-fast",
    formattedDate: "10 mei 2024"
  }
]
</script>
