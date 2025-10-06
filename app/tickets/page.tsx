"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Ticket, Users, Zap, Music, Shield, Star, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const ticketEvents = [
  {
    id: "1",
    title: "UNDERGROUND RAVE #23",
    subtitle: "The Ultimate Hardcore Experience",
    date: "March 15, 2024",
    time: "23:00 - 06:00",
    location: "Secret Location, Amsterdam",
    image: "/placeholder.svg",
    price: "€25",
    originalPrice: "€30",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-23",
    status: "available",
    capacity: "300",
    sold: "180",
    featured: true,
    description: "Experience the raw energy of underground hardcore with our most anticipated event of the year."
  },
  {
    id: "2",
    title: "HARDCORE FESTIVAL 2024",
    subtitle: "Industrial Warehouse Rave",
    date: "April 20, 2024",
    time: "20:00 - 04:00",
    location: "Industrial Warehouse, Rotterdam",
    image: "/placeholder.svg",
    price: "€45",
    originalPrice: "€55",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-festival",
    status: "selling-fast",
    capacity: "500",
    sold: "420",
    featured: true,
    description: "Join us in an abandoned industrial warehouse for the hardest festival experience."
  },
  {
    id: "3",
    title: "MIDNIGHT SESSIONS",
    subtitle: "Late Night Underground",
    date: "May 10, 2024",
    time: "00:00 - 08:00",
    location: "Underground Bunker, Utrecht",
    image: "/placeholder.svg",
    price: "€30",
    ticketUrl: "https://cmtickets.nl/event/hakborrel-midnight",
    status: "available",
    capacity: "200",
    sold: "45",
    featured: false,
    description: "Deep underground in a secret bunker location for the most intimate hardcore experience."
  }
]

const features = [
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Protected by CM Tickets with SSL encryption"
  },
  {
    icon: Music,
    title: "Exclusive Lineups",
    description: "Access to the best underground DJs and artists"
  },
  {
    icon: Users,
    title: "Limited Capacity",
    description: "Intimate events with restricted attendance"
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Tickets delivered immediately via email"
  }
]

export default function TicketsPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-secondary/6" />
        
        {/* Animated elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-breathe" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-breathe" style={{ animationDelay: '3s' }} />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-drift" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-drift" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto relative z-10 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary"></div>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">TICKETS</span>
              </h1>
              <div className="w-1 h-8 bg-primary"></div>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Secure your spot at the underground's most exclusive events. Limited capacity, maximum energy.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-black/40 border border-primary/20 rounded-xl p-4 mb-3 group-hover:border-primary/40 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-white text-sm font-semibold">{feature.title}</div>
                  </div>
                  <p className="text-gray-400 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-8">
            {ticketEvents.map((event, index) => (
              <div
                key={event.id}
                className={`group relative bg-black/40 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01] ${
                  event.featured 
                    ? 'border-primary/40 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(57,255,20,0.2)]' 
                    : 'border-gray-700/50 hover:border-primary/40'
                }`}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-6 left-6 z-10 bg-primary text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    FEATURED EVENT
                  </div>
                )}

                {/* Status Badge */}
                {event.status === "selling-fast" && (
                  <div className="absolute top-6 right-6 z-10 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    SELLING FAST
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Event Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image 
                      src={event.image || "/placeholder.svg"} 
                      alt={event.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                    
                    {/* Capacity Bar */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center justify-between text-white text-sm mb-2">
                          <span>Capacity</span>
                          <span>{event.sold}/{event.capacity}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(event.sold / event.capacity) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h2>
                      <p className="text-primary text-lg font-medium mb-4">{event.subtitle}</p>
                      <p className="text-gray-300 text-sm mb-6 leading-relaxed">{event.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-3 text-gray-300">
                          <Calendar className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium">{event.date}</div>
                            <div className="text-xs text-gray-400">{event.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Location</div>
                            <div className="text-xs text-gray-400">{event.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Attendees</div>
                            <div className="text-xs text-gray-400">{event.capacity - event.sold} spots left</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold text-primary">{event.price}</span>
                            {event.originalPrice && (
                              <span className="text-gray-400 text-lg line-through">{event.originalPrice}</span>
                            )}
                          </div>
                          <div className="text-gray-400 text-sm">per person</div>
                        </div>
                      </div>

                      <Button 
                        className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-4 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer" 
                        asChild
                      >
                        <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                          <Ticket className="h-5 w-5" />
                          BUY TICKETS
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info Section */}
          <div className="mt-20 bg-black/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
              <p className="text-gray-300">Every ticket includes access to the full event experience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Full event access</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Professional sound system</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Lighting & visuals</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Security & safety</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
              <p className="text-gray-400 text-sm">
                <strong>Important:</strong> 18+ only • ID required • Location sent 24h before event • 
                Non-refundable but transferable • Underground dress code recommended
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}