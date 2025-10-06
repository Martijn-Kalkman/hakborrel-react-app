"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { VideoSection } from "@/components/video-section"
import { CommunitySection } from "@/components/community-section"
import { StorySection } from "@/components/story-section"
import { MediaSection } from "@/components/media-section"
import { AgendaSection } from "@/components/agenda-section"
import { Footer } from "@/components/footer"

function SimpleSection({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="relative overflow-hidden">
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Subtle black background with minimal color elements */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/4" />
      
      {/* Very subtle noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Smooth edge fade */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <div id="home">
          <HeroSection />
        </div>
        <SimpleSection id="events">
          <EventsSection />
        </SimpleSection>
        <div className="section-divider"></div>
        <SimpleSection id="agenda">
          <AgendaSection />
        </SimpleSection>
        <div className="section-divider"></div>
        <SimpleSection id="videos">
          <VideoSection />
        </SimpleSection>
        <div className="section-divider"></div>
        <SimpleSection id="community">
          <CommunitySection />
        </SimpleSection>
        <div className="section-divider"></div>
        <SimpleSection id="story">
          <StorySection />
        </SimpleSection>
        <div className="section-divider"></div>
        <SimpleSection id="media">
          <MediaSection />
        </SimpleSection>
        <Footer />
      </div>
    </main>
  )
}
