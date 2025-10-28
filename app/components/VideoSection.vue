<template>
  <!-- Video Section -->
  <div id="videos" class="relative section-padding overflow-hidden pb-16 bg-black/20">
    
    <!-- Background Effects -->
    <div class="absolute inset-0 opacity-5" 
         style="background-image: url('data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.01\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'90\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'90\' r=\'1\'/%3E%3Ccircle cx=\'90\' cy=\'90\' r=\'1\'/%3E%3Ccircle cx=\'60\' cy=\'60\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');" />

    <!-- Side glows -->
    <div class="absolute top-1/2 left-0 w-48 h-48 bg-purple-500/6 rounded-full blur-[80px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 20s;" />
    <div class="absolute top-1/2 right-0 w-48 h-48 bg-green-500/6 rounded-full blur-[80px] -translate-y-1/2 animate-smooth-flow" style="animation-duration: 25s; animation-delay: 5s;" />

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="text-center mb-12 sm:mb-16 lg:mb-20">
        <div class="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div class="w-1 h-8 sm:h-12 bg-gradient-to-b from-purple-500 to-purple-500/50"></div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display">
            <span class="text-white">FEATURED </span>
            <span class="text-gradient-secondary">VIDEO</span>
          </h2>
          <div class="w-1 h-8 sm:h-12 bg-gradient-to-b from-purple-500 to-purple-500/50"></div>
        </div>
        <p class="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-body">
          Experience the raw energy and underground vibes through our latest video content.
        </p>
      </div>

      <!-- Featured Video -->
      <div class="max-w-6xl mx-auto">
        <div class="relative bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
          
          <!-- YouTube Video Embed -->
          <div class="relative aspect-video w-full overflow-hidden rounded-lg">
            <iframe 
              :src="youtubeEmbedUrl"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="absolute inset-0 w-full h-full"
              style="border: none;"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// YouTube video URL
const youtubeUrl = 'https://www.youtube.com/watch?v=SOH49z-S0G0'

// Convert YouTube URL to embed URL
const youtubeEmbedUrl = computed(() => {
  const videoId = youtubeUrl.split('v=')[1]?.split('&')[0]
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0`
})

// Video data
const featuredVideo = {
  id: "1",
  title: "UNDERGROUND RAVE #22 - AFTERMOVIE",
  description: "Experience the raw energy and underground vibes from our latest rave. Feel the bass, see the crowd, and get ready for the next one.",
  date: "2 weeks ago",
  location: "Secret Location, Amsterdam",
  genre: "Hardcore Techno"
}
</script>
