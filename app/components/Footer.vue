<template>
  <footer class="relative min-h-[calc(100vh-64px)] min-h-[calc(100dvh-64px)] bg-black border-t border-gray-800/50 overflow-x-hidden py-3 sm:py-4 md:py-6 lg:py-8 flex flex-col footer-section-content">
    <!-- Enhanced background pattern -->
    <div 
      class="absolute inset-0 opacity-10"
      :style="patternStyle1"
    />
    
    <!-- Additional subtle pattern -->
    <div 
      class="absolute inset-0 opacity-5"
      :style="patternStyle2"
    />

    <!-- Subtle atmospheric effects -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 sm:gap-4 mb-6">
            <NuxtImg 
              :src="logoPath"
              alt="HakBorrel Logo"
              loading="lazy"
              format="webp" 
              class="object-contain flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
            />
            <h3 class="text-white text-xl sm:text-2xl md:text-3xl font-display">HAKBORREL</h3>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Underground hardcore movement bringing together music lovers through authentic experiences and raw energy.
          </p>
          <div class="flex gap-4">
            <a 
              href="https://instagram.com/hakborrel" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-400 hover:text-purple-500 transition-all duration-300 hover:scale-110" 
              aria-label="Instagram"
            >
              <Icon name="mdi:instagram" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
            </a>
            <a 
              href="https://youtube.com/@hakborrel" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110" 
              aria-label="YouTube"
            >
              <Icon name="mdi:youtube" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
            </a>
            <a 
              href="https://tiktok.com/@hakborrel" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110" 
              aria-label="TikTok"
            >
              <Icon name="simple-icons:tiktok" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
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
        </div>
      </div>

      <!-- Contact Form / Ideas Box -->
      <div class="mt-12 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
        <div class="text-center">
          <div class="flex items-center justify-center gap-3 mb-4">
            <Icon name="heroicons:envelope" class="h-6 w-6 text-green-500" />
            <h4 class="text-white text-lg font-semibold">CONTACT / IDEËEN</h4>
          </div>
          <p class="text-gray-400 text-sm mb-6">
            Heb je vragen, ideeën of feedback? Laat het ons weten!
          </p>
          <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto space-y-4">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                v-model="contactForm.name"
                type="text"
                placeholder="Naam"
                required
                class="flex-1 bg-black/40 border border-green-500/50 text-white placeholder:text-gray-400 focus:border-green-500 rounded-lg px-4 py-3 text-sm outline-none"
              />
              <input
                v-model="contactForm.email"
                type="email"
                placeholder="Email"
                required
                class="flex-1 bg-black/40 border border-green-500/50 text-white placeholder:text-gray-400 focus:border-green-500 rounded-lg px-4 py-3 text-sm outline-none"
              />
            </div>
            <textarea
              v-model="contactForm.message"
              placeholder="Jouw bericht of idee..."
              required
              rows="4"
              class="w-full bg-black/40 border border-green-500/50 text-white placeholder:text-gray-400 focus:border-green-500 rounded-lg px-4 py-3 text-sm outline-none resize-none"
            ></textarea>
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full sm:w-auto bg-green-500 hover:bg-green-500/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                <Icon name="heroicons:arrow-path" class="h-5 w-5 animate-spin" />
                Verzenden...
              </span>
              <span v-else>VERZENDEN</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

// Use computed to ensure proper path handling in production
const logoPath = computed(() => '/logo/hakborrel.png')

// Computed styles to ensure consistent formatting between server and client
// This prevents hydration mismatches
const patternStyle1 = computed(() => ({
  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)'
}))

const patternStyle2 = computed(() => ({
  backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(57, 255, 20, 0.01) 4px, rgba(57, 255, 20, 0.01) 8px)'
}))

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message) {
    return
  }

  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Handle form submission (in production, this would send to a backend)
  console.log('Contact form submitted:', contactForm.value)
  alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.')
  
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    message: ''
  }
  
  isSubmitting.value = false
}
</script>

