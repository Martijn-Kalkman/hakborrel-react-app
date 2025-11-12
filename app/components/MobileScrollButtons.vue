<template>
  <!-- Mobile Scroll Buttons - Only visible on mobile -->
  <div class="fixed bottom-4 right-4 z-50 md:hidden flex flex-col gap-2">
    <!-- Scroll Up Button -->
    <button
      v-if="canScrollUp"
      @click="scrollToPrevious"
      class="bg-purple-500/90 hover:bg-purple-500 backdrop-blur-sm border border-purple-400/50 rounded-full p-3 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Scroll up"
    >
      <Icon name="heroicons:chevron-up" class="w-6 h-6 text-white" />
    </button>
    
    <!-- Scroll Down Button -->
    <button
      v-if="canScrollDown"
      @click="scrollToNext"
      class="bg-green-500/90 hover:bg-green-500 backdrop-blur-sm border border-green-400/50 rounded-full p-3 shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Scroll down"
    >
      <Icon name="heroicons:chevron-down" class="w-6 h-6 text-white" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Define section order
const sections = ['home', 'events', 'community', 'story', 'media']
const currentSection = ref('home')
const canScrollUp = ref(false)
const canScrollDown = ref(false)

// Detect current section based on scroll position
const detectCurrentSection = () => {
  if (typeof window === 'undefined') return
  
  const viewportTop = window.scrollY
  const viewportBottom = window.scrollY + window.innerHeight
  const viewportCenter = viewportTop + window.innerHeight / 2
  let closestSection = 'home'
  let closestDistance = Infinity
  
  // Check all sections to find which one is closest to viewport center
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + window.scrollY
      const elementBottom = elementTop + rect.height
      const elementCenter = elementTop + rect.height / 2
      
      // Check if section is visible in viewport
      const isVisible = elementBottom > viewportTop && elementTop < viewportBottom
      
      if (isVisible) {
        const distance = Math.abs(viewportCenter - elementCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestSection = sectionId
        }
      }
    }
  })
  
  // Check if we're at the footer (last scroll-snap-section)
  const footerSection = document.querySelector('.scroll-snap-section:last-child')
  if (footerSection && !footerSection.id) {
    const footerRect = footerSection.getBoundingClientRect()
    const footerTop = footerRect.top + window.scrollY
    const footerBottom = footerTop + footerRect.height
    const footerCenter = footerTop + footerRect.height / 2
    
    // Check if footer is visible
    const footerVisible = footerBottom > viewportTop && footerTop < viewportBottom
    
    if (footerVisible) {
      const footerDistance = Math.abs(viewportCenter - footerCenter)
      // If footer is closer than any other section, we're at footer
      if (footerDistance < closestDistance) {
        currentSection.value = 'footer'
        updateScrollButtons()
        return
      }
    }
  }
  
  currentSection.value = closestSection
  updateScrollButtons()
}

// Check if we can scroll up or down
const updateScrollButtons = () => {
  if (typeof window === 'undefined') return
  
  const currentIndex = sections.indexOf(currentSection.value)
  
  // Check if we're at the bottom of the page (footer or end of document)
  const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10
  
  // If we're at the footer or bottom of page, only show up button - NO DOWN BUTTON
  if (currentSection.value === 'footer' || isAtBottom) {
    canScrollUp.value = true
    canScrollDown.value = false
    return
  }
  
  // Can scroll up if not on first section or at top
  canScrollUp.value = currentIndex > 0 || window.scrollY > 100
  
  // Can scroll down if:
  // - Not at the last section in the array (media), OR
  // - At media section (can scroll to footer), BUT only if not already at bottom
  // NEVER show down button at footer or when at bottom of page
  if (currentSection.value === 'media') {
    // At media section - can scroll to footer, but check if we're already at bottom
    canScrollDown.value = !isAtBottom
  } else {
    // Not at media - can scroll down if there's a next section
    canScrollDown.value = currentIndex < sections.length - 1
  }
}

