import { Navigation } from "@/components/navigation"
import { EventCard } from "@/components/event-card"
import { Lock, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Mock private events data
const privateEvents = [
  {
    id: "private-1",
    title: "HAKBORREL: CHAPTER XII",
    date: "2024-03-22",
    time: "22:00",
    location: "Location revealed 48h before",
    image: "/placeholder.svg?key=pv1xy",
    description: "An intimate gathering for the initiated. Limited capacity, maximum energy.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-chapter-12",
    status: "available" as const,
  },
  {
    id: "private-2",
    title: "UNDERGROUND RITUAL",
    date: "2024-04-05",
    time: "23:00",
    location: "Secret Warehouse",
    image: "/placeholder.svg?key=pv2xy",
    description: "A night of pure underground hardcore. No phones, no photos, just the music.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-ritual",
    status: "selling-fast" as const,
  },
]

export default function PrivateEventsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-purple-900/30" />

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/20 p-4 rounded-full">
                <Lock className="h-12 w-12 text-secondary" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-secondary" style={{ textShadow: "0 0 40px rgba(128, 0, 255, 0.8)" }}>
                PRIVATE EVENTS
              </span>
            </h1>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
              Welcome to the inner circle. These exclusive events are for true members of the underground movement.
            </p>

            <div className="flex items-center justify-center gap-2 text-secondary">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-bold">EXCLUSIVE ACCESS GRANTED</span>
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {privateEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Story Link */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-secondary rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Learn About Our Community</h2>
              <p className="text-gray-400 mb-6">
                Discover the story of HAKborrel and what makes our underground movement special.
              </p>
              <Link href="/story">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold">READ OUR STORY</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
