<template>
  <div class="relative bg-black overflow-x-hidden">
    <!-- Optimized Background Effects - Reduced complexity -->
    <div class="fixed inset-0 bg-black" />
    <div class="fixed inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-purple-500/12" />
    
    <!-- Reduced Atmospheric Glows - Only 2 instead of 3 -->
    <div class="fixed top-1/4 left-1/4 w-64 h-64 bg-green-500/12 rounded-full blur-[150px] animate-smooth-flow" style="animation-duration: 20s;" />
    <div class="fixed top-3/4 right-1/4 w-64 h-64 bg-purple-500/12 rounded-full blur-[150px] animate-smooth-flow" style="animation-duration: 25s; animation-delay: 5s;" />
    
    <!-- Simplified Noise Texture -->
    <div class="fixed inset-0 opacity-[0.015]" style="background-image: url('data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.5\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.3\'/%3E%3C/svg%3E');" />
    
    <!-- Content -->
    <div class="relative z-10">
      <!-- Navigation Component -->
      <Navigation />
      
      <!-- Hero Section Component -->
      <div id="home">
        <HeroSection />
      </div>
      <!-- Events Section -->
      <div id="events">
        <EventsSection />
      </div>
      
      <!-- Event Agenda Section -->
      <EventAgendaSection />
      
      <!-- Video Section -->
      <VideoSection />
      
      <!-- Community Section -->
      <div id="community">
        <CommunitySection />
      </div>
      
      <!-- Story Section -->
      <div id="story">
        <StorySection />
      </div>
      
      <!-- Media Section -->
      <div id="media">
        <MediaSection />
      </div>
      
      <!-- Footer Section -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
// This page now uses components for all sections
// Navigation, HeroSection, and EventsSection are auto-imported by Nuxt 4

// Explicit import to ensure components are available
import EventsSection from '~/components/EventsSection.vue'
import EventAgendaSection from '~/components/EventAgendaSection.vue'
import VideoSection from '~/components/VideoSection.vue'
import CommunitySection from '~/components/CommunitySection.vue'
import StorySection from '~/components/StorySection.vue'
import MediaSection from '~/components/MediaSection.vue'
import Footer from '~/components/Footer.vue'
</script>