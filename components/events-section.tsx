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
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Animated events background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/12 via-transparent to-secondary/12 animate-pulse" />
      
      {/* Moving event pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='20' r='2'/%3E%3Ccircle cx='20' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'hexagon-move 12s linear infinite'
        }}
      />

      {/* Breathing side glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/15 rounded-full blur-[100px] -translate-y-1/2 animate-breathe" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] -translate-y-1/2 animate-breathe" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      
      {/* Floating event indicators */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-primary/40 rounded-full animate-float" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-secondary/40 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      
      {/* Subtle floating particles */}
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-drift" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-secondary/20 rounded-full animate-drift" style={{ animationDelay: '3s' }} />
      
      {/* Central pulsing accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-primary"></div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">UPCOMING</span>{" "}
              <span className="text-primary">EVENTS</span>
            </h2>
            <div className="w-1 h-8 bg-primary"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Professional action button */}
        <div className="text-center mt-16">
          <Link href="/tickets">
            <button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              GET TICKETS
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}