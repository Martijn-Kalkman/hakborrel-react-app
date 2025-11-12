<template>
  <div class="relative bg-black overflow-x-hidden w-full">
    <!-- Optimized Background Effects - Reduced complexity -->
    <div class="fixed inset-0 bg-black" />
    <div class="fixed inset-0 bg-gradient-to-br from-green-500/6 via-transparent to-purple-500/8" />
    
    <!-- Reduced Atmospheric Glows - Only 2 instead of 3 -->
    <div class="fixed top-1/4 left-1/4 w-64 h-64 bg-green-500/6 rounded-full blur-[150px] animate-smooth-flow" style="animation-duration: 20s;" />
    <div class="fixed top-3/4 right-1/4 w-64 h-64 bg-purple-500/6 rounded-full blur-[150px] animate-smooth-flow" style="animation-duration: 25s; animation-delay: 5s;" />
    
    <!-- Simplified Noise Texture -->
    <div class="fixed inset-0 opacity-[0.015]" style="background-image: url('data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.5\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.3\'/%3E%3C/svg%3E');" />
    
    <!-- Content -->
    <div class="relative z-10 w-full mobile-content-wrapper">
      <!-- Navigation Component -->
      <Navigation />
      
      <!-- Hero Section Component -->
      <div id="home" class="scroll-snap-section">
        <HeroSection />
      </div>
      <!-- Events Section -->
      <div id="events" class="scroll-snap-section">
        <EventsSection />
      </div>
      
      <!-- Community Section -->
      <div id="community" class="scroll-snap-section">
        <CommunitySection />
      </div>
      
      <!-- Story Section -->
      <div id="story" class="scroll-snap-section">
        <StorySection />
      </div>
      
      <!-- Media Section -->
      <div id="media" class="scroll-snap-section">
        <MediaSection />
      </div>
      
      <!-- Footer Section -->
      <div class="scroll-snap-section">
        <Footer />
      </div>
      
      <!-- Mobile Scroll Buttons -->
      <MobileScrollButtons />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// This page now uses components for all sections
// Navigation, HeroSection are loaded immediately (above the fold)
// Other components are lazy loaded for better initial page load performance

// Lazy load components below the fold for better initial page load
const EventsSection = defineAsyncComponent(() => import('~/components/EventsSection.vue'))
const CommunitySection = defineAsyncComponent(() => import('~/components/CommunitySection.vue'))
const StorySection = defineAsyncComponent(() => import('~/components/StorySection.vue'))
const MediaSection = defineAsyncComponent(() => import('~/components/MediaSection.vue'))
const Footer = defineAsyncComponent(() => import('~/components/Footer.vue'))

const { handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd, handleScrollSnap } = useScrollSnap()

// Handle wheel and touch scrolling on mount
onMounted(() => {
  // Apply scroll-snap to html element
  if (process.client) {
    document.documentElement.style.scrollSnapType = 'y mandatory'
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Desktop wheel events
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    // Check if mobile
    const isMobile = () => {
      if (typeof window === 'undefined') return false
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
             (window.innerWidth <= 768)
    }
    
    // Enable touch handlers for both mobile and desktop
    // Mobile will use CSS scroll-snap, desktop uses JS handlers
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    
    // Add scroll snap handler for both mobile and desktop
    // On mobile, this helps with fine-tuning after CSS scroll-snap
    let scrollTimeout = null
    const handleWindowScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        // Only use JS snap on desktop, mobile uses CSS scroll-snap
        if (!isMobile()) {
          handleScrollSnap()
        }
      }, 400)
    }
    window.addEventListener('scroll', handleWindowScroll, { passive: true })
    
    onUnmounted(() => {
      if (process.client) {
        window.removeEventListener('scroll', handleWindowScroll)
        if (scrollTimeout) clearTimeout(scrollTimeout)
      }
    })
  }
  
  // Cleanup on unmount
  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      document.documentElement.style.scrollSnapType = ''
      document.documentElement.style.scrollBehavior = ''
    }
  })
})
</script>

