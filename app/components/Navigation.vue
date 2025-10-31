<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-4 hover:opacity-80 transition-opacity">
          <NuxtImg 
            :src="logoPath"
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
          <NuxtLink to="/#home" :class="[
            'transition-colors font-body text-sm uppercase tracking-wide',
            activeSection === 'home' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
          ]">
            HOME
          </NuxtLink>
          <NuxtLink to="/#events" :class="[
            'transition-colors font-body text-sm uppercase tracking-wide',
            activeSection === 'events' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
          ]">
            EVENTS
          </NuxtLink>
          <NuxtLink to="/#community" :class="[
            'transition-colors font-body text-sm uppercase tracking-wide',
            activeSection === 'community' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
          ]">
            COMMUNITY
          </NuxtLink>
          <NuxtLink to="/#story" :class="[
            'transition-colors font-body text-sm uppercase tracking-wide',
            activeSection === 'story' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
          ]">
            STORY
          </NuxtLink>
          <NuxtLink to="/#media" :class="[
            'transition-colors font-body text-sm uppercase tracking-wide',
            activeSection === 'media' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
          ]">
            CONTENT
          </NuxtLink>
          <NuxtLink to="/tickets" :class="[
            'transition-colors font-body text-sm uppercase tracking-wide',
            $route.path === '/tickets' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
          ]">
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
            <NuxtLink to="/#home" @click="closeMobileMenu" :class="[
              'transition-colors font-body text-sm uppercase tracking-wide py-2',
              activeSection === 'home' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
            ]">
              HOME
            </NuxtLink>
            <NuxtLink to="/#events" @click="closeMobileMenu" :class="[
              'transition-colors font-body text-sm uppercase tracking-wide py-2',
              activeSection === 'events' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
            ]">
              EVENTS
            </NuxtLink>
            <NuxtLink to="/#community" @click="closeMobileMenu" :class="[
              'transition-colors font-body text-sm uppercase tracking-wide py-2',
              activeSection === 'community' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
            ]">
              COMMUNITY
            </NuxtLink>
            <NuxtLink to="/#story" @click="closeMobileMenu" :class="[
              'transition-colors font-body text-sm uppercase tracking-wide py-2',
              activeSection === 'story' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
            ]">
              STORY
            </NuxtLink>
            <NuxtLink to="/#media" @click="closeMobileMenu" :class="[
              'transition-colors font-body text-sm uppercase tracking-wide py-2',
              activeSection === 'media' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
            ]">
              CONTENT
            </NuxtLink>
            <NuxtLink to="/tickets" @click="closeMobileMenu" :class="[
              'transition-colors font-body text-sm uppercase tracking-wide py-2',
              $route.path === '/tickets' ? 'text-green-500 font-semibold' : 'text-gray-300 hover:text-white'
            ]">
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
import { ref, onMounted, onUnmounted, watch } from 'vue'

const logoPath = '/logo/HakBorrel-LOGOS_white 1.png'

const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const route = useRoute()
let observer = null
let scrollHandler = null

// Track active section using Intersection Observer
const updateActiveSection = () => {
  if (typeof window === 'undefined') return
  
  // Only track sections on home page
  if (route.path !== '/') {
    activeSection.value = ''
    return
  }
  
  const sections = ['home', 'events', 'community', 'story', 'media']
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px', // Trigger when section is in middle 20% of viewport
    threshold: 0
  }

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id
        if (sections.includes(sectionId)) {
          activeSection.value = sectionId
        }
      }
    })
  }

  observer = new IntersectionObserver(observerCallback, observerOptions)

  // Observe all sections
  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      observer?.observe(element)
    }
  })

  // Also check on scroll for better responsiveness
  scrollHandler = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementBottom = elementTop + rect.height
        
        if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom) {
          activeSection.value = sectionId
          break
        }
      }
    }
  }

  window.addEventListener('scroll', scrollHandler, { passive: true })

  // Initial check
  scrollHandler()

  return () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler)
      scrollHandler = null
    }
  }
}

onMounted(() => {
  // Wait a bit for sections to be rendered
  setTimeout(() => {
    if (route.path === '/') {
      updateActiveSection()
    }
  }, 100)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
    scrollHandler = null
  }
})

// Watch for route changes
watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    setTimeout(() => {
      updateActiveSection()
    }, 100)
  } else {
    activeSection.value = ''
    if (observer) {
      observer.disconnect()
      observer = null
    }
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler)
      scrollHandler = null
    }
  }
})
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
