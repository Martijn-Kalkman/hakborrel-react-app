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
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"

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
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Enhanced background with more green and purple */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-primary/6 via-transparent to-secondary/8" />
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-primary/4 to-secondary/6" />
      
      {/* Enhanced atmospheric glows */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[200px] animate-smooth-flow" style={{ animationDuration: '15s' }} />
      <div className="fixed top-3/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-[180px] animate-smooth-flow" style={{ animationDuration: '18s', animationDelay: '3s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/6 to-secondary/6 rounded-full blur-[300px] animate-atmospheric-drift" style={{ animationDuration: '25s' }} />
      
      {/* Very subtle noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Enhanced smooth edge fade */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none" />
      
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
