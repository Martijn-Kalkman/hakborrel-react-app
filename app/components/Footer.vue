<template>
  <footer class="relative bg-black border-t border-gray-800/50">
    <!-- Enhanced background pattern -->
    <div 
      class="absolute inset-0 opacity-10"
      :style="{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)'
      }"
    />
    
    <!-- Additional subtle pattern -->
    <div 
      class="absolute inset-0 opacity-5"
      :style="{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(57, 255, 20, 0.01) 4px, rgba(57, 255, 20, 0.01) 8px)'
      }"
    />

    <!-- Subtle atmospheric effects -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <NuxtImg 
              src="/logo/HakBorrel-LOGOS_white.png"
              alt="HakBorrel Logo"
              loading="lazy"
              format="webp"
              quality="100"
              sizes="40px"
            />
            <h3 class="text-white text-xl font-bold">HAKBORREL</h3>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Underground hardcore movement bringing together music lovers through authentic experiences and raw energy.
          </p>
          <div class="flex gap-4">
            <a href="https://instagram.com/hakborrel" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-500 transition-colors">
              <Icon name="heroicons:camera" class="h-5 w-5" />
            </a>
            <a href="https://facebook.com/hakborrel" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-500 transition-colors">
              <Icon name="heroicons:chat-bubble-left-right" class="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@hakborrel" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-500 transition-colors">
              <Icon name="heroicons:play" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Events Section -->
        <div>
          <h4 class="text-white text-lg font-semibold mb-6">EVENTS</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="#events" class="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Open Gatherings
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#agenda" class="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Event Agenda
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#community" class="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Secret Events
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/tickets" class="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Tickets
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Community Section -->
        <div>
          <h4 class="text-white text-lg font-semibold mb-6">COMMUNITY</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="#story" class="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Our Story
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#community" class="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Join Community
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#videos" class="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Videos
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#media" class="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Media Gallery
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h4 class="text-white text-lg font-semibold mb-6">CONTACT</h4>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-400 text-sm">
              <Icon name="heroicons:envelope" class="h-4 w-4 text-green-500" />
              <a href="mailto:info@hakborrel.nl" class="hover:text-green-500 transition-colors">
                info@hakborrel.nl
              </a>
            </li>
            <li class="flex items-center gap-3 text-gray-400 text-sm">
              <Icon name="heroicons:phone" class="h-4 w-4 text-green-500" />
              <a href="tel:+31612345678" class="hover:text-green-500 transition-colors">
                +31 6 1234 5678
              </a>
            </li>
            <li class="flex items-center gap-3 text-gray-400 text-sm">
              <Icon name="heroicons:map-pin" class="h-4 w-4 text-green-500" />
              <span>Amsterdam, Netherlands</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800/50 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-gray-400 text-sm">
            © 2024 HAKBORREL. All rights reserved. Underground hardcore movement.
          </div>
          <div class="flex gap-6 text-sm">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-green-500 transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-green-500 transition-colors">
              Terms of Service
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Newsletter Signup -->
      <div class="mt-12 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
        <div class="text-center">
          <div class="flex items-center justify-center gap-3 mb-4">
            <Icon name="heroicons:musical-note" class="h-6 w-6 text-green-500" />
            <h4 class="text-white text-lg font-semibold">STAY CONNECTED</h4>
          </div>
          <p class="text-gray-400 text-sm mb-6">
            Get the latest updates on events, secret locations, and exclusive content.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="flex-1 bg-black/40 border border-green-500/50 text-white placeholder:text-gray-400 focus:border-green-500 rounded-lg px-4 py-3 text-sm outline-none"
            />
            <button @click="handleSubscribe" class="bg-green-500 hover:bg-green-500/90 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  if (email.value) {
    // Handle newsletter subscription
    console.log('Subscribing email:', email.value)
    alert('Thank you for subscribing!')
    email.value = ''
  }
}
</script>

