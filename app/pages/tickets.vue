<template>
  <div class="relative bg-black overflow-x-hidden min-h-screen">
    <!-- Background Effects -->
    <div class="fixed inset-0 bg-black" />
    <div class="fixed inset-0 bg-gradient-to-br from-green-500/8 via-transparent to-purple-500/10" />
    <div class="fixed inset-0 bg-gradient-to-tl from-green-500/6 via-transparent to-purple-500/8" />
    <div class="fixed inset-0 bg-gradient-to-r from-transparent via-green-500/4 to-purple-500/6" />
    
    <!-- Atmospheric glows -->
    <div class="fixed top-1/4 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-[200px] animate-smooth-flow" style="animation-duration: 15s;" />
    <div class="fixed top-3/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[180px] animate-smooth-flow" style="animation-duration: 18s; animation-delay: 3s;" />
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/6 to-purple-500/6 rounded-full blur-[300px] animate-atmospheric-drift" style="animation-duration: 25s;" />
    
    <!-- Noise texture -->
    <div 
      class="fixed inset-0 opacity-[0.02]"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E');"
    />

    <div class="relative z-10">
      <Navigation />
      
      <div class="pt-24 pb-16">
        <div class="container mx-auto px-6">
          <!-- Header -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center gap-4 mb-8">
              <div class="w-1 h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
              <h1 class="text-5xl md:text-7xl font-display">
                <span class="text-white">GET YOUR </span>
                <span class="text-gradient-primary">TICKETS</span>
              </h1>
              <div class="w-1 h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
            </div>
            <p class="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-body mb-12">
              Join the underground hardcore movement. Secure your spot at our exclusive events.
            </p>
            
            <!-- Info Cards -->
            <div class="max-w-4xl mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="card-professional p-6 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Icon name="heroicons:calendar" size="32px" class="text-green-500" />
                  </div>
                  <h3 class="text-xl font-display text-white mb-3">Multiple Events</h3>
                  <p class="text-gray-400 text-sm">
                    Choose from our upcoming underground events throughout the year
                  </p>
                </div>
                
                <div class="card-professional p-6 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Icon name="heroicons:ticket" size="32px" class="text-purple-500" />
                  </div>
                  <h3 class="text-xl font-display text-white mb-3">Flexible Options</h3>
                  <p class="text-gray-400 text-sm">
                    Various ticket types to match your underground experience level
                  </p>
                </div>
                
                <div class="card-professional p-6 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Icon name="heroicons:credit-card" size="32px" class="text-green-500" />
                  </div>
                  <h3 class="text-xl font-display text-white mb-3">Secure Payment</h3>
                  <p class="text-gray-400 text-sm">
                    Safe and encrypted payment processing for your peace of mind
                  </p>
                </div>
              </div>
              
              <!-- Why Choose Section -->
              <div class="card-professional p-8">
                <div class="text-center mb-6">
                  <h2 class="text-3xl font-display text-white mb-4">
                    Why Choose <span class="text-gradient-primary">HakBorrel</span>?
                  </h2>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-4">
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="heroicons:check" size="16px" class="text-green-500" />
                      </div>
                      <div>
                        <h4 class="text-white font-medium mb-1">Underground Experience</h4>
                        <p class="text-gray-400 text-sm">Authentic hardcore events in intimate venues</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="heroicons:check" size="16px" class="text-green-500" />
                      </div>
                      <div>
                        <h4 class="text-white font-medium mb-1">Top Artists</h4>
                        <p class="text-gray-400 text-sm">Featuring the best hardcore DJs and producers</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="heroicons:check" size="16px" class="text-green-500" />
                      </div>
                      <div>
                        <h4 class="text-white font-medium mb-1">Community Focus</h4>
                        <p class="text-gray-400 text-sm">Building connections within the hardcore scene</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="space-y-4">
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="heroicons:check" size="16px" class="text-purple-500" />
                      </div>
                      <div>
                        <h4 class="text-white font-medium mb-1">Digital Tickets</h4>
                        <p class="text-gray-400 text-sm">Instant delivery via email, no printing needed</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="heroicons:check" size="16px" class="text-purple-500" />
                      </div>
                      <div>
                        <h4 class="text-white font-medium mb-1">Fair Pricing</h4>
                        <p class="text-gray-400 text-sm">Transparent pricing with no hidden fees</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="heroicons:check" size="16px" class="text-purple-500" />
                      </div>
                      <div>
                        <h4 class="text-white font-medium mb-1">24/7 Support</h4>
                        <p class="text-gray-400 text-sm">Round-the-clock customer support for any issues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Events Section -->
          <div class="max-w-6xl mx-auto mb-20">
            <div class="text-center mb-20">
              <div class="inline-flex items-center gap-4 mb-8">
                <div class="w-1 h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
                <h2 class="text-5xl md:text-7xl font-display">
                  <span class="text-white">UPCOMING </span>
                  <span class="text-gradient-primary">EVENTS</span>
                </h2>
                <div class="w-1 h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
              </div>
              <p class="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-body">
                Choose your event and secure your tickets for the ultimate hardcore experience.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="event in events"
                :key="event.id"
                class="card-professional p-6 group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <!-- Status Badge -->
                <div v-if="event.status === 'selling-fast'" class="absolute top-4 right-4 z-10 bg-red-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  SELLING FAST
                </div>
                <div v-if="event.status === 'sold-out'" class="absolute top-4 right-4 z-10 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  SOLD OUT
                </div>
                
                <div class="relative h-48 overflow-hidden rounded-xl mb-6">
                  <NuxtImg
                    :src="event.image"
                    :alt="event.title"
                    class="object-cover group-hover:scale-110 transition-transform duration-500"
                    style="width: 100%; height: 100%;"
                    loading="lazy"
                    format="webp"
                    quality="95"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div class="absolute bottom-4 left-4 right-4">
                    <h3 class="text-white text-xl font-heading mb-2">{{ event.title }}</h3>
                    <div class="flex items-center gap-4 text-sm text-gray-300">
                      <div class="flex items-center gap-1">
                        <Icon name="heroicons:calendar" size="16px" />
                        {{ formatDate(event.date) }}
                      </div>
                      <div class="flex items-center gap-1">
                        <Icon name="heroicons:clock" size="16px" />
                        {{ event.time }}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="flex items-center gap-2 mb-3">
                  <Icon name="heroicons:map-pin" size="16px" class="text-green-500" />
                  <span class="text-gray-300 text-sm">{{ event.location }}</span>
                </div>
                <p class="text-gray-400 text-sm mb-4">{{ event.description }}</p>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2">
                    <Icon name="heroicons:users" size="16px" class="text-purple-500" />
                    <span class="text-gray-300 text-sm">
                      {{ getTotalAvailable(event) }} available
                    </span>
                  </div>
                  <div class="text-green-500 font-medium">
                    From €{{ getMinimumPrice(event) }}
                  </div>
                </div>
                <NuxtLink to="/tickets" class="btn-professional w-full text-center text-black font-semibold py-3 group-hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2">
                  VIEW TICKETS
                  <Icon name="heroicons:arrow-right" size="16px" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
    </template>

<script setup>
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    title: "Underground Rave #22",
    date: "2024-09-20",
    time: "22:00 - 06:00",
    location: "Industrial Warehouse, Rotterdam",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    description: "Experience the raw energy of underground hardcore with the best DJs in the scene.",
    status: 'selling-fast',
    ticketTypes: [
      { name: "Early Bird", price: 25, available: 50 },
      { name: "Regular", price: 35, available: 200 },
      { name: "VIP", price: 65, available: 30 }
    ]
  },
  {
    id: 2,
    title: "Festival 2024",
    date: "2024-09-21",
    time: "20:00 - 06:00",
    location: "Recreatieterrein Middelwaard, Vianen",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&crop=center",
    description: "Our biggest event of the year with multiple stages and world-class artists.",
    status: 'upcoming',
    ticketTypes: [
      { name: "Day Pass", price: 45, available: 500 },
      { name: "Weekend Pass", price: 85, available: 300 },
      { name: "Premium", price: 125, available: 100 }
    ]
  },
  {
    id: 3,
    title: "Bunker Sessions",
    date: "2024-09-22",
    time: "23:00 - 05:00",
    location: "Secret Bunker, Amsterdam",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
    description: "Exclusive underground event in a hidden location. Limited capacity.",
    status: 'sold-out',
    ticketTypes: [
      { name: "Standard", price: 40, available: 0 },
      { name: "Exclusive", price: 75, available: 0 }
    ]
  }
])

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getTotalAvailable = (event) => {
  return event.ticketTypes.reduce((sum, type) => sum + type.available, 0)
}

const getMinimumPrice = (event) => {
  return Math.min(...event.ticketTypes.map(t => t.price))
}
</script>
