"use client"

import { Clock, Music, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

interface Artist {
  id: string
  name: string
  stage: string
  startTime: string
  endTime: string
  genre: string
  image: string
  description?: string
}

interface EventAgenda {
  id: string
  title: string
  date: string
  venue: string
  artists: Artist[]
}

const upcomingEvent: EventAgenda = {
  id: "hakborrel-2024",
  title: "HAKBORREL 2024 - UNDERGROUND RAVE",
  date: "2024-03-15",
  venue: "Secret Location, Amsterdam",
  artists: [
    {
      id: "dj-1",
      name: "DJ HARDCORE MASTER",
      stage: "Main Stage",
      startTime: "23:00",
      endTime: "01:00",
      genre: "Hardcore Techno",
      image: "/placeholder.svg",
      description: "Legendary hardcore DJ with 15+ years in the underground scene"
    },
    {
      id: "dj-2", 
      name: "BASS DESTROYER",
      stage: "Main Stage",
      startTime: "01:00",
      endTime: "03:00",
      genre: "Raw Hardcore",
      image: "/placeholder.svg",
      description: "Known for earth-shaking basslines and relentless energy"
    },
    {
      id: "dj-3",
      name: "UNDERGROUND LEGEND",
      stage: "Main Stage", 
      startTime: "03:00",
      endTime: "05:00",
      genre: "Industrial Hardcore",
      image: "/placeholder.svg",
      description: "Pioneer of the underground movement, bringing authentic vibes"
    },
    {
      id: "dj-4",
      name: "RAVE WARRIOR",
      stage: "Main Stage",
      startTime: "05:00", 
      endTime: "07:00",
      genre: "Frenchcore",
      image: "/placeholder.svg",
      description: "Closing the night with explosive Frenchcore energy"
    }
  ]
}

export function EventAgendaSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Clean, simple background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Professional header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-primary"></div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">EVENT</span>{" "}
              <span className="text-primary">AGENDA</span>
            </h2>
            <div className="w-1 h-8 bg-primary"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Check out the lineup and schedule for our upcoming underground gathering.
          </p>
          
          {/* Event info */}
          <div className="bg-black/60 backdrop-blur-sm border border-primary/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-primary text-2xl font-bold mb-4">{upcomingEvent.title}</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{new Date(upcomingEvent.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{upcomingEvent.venue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Artist lineup */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-white mb-8">ARTIST LINEUP</h3>
          
          {upcomingEvent.artists.map((artist, index) => (
            <div 
              key={artist.id}
              className="bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                {/* Artist image */}
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Artist info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{artist.name}</h4>
                      <p className="text-primary text-sm font-medium">{artist.genre}</p>
                      {artist.description && (
                        <p className="text-gray-400 text-sm mt-1">{artist.description}</p>
                      )}
                    </div>
                    
                    {/* Time and stage info */}
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-gray-300">
                          <Clock className="h-4 w-4" />
                          <span>{artist.startTime} - {artist.endTime}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-300">
                          <Music className="h-4 w-4" />
                          <span>{artist.stage}</span>
                        </div>
                      </div>
                      
                      {/* Performance slot indicator */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-xs text-gray-400">Slot {index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12">
          <div className="bg-black/60 backdrop-blur-sm border border-secondary/30 rounded-xl p-8 max-w-4xl mx-auto hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-1 h-6 bg-secondary"></div>
              <h4 className="text-secondary text-xl font-bold">EVENT DETAILS</h4>
              <div className="w-1 h-6 bg-secondary"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">22:30</div>
                  <div className="text-gray-300 text-sm font-medium">DOORS OPEN</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-4 group-hover:bg-secondary/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-secondary mb-2">18+</div>
                  <div className="text-gray-300 text-sm font-medium">AGE LIMIT</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-2">UNDERGROUND</div>
                  <div className="text-gray-300 text-sm font-medium">DRESS CODE</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-4 group-hover:bg-secondary/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-secondary mb-2">24H</div>
                  <div className="text-gray-300 text-sm font-medium">LOCATION NOTICE</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="text-center text-gray-400 text-sm">
                <p>Bring your ID, wear your best underground gear, and get ready for an unforgettable night.</p>
                <p className="mt-2">Location details will be sent to your email 24 hours before the event.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              GET TICKETS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
