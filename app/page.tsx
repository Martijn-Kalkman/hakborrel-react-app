import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { VideoSection } from "@/components/video-section"
import { CommunitySection } from "@/components/community-section"
import { StorySection } from "@/components/story-section"
import { MediaSection } from "@/components/media-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="events">
        <EventsSection />
      </div>
      <div id="videos">
        <VideoSection />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
      <div id="story">
        <StorySection />
      </div>
      <div id="media">
        <MediaSection />
      </div>
      <Footer />
    </main>
  )
}
