import { EventCard } from "@/components/event-card"
import Link from "next/link"

const upcomingEvents = [
  {
    id: "1",
    title: "UNDERGROUND RAVE #23",
    date: "2024-03-15",
    time: "23:00",
    location: "Secret Location, Amsterdam",
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
    description: "Deep underground vibes with the hardest beats until sunrise.",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-midnight",
    status: "selling-fast" as const,
  },
]

export function EventsSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      
      {/* Events-specific moving pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='20' r='2'/%3E%3Ccircle cx='20' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'hexagon-move 12s linear infinite'
        }}
      />

      {/* Subtle side glows */}
      <div className="absolute top-1/2 left-0 w-60 h-60 bg-primary/8 rounded-full blur-[100px] -translate-y-1/2 animate-smooth-flow" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 right-0 w-60 h-60 bg-secondary/8 rounded-full blur-[100px] -translate-y-1/2 animate-smooth-flow" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      
      {/* Subtle floating event indicators */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/25 rounded-full animate-wave-motion" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-secondary/25 rounded-full animate-wave-motion" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      
      {/* Subtle floating particles */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary/15 rounded-full animate-atmospheric-drift" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-secondary/15 rounded-full animate-atmospheric-drift" style={{ animationDelay: '3s' }} />
      
      {/* Subtle central accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/4 to-secondary/4 rounded-full blur-[120px] animate-subtle-glow" style={{ animationDuration: '6s' }} />

      <div className="container-professional relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
            <h2 className="text-5xl md:text-7xl font-display">
              <span className="text-white">UPCOMING</span>{" "}
              <span className="text-gradient-primary">EVENTS</span>
            </h2>
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
          </div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-body">
            Join us at our open gatherings. Experience the energy, feel the bass, and become part of the underground movement.
          </p>
          
          {/* Professional status indicators */}
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Selling Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Sold Out</span>
            </div>
          </div>
        </div>

        <div className="grid-professional">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Professional action button */}
        <div className="text-center mt-20">
          <Link href="/tickets">
            <button className="btn-professional px-12 py-4 text-lg cursor-pointer">
              VIEW ALL EVENTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}