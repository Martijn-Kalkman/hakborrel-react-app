import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, Music, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - will be replaced with CMS
const eventDetails = {
  "1": {
    id: "1",
    title: "UNDERGROUND RAVE #23",
    date: "2024-03-15",
    time: "23:00 - 06:00",
    location: "Secret Location, Amsterdam",
    fullAddress: "Address will be revealed 24h before the event",
    image: "/hardcore-rave-underground-party-dark-neon-lights-c.jpg",
    description:
      "Experience the raw energy of hardcore techno in an intimate underground setting. This is not just a party - it's a journey into the heart of the underground movement.",
    longDescription: `Join us for an unforgettable night of pure hardcore energy. UNDERGROUND RAVE #23 brings together the best DJs from the underground scene for a night of relentless beats and raw energy.

This intimate gathering is limited to true hardcore enthusiasts who understand that this is more than music - it's a way of life. Expect cutting-edge sound systems, immersive visuals, and an atmosphere that can only be found in the deepest corners of the underground.`,
    lineup: ["DJ HARDCORE MASTER", "BASS DESTROYER", "UNDERGROUND LEGEND", "RAVE WARRIOR"],
    ticketUrl: "https://cmtickets.nl/event/hakborrel-23",
    capacity: 500,
    ageLimit: "18+",
    dresscode: "Underground style - dark colors preferred",
    status: "available" as const,
  },
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = eventDetails[params.id as keyof typeof eventDetails]

  if (!event) {
    return <div>Event not found</div>
  }

  const formattedDate = new Date(event.date).toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Image */}
      <section className="relative h-[60vh] mt-20">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ textShadow: "0 0 40px rgba(57, 255, 20, 0.6)" }}
            >
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">About This Event</h2>
                <p className="text-gray-300 text-lg mb-4">{event.description}</p>
                <p className="text-gray-400 whitespace-pre-line">{event.longDescription}</p>
              </div>

              {/* Lineup */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Music className="h-8 w-8" />
                  Lineup
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.lineup.map((artist, index) => (
                    <div
                      key={index}
                      className="bg-black border border-primary/30 rounded-lg p-4 hover:border-primary transition-colors"
                    >
                      <p className="text-white font-bold text-lg">{artist}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Link */}
              <div>
                <Link href={`/events/${event.id}/media`}>
                  <Button className="bg-primary hover:bg-primary/90 text-black font-bold w-full md:w-auto">
                    VIEW EVENT MEDIA
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Ticket Card */}
              <div className="bg-black border-2 border-primary rounded-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-4">Get Your Tickets</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Capacity: {event.capacity} people</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Age: {event.ageLimit}</span>
                  </div>
                </div>

                {event.status === "available" && (
                  <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-6">
                      BUY TICKETS
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                )}

                {event.status === "sold-out" && (
                  <Button disabled className="w-full bg-gray-700 text-gray-400 font-bold text-lg py-6">
                    SOLD OUT
                  </Button>
                )}
              </div>

              {/* Event Info */}
              <div className="bg-black border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Event Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-primary font-bold mb-1">Location</p>
                    <p className="text-gray-400">{event.fullAddress}</p>
                  </div>
                  <div>
                    <p className="text-primary font-bold mb-1">Dress Code</p>
                    <p className="text-gray-400">{event.dresscode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
