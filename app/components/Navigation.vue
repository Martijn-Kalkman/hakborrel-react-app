<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-4 hover:opacity-80 transition-opacity">
          <NuxtImg 
            src="/logo/HakBorrel-LOGOS_white 1.png"
            alt="HakBorrel Logo"
            loading="eager"
            format="webp"
            quality="100"
            sizes="40px"
          />
          
          <span class="text-white font-display text-xl">HAKBORREL</span>
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink to="/#home" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide">
            HOME
          </NuxtLink>
          <NuxtLink to="/#events" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide">
            EVENTS
          </NuxtLink>
          <NuxtLink to="/#agenda" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide">
            AGENDA
          </NuxtLink>
          <NuxtLink to="/#videos" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide">
            VIDEO'S
          </NuxtLink>
          <NuxtLink to="/#community" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide">
            COMMUNITY
          </NuxtLink>
          <NuxtLink to="/#story" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide">
            STORY
          </NuxtLink>
          <NuxtLink to="/#media" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide">
            MEDIA
          </NuxtLink>
          <NuxtLink to="/tickets" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide">
            TICKETS
          </NuxtLink>
          <NuxtLink to="/secret" class="text-purple-400 hover:text-purple-300 transition-colors font-body text-sm uppercase tracking-wide border-l border-purple-500/30 pl-8">
            SECRET CHAPTERS
          </NuxtLink>
        </div>

        <!-- Right Side Actions -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Newsletter Button -->
          <button class="bg-green-500 text-black px-3 py-1.5 rounded-lg text-md font-regular hover:cursor-pointer hover:bg-green-600 transition-colors">
            NIEUWSBRIEF
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="lg:hidden text-white transition-transform duration-300 hover:scale-110" @click="toggleMobileMenu">
          <Icon name="heroicons:bars-3" size="24px" v-if="!isMobileMenuOpen" />
          <Icon name="heroicons:x-mark" size="24px" v-else />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide-down" appear>
        <div v-if="isMobileMenuOpen" class="lg:hidden mt-4 pb-4 border-t border-white/10 overflow-hidden">
          <div class="flex flex-col space-y-4 pt-4">
            <NuxtLink to="/#home" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide py-2">
              HOME
            </NuxtLink>
            <NuxtLink to="/#events" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide py-2">
              EVENTS
            </NuxtLink>
            <NuxtLink to="/#agenda" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide py-2">
              AGENDA
            </NuxtLink>
            <NuxtLink to="/#videos" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide py-2">
              VIDEO'S
            </NuxtLink>
            <NuxtLink to="/#community" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide py-2">
              COMMUNITY
            </NuxtLink>
            <NuxtLink to="/#story" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide py-2">
              STORY
            </NuxtLink>
            <NuxtLink to="/#media" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide py-2">
              MEDIA
            </NuxtLink>
            <NuxtLink to="/tickets" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors font-body text-sm uppercase tracking-wide py-2">
              TICKETS
            </NuxtLink>
            <NuxtLink to="/secret" @click="closeMobileMenu" class="text-purple-400 hover:text-purple-300 transition-colors font-body text-sm uppercase tracking-wide py-2 border-t border-purple-500/30 pt-4 mt-4">
              SECRET CHAPTERS
            </NuxtLink>
            
            <!-- Mobile Buttons -->
            <div class="mt-4">
              <button class="w-full bg-green-500 text-black px-4 py-2 rounded-lg text-base font-medium hover:bg-green-600 transition-colors">
                NIEUWSBRIEF
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-in-out;
  max-height: 1000px;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