// Scroll to next section
const scrollToNext = () => {
  if (typeof window === 'undefined') return
  
  // If we're at footer, don't scroll - NO LOOPING
  if (currentSection.value === 'footer') {
    return
  }
  
  const currentIndex = sections.indexOf(currentSection.value)
  
  // If we're at media section, always try to scroll to footer
  if (currentSection.value === 'media') {
    const footerSection = document.querySelector('.scroll-snap-section:last-child')
    if (footerSection) {
      const rect = footerSection.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // Calculate the absolute position of the footer
      const footerTop = rect.top + scrollTop
      const targetY = footerTop - 72 // Account for navbar
      
      // Scroll to footer
      window.scrollTo({
        top: Math.max(0, targetY), // Ensure we don't scroll to negative position
        behavior: 'smooth'
      })
    } else {
      // Fallback: scroll to bottom of page if footer not found
      window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight,
        behavior: 'smooth'
      })
    }
    return
  }
  
  // For other sections, scroll to next section
  if (currentIndex < sections.length - 1) {
    const nextSectionId = sections[currentIndex + 1]
    const nextSection = document.getElementById(nextSectionId)
    if (nextSection) {
      const rect = nextSection.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetY = rect.top + scrollTop - 72 // Account for navbar
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }
  }
}

// Scroll to previous section
const scrollToPrevious = () => {
  if (typeof window === 'undefined') return
  
  // If we're at the footer, go back to media section
  if (currentSection.value === 'footer') {
    const mediaSection = document.getElementById('media')
    if (mediaSection) {
      const rect = mediaSection.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetY = rect.top + scrollTop - 72 // Account for navbar
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }
    return
  }
  
  const currentIndex = sections.indexOf(currentSection.value)
  
  if (currentIndex > 0) {
    // Scroll to previous section - the ID is on the scroll-snap-section div itself
    const prevSectionId = sections[currentIndex - 1]
    const prevSection = document.getElementById(prevSectionId)
    if (prevSection) {
      const rect = prevSection.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetY = rect.top + scrollTop - 72 // Account for navbar
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }
  } else {
    // Already at first section, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

let scrollTimeout = null

onMounted(() => {
  detectCurrentSection()
  
  // Listen to scroll events for better responsiveness
  const handleScroll = () => {
    if (scrollTimeout) clearTimeout(scrollTimeout)
    // Update more frequently for better responsiveness
    scrollTimeout = setTimeout(() => {
      detectCurrentSection()
    }, 50)
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Also use IntersectionObserver for more accurate detection
  const observer = new IntersectionObserver((entries) => {
    // Find the entry with the highest intersection ratio
    let maxRatio = 0
    let activeEntry = null
    
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio
        activeEntry = entry
      }
    })
    
    if (activeEntry && maxRatio > 0.2) {
      const sectionId = activeEntry.target.id
      const footerSection = document.querySelector('.scroll-snap-section:last-child')
      
      if (sections.includes(sectionId)) {
        currentSection.value = sectionId
        updateScrollButtons()
      } else if (activeEntry.target === footerSection && !footerSection.id) {
        // This is the footer (no id)
        currentSection.value = 'footer'
        updateScrollButtons()
      }
    }
  }, {
    threshold: [0.1, 0.2, 0.3, 0.5, 0.7],
    rootMargin: '-10% 0px -10% 0px'
  })
  
  // Observe all sections
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      observer.observe(element)
    }
  })
  
  // Observe footer
  const footerSection = document.querySelector('.scroll-snap-section:last-child')
  if (footerSection) {
    observer.observe(footerSection)
  }
  
  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('scroll', handleScroll)
    if (scrollTimeout) clearTimeout(scrollTimeout)
  })
})
</script>

<style scoped>
/* Ensure buttons are always visible on mobile */
@media (max-width: 768px) {
  .fixed {
    position: fixed;
  }
}
</style>