<style scoped>
/* Main scroll container */
:global(html) {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

.scroll-snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always; /* Always stop at each section */
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height for mobile */
  box-sizing: border-box;
  padding-top: 64px; /* Account for fixed navbar */
  position: relative;
  width: 100%;
  display: flex; /* Use flex for layout */
  flex-direction: column;
  /* Make sections scrollable containers on desktop too */
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Mobile navbar adjustment */
@media (max-width: 1024px) {
  .scroll-snap-section {
    padding-top: 72px; /* Slightly more for mobile menu */
  }
  
  /* Better scroll snap on mobile */
  :global(html) {
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
  }
}

/* Smaller screens - reduce padding and allow growth */
@media (max-width: 768px) {
  .scroll-snap-section {
    padding-top: 72px;
    min-height: calc(100vh - 0px);
    min-height: calc(100dvh - 0px);
    scroll-snap-stop: always;
  }
}

/* Very small screens */
@media (max-width: 640px) {
  .scroll-snap-section {
    padding-top: 68px;
  }
}

/* Mobile scroll snapping - enable smooth section-by-section scrolling */
@media (pointer: coarse), (max-width: 768px) {
  :global(html) {
    scroll-snap-type: y mandatory !important; /* Enable scroll snap on mobile */
    scroll-behavior: smooth;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    height: auto !important;
  }
  :global(body) {
    scroll-snap-type: y mandatory !important;
    scroll-behavior: smooth;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    height: auto !important;
  }
  .scroll-snap-section {
    scroll-snap-align: start !important; /* Enable snap alignment */
    scroll-snap-stop: always !important; /* Always stop at each section */
    scroll-margin-top: 72px; /* Account for fixed navbar */
    /* Use only the height needed - no forced 100vh */
    min-height: auto !important; /* Remove forced min-height */
    height: auto; /* Allow content to determine height */
    max-height: none; /* Remove max-height restriction */
    /* Remove internal scrolling - let page scroll naturally */
    overflow-y: visible !important;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    position: relative;
    display: block !important; /* Use block layout for natural flow */
    flex-direction: column;
    width: 100%;
    /* Allow natural scroll chaining between sections */
    overscroll-behavior-y: auto;
    overscroll-behavior-x: auto;
    /* Ensure sections are in page flow and visible */
    margin: 0;
    padding-top: 72px; /* Restore padding for navbar */
    box-sizing: border-box;
    /* Ensure sections stack vertically on the page */
    clear: both;
    float: none;
  }
  /* Make inner content fill naturally */
  .scroll-snap-section > section,
  .scroll-snap-section > div {
    min-height: auto;
    height: auto;
    width: 100%;
    position: relative;
    /* Let components use their own display */
    overflow: visible;
    display: block;
  }
  
  /* Ensure all section content classes work properly */
  .hero-section-content,
  .events-section-content,
  .community-section-content,
  .story-section-content,
  .media-section-content,
  .footer-section-content {
    /* Allow content to flow naturally */
    min-height: auto;
    height: auto;
    width: 100%;
    position: relative;
    /* Prevent horizontal scroll */
    overflow-x: hidden;
    /* Let components use their own display */
  }
  
  /* Ensure the content wrapper allows all sections to be visible */
  .mobile-content-wrapper {
    display: block !important;
    width: 100%;
    height: auto !important;
    min-height: auto;
    position: relative;
    overflow: visible !important;
  }
}

/* Tablet/iPad - optimize for wider screens (768px-1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Reduce navbar offset padding on iPad */
  .scroll-snap-section {
    padding-top: 72px !important; /* Keep navbar space but allow less */
  }
  
  /* Reduce top spacing on iPad - start content higher */
  .desktop-hero-section,
  .mobile-hero-section {
    padding-top: 0.5rem !important; /* Minimal top padding */
    padding-bottom: 1rem !important;
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
    align-items: flex-start !important; /* Start from top instead of center */
    justify-content: flex-start !important;
    min-height: auto !important;
    height: auto !important;
  }
  
  /* Make hero section wrapper less tall on iPad */
  #home.scroll-snap-section {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    overflow-y: visible !important;
    padding-top: 72px !important; /* Just navbar offset */
  }
  
  /* Make content wider on iPad/tablet */
  .desktop-hero-section .container,
  .mobile-hero-section .container {
    max-width: 100% !important;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    padding-top: 0 !important; /* No top padding on container */
  }
  
  /* Increase max-width for hero content on iPad */
  .desktop-hero-section .max-w-5xl,
  .mobile-hero-section .max-w-5xl,
  .desktop-hero-section .max-w-6xl,
  .mobile-hero-section .max-w-6xl {
    max-width: 85% !important;
  }
  
  /* Reduce spacing between logo and content on iPad */
  .desktop-hero-section [class*="mb-3"],
  .desktop-hero-section [class*="mb-4"],
  .desktop-hero-section [class*="mb-6"],
  .mobile-hero-section [class*="mb-3"],
  .mobile-hero-section [class*="mb-4"],
  .mobile-hero-section [class*="mb-6"] {
    margin-bottom: 0.5rem !important;
  }
  
  /* Specifically reduce logo container margin on iPad */
  .desktop-hero-section .container > div:first-child,
  .mobile-hero-section .container > div:first-child {
    margin-bottom: 0.75rem !important;
  }
  
  /* Reduce spacing in subtitle/slogan on iPad */
  .desktop-hero-section .container > div:not(:first-child),
  .mobile-hero-section .container > div:not(:first-child) {
    margin-bottom: 0.5rem !important;
  }
  
  /* Larger font sizes for iPad */
  .desktop-hero-section h1,
  .mobile-hero-section h1 {
    font-size: 2.5rem !important;
  }
  
  .desktop-hero-section h2,
  .mobile-hero-section h2 {
    font-size: 1.75rem !important;
  }
  
  /* Better card spacing on iPad */
  .desktop-hero-section .card-professional,
  .mobile-hero-section .card-professional {
    padding: 1.25rem !important;
  }
  
  /* Better spacing for grid layouts on iPad using attribute selectors */
  .desktop-hero-section [class*="grid"],
  .mobile-hero-section [class*="grid"] {
    gap: 1.25rem !important;
  }
  
  /* Reduce spacing in hero section content wrapper */
  .desktop-hero-section > div,
  .mobile-hero-section > div {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
}

