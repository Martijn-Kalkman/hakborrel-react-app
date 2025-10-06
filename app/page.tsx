"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { VideoSection } from "@/components/video-section"
import { CommunitySection } from "@/components/community-section"
import { StorySection } from "@/components/story-section"
import { MediaSection } from "@/components/media-section"
import { Footer } from "@/components/footer"
import { useIntersectionObserver } from "@/lib/useIntersectionObserver"

function AnimatedSection({ id, children }: { id: string; children: React.ReactNode }) {
  const { targetRef, isIntersecting } = useIntersectionObserver()
  
  return (
    <div 
      id={id} 
      ref={targetRef}
      className={`transition-all duration-700 ease-out ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div id="home" className="opacity-100">
        <HeroSection />
      </div>
      <AnimatedSection id="events">
        <EventsSection />
      </AnimatedSection>
      <AnimatedSection id="videos">
        <VideoSection />
      </AnimatedSection>
      <AnimatedSection id="community">
        <CommunitySection />
      </AnimatedSection>
      <AnimatedSection id="story">
        <StorySection />
      </AnimatedSection>
      <AnimatedSection id="media">
        <MediaSection />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
