import { Navigation } from "@/components/navigation"
import { EventCard } from "@/components/event-card"

// Mock data - will be replaced with CMS
const upcomingEvents = [
  {
    id: "1",
    title: "UNDERGROUND RAVE #23",
    date: "2024-03-15",
    time: "23:00",
    location: "Secret Location, Amsterdam",
    image: "/hardcore-rave-underground-party-dark-neon-lights.jpg",
    description: "Experience the raw energy of hardcore techno in an intimate underground setting.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-23",
    status: "available" as const,
  },
  {
    id: "2",
    title: "HARDCORE FESTIVAL 2024",
    date: "2024-04-20",
    time: "20:00",
    location: "Industrial Warehouse, Rotterdam",
    image: "/hardcore-festival-industrial-warehouse-dark-atmosp.jpg",
    description: "The biggest hardcore gathering of the year with international DJs.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-festival",
    status: "available" as const,
  },
  {
    id: "3",
    title: "MIDNIGHT SESSIONS",
    date: "2024-05-10",
    time: "00:00",
    location: "Underground Bunker, Utrecht",
    image: "/underground-bunker-rave-dark-green-lights.jpg",
    description: "Deep underground vibes with the hardest beats until sunrise.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-midnight",
    status: "selling-fast" as const,
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-purple-950/30" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">UPCOMING</span>
              <br />
              <span className="text-primary" style={{ textShadow: "0 0 40px rgba(57, 255, 20, 0.8)" }}>
                EVENTS
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join us at our open gatherings. Experience the energy, feel the bass, and become part of the underground
              movement.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
