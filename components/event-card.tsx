import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  image: string
  description: string
  ticketUrl: string
  status: "available" | "selling-fast" | "sold-out"
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <Link href={`/events/${event.id}`}>
      <div className="group relative bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] h-full flex flex-col">
        {/* Status Badge */}
        {event.status === "selling-fast" && (
          <div className="absolute top-4 right-4 z-10 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold">
            SELLING FAST
          </div>
        )}
        {event.status === "sold-out" && (
          <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            SOLD OUT
          </div>
        )}

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {event.title}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span>
                {formattedDate} • {event.time}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{event.description}</p>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-primary text-sm font-bold group-hover:underline">VIEW DETAILS</span>
            <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
