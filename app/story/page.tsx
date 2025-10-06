import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Heart, Users, Music, Zap, Target, Sparkles } from "lucide-react"
import Link from "next/link"

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-purple-900/30" />

        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">THE STORY OF</span>
              <br />
              <span className="text-primary" style={{ textShadow: "0 0 40px rgba(57, 255, 20, 0.8)" }}>
                HAKBORREL
              </span>
            </h1>
            <p className="text-gray-300 text-xl">Not just a party. It's a movement.</p>
          </div>

          {/* Origin Story */}
          <div className="space-y-12">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Our Beginning</h2>
              </div>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  HAKborrel started as a simple idea: create a space where hardcore music lovers could gather without
                  pretense, without judgment, just pure energy and authentic connection.
                </p>
                <p>
                  What began as small gatherings in underground locations has grown into a movement that spans cities,
                  bringing together people who understand that hardcore isn't just music—it's a way of life.
                </p>
                <p>
                  We're not about the mainstream. We're about the raw, unfiltered experience of bass that shakes your
                  core and beats that sync with your heartbeat.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/60 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-white">Community First</h3>
                </div>
                <p className="text-gray-400">
                  We're a family of like-minded individuals who support each other, respect the culture, and keep the
                  underground spirit alive.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border-2 border-secondary/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Music className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-bold text-white">Pure Hardcore</h3>
                </div>
                <p className="text-gray-400">
                  No compromises on sound quality or energy. We bring the hardest beats and the most dedicated DJs to
                  every event.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-white">Raw Energy</h3>
                </div>
                <p className="text-gray-400">
                  Every event is designed to be an immersive experience where you can lose yourself in the music and
                  find yourself in the moment.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border-2 border-secondary/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-bold text-white">Underground Ethos</h3>
                </div>
                <p className="text-gray-400">
                  We stay true to our roots. Secret locations, intimate gatherings, and a commitment to keeping the
                  scene authentic.
                </p>
              </div>
            </div>

            {/* Community Raves Explanation */}
            <div className="bg-gradient-to-br from-purple-950/40 to-black border-2 border-secondary rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl font-bold text-secondary">How Community Raves Work</h2>
              </div>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Our Community Raves (formerly known as Secret Chapters) are exclusive events for dedicated members of
                  the underground movement. Here's how it works:
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Get Your Access Code</h4>
                      <p className="text-gray-400">
                        Access codes are distributed at our open gatherings, through our newsletter, and to active
                        community members. Stay engaged to receive yours.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Complete the Access Test</h4>
                      <p className="text-gray-400">
                        A short questionnaire (5-10 minutes) helps us understand your connection to the hardcore scene
                        and ensures everyone shares our values.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Financial Contribution</h4>
                      <p className="text-gray-400">
                        Community Raves operate on a contribution basis. Your support helps us maintain intimate venues,
                        book quality DJs, and keep the underground alive.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Join the Inner Circle</h4>
                      <p className="text-gray-400">
                        Once approved, you'll gain access to exclusive events with hidden locations, secret lineups, and
                        intimate experiences designed for true hardcore enthusiasts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOMO Section */}
            <div className="bg-black/60 backdrop-blur-sm border-2 border-primary rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Don't Miss Out</h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of hardcore enthusiasts who have already discovered what it means to be part of something
                bigger than just a party. This is your invitation to the underground.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events">
                  <Button className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6">
                    VIEW OPEN GATHERINGS
                  </Button>
                </Link>
                <Link href="/secret-chapters">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-6">
                    UNLOCK COMMUNITY RAVES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