/* Desktop - make sections scrollable containers like mobile */
@media (min-width: 769px) {
  .scroll-snap-section {
    /* Desktop sections are scrollable containers too */
    height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    /* Allow scroll chaining - when at bottom, move to next section */
    overscroll-behavior-y: contain;
    overscroll-behavior-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  /* Ensure inner content can scroll */
  .scroll-snap-section > section,
  .scroll-snap-section > div {
    min-height: 100%;
    height: auto;
    width: 100%;
    position: relative;
    overflow: visible;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .hero-section-content,
  .events-section-content,
  .community-section-content,
  .story-section-content,
  .media-section-content,
  .footer-section-content {
    /* On desktop, allow content to flow and fill container */
    min-height: 100%;
    height: auto;
    width: 100%;
    position: relative;
    overflow-x: hidden;
  }
  
  /* Special handling for hero section on desktop - perfectly centered, bigger height */
  .desktop-hero-section {
    /* Perfectly center content vertically and horizontally */
    align-items: center !important;
    justify-content: center !important;
    height: calc(100vh - 32px) !important; /* Account for navbar, allow bigger height */
    min-height: calc(100vh - 64px) !important;
    max-height: calc(100vh - 32px) !important; /* Allow bigger height */
    padding: 1.5rem 0 !important; /* Add padding for spacing */
    overflow: hidden !important; /* Prevent any overflow */
    /* Prevent internal scrolling - section should be locked */
  }
  
  /* Make hero section wrapper non-scrollable on desktop, but allow bigger height */
  #home.scroll-snap-section {
    overflow-y: hidden !important; /* Lock hero section - no internal scrolling */
    overflow-x: hidden;
    height: calc(100vh + 32px) !important; /* Allow bigger height */
    max-height: calc(100vh + 32px) !important; /* Allow bigger height */
  }
  
  /* Ensure hero section inner content is perfectly centered */
  .desktop-hero-section > div {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* Reduce spacing to fit everything in 100vh */
  }
  
  /* Compact spacing on desktop to fit in 100vh */
  .desktop-hero-section .mb-3 {
    margin-bottom: 0.5rem !important;
  }
  .desktop-hero-section .mb-4 {
    margin-bottom: 0.75rem !important;
  }
  .desktop-hero-section .mb-6 {
    margin-bottom: 1rem !important;
  }
  .desktop-hero-section .mb-2 {
    margin-bottom: 0.5rem !important;
  }
  .desktop-hero-section .gap-5 {
    gap: 1rem !important;
  }
  .desktop-hero-section .gap-4 {
    gap: 0.75rem !important;
  }
  .desktop-hero-section .gap-3 {
    gap: 0.5rem !important;
  }
  
  /* Make cards more compact on desktop */
  .desktop-hero-section .card-professional {
    padding: 1rem !important;
  }
  
  /* Adjust logo size if needed */
  .desktop-hero-section img {
    width: 64px !important;
    height: 64px !important;
  }
}

/* Ensure content within sections accounts for navbar */
.scroll-snap-section > * {
  box-sizing: border-box;
  flex-shrink: 0;
}

/* Make sections flexible */
.scroll-snap-section > section,
.scroll-snap-section > div {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
</style>
