"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, Users, Ticket, CreditCard, ArrowRight, Check, Star, Zap, Crown, Shield } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"

interface TicketType {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  available: number
  popular?: boolean
  icon: any
  color: string
}

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  image: string
  description: string
  ticketTypes: TicketType[]
  status: 'upcoming' | 'selling-fast' | 'sold-out'
}

const events: Event[] = [
  {
    id: "underground-rave-22",
    title: "Underground Rave #22",
    date: "2024-09-20",
    time: "22:00 - 06:00",
    location: "Industrial Warehouse, Rotterdam",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    description: "Experience the raw energy of underground hardcore with the best DJs in the scene.",
    status: 'selling-fast',
    ticketTypes: [
      {
        id: "early-bird",
        name: "Early Bird",
        price: 25,
        description: "Limited early bird tickets",
        features: ["Entry to all stages", "Free drink voucher", "Priority entry"],
        available: 50,
        popular: true,
        icon: Zap,
        color: "from-yellow-400 to-orange-500"
      },
      {
        id: "regular",
        name: "Regular",
        price: 35,
        description: "Standard admission",
        features: ["Entry to all stages", "Access to VIP area"],
        available: 200,
        icon: Ticket,
        color: "from-primary to-primary/80"
      },
      {
        id: "vip",
        name: "VIP",
        price: 65,
        description: "Premium experience",
        features: ["Entry to all stages", "VIP area access", "Free drinks", "Meet & greet", "Merchandise"],
        available: 30,
        icon: Crown,
        color: "from-secondary to-secondary/80"
      }
    ]
  },
  {
    id: "festival-2024",
    title: "HakBorrel Festival 2024",
    date: "2024-09-21",
    time: "20:00 - 06:00",
    location: "Recreatieterrein Middelwaard, Vianen",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&crop=center",
    description: "Our biggest event of the year with multiple stages and world-class artists.",
    status: 'upcoming',
    ticketTypes: [
      {
        id: "day-pass",
        name: "Day Pass",
        price: 45,
        description: "Single day access",
        features: ["Entry to all stages", "Food voucher", "Event merchandise"],
        available: 500,
        icon: Calendar,
        color: "from-primary to-primary/80"
      },
      {
        id: "weekend-pass",
        name: "Weekend Pass",
        price: 85,
        description: "Full weekend access",
        features: ["Entry to all stages", "Food vouchers", "Event merchandise", "Camping access"],
        available: 300,
        popular: true,
        icon: Star,
        color: "from-secondary to-secondary/80"
      },
      {
        id: "premium",
        name: "Premium",
        price: 125,
        description: "Ultimate festival experience",
        features: ["Entry to all stages", "VIP area", "Free food & drinks", "Artist meet & greet", "Premium merchandise", "Camping access"],
        available: 100,
        icon: Crown,
        color: "from-yellow-400 to-orange-500"
      }
    ]
  },
  {
    id: "bunker-sessions",
    title: "Bunker Sessions",
    date: "2024-09-22",
    time: "23:00 - 05:00",
    location: "Secret Bunker, Amsterdam",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
    description: "Exclusive underground event in a hidden location. Limited capacity.",
    status: 'sold-out',
    ticketTypes: [
      {
        id: "standard",
        name: "Standard",
        price: 40,
        description: "Entry to exclusive event",
        features: ["Entry to bunker", "Underground experience", "Limited edition merch"],
        available: 0,
        icon: Shield,
        color: "from-gray-500 to-gray-600"
      },
      {
        id: "exclusive",
        name: "Exclusive",
        price: 75,
        description: "Premium bunker experience",
        features: ["Entry to bunker", "VIP area access", "Free drinks", "Artist interaction", "Exclusive merchandise"],
        available: 0,
        icon: Crown,
        color: "from-gray-500 to-gray-600"
      }
    ]
  }
]

export default function TicketsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null)
  const [quantity, setQuantity] = useState(1)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const calculateTotal = () => {
    if (!selectedTicket) return 0
    return selectedTicket.price * quantity
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'selling-fast':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'sold-out':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      default:
        return 'bg-primary/20 text-primary border-primary/30'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'selling-fast':
        return 'SELLING FAST'
      case 'sold-out':
        return 'SOLD OUT'
      default:
        return 'AVAILABLE'
    }
  }

  return (
    <main className="min-h-screen relative">
      <ScrollProgressIndicator />
      
      {/* Same enhanced background as homepage */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-primary/6 via-transparent to-secondary/8" />
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-primary/4 to-secondary/6" />
      
      {/* Enhanced atmospheric glows */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[200px] animate-smooth-flow" style={{ animationDuration: '15s' }} />
      <div className="fixed top-3/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-[180px] animate-smooth-flow" style={{ animationDuration: '18s', animationDelay: '3s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/6 to-secondary/6 rounded-full blur-[300px] animate-atmospheric-drift" style={{ animationDuration: '25s' }} />
      
      {/* Very subtle noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Enhanced smooth edge fade */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Header - same style as homepage */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                <h1 className="text-5xl md:text-7xl font-display">
                  <span className="text-white">GET YOUR</span>{" "}
                  <span className="text-gradient-primary">TICKETS</span>
                </h1>
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
              </div>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-body mb-12">
                Join the underground hardcore movement. Secure your spot at our exclusive events.
              </p>
              
              {/* Additional Content */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="card-professional p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display text-white mb-3">Multiple Events</h3>
                    <p className="text-gray-400 text-sm">
                      Choose from our upcoming underground events throughout the year
                    </p>
                  </div>
                  
                  <div className="card-professional p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Ticket className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display text-white mb-3">Flexible Options</h3>
                    <p className="text-gray-400 text-sm">
                      Various ticket types to match your underground experience level
                    </p>
                  </div>
                  
                  <div className="card-professional p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                      <CreditCard className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display text-white mb-3">Secure Payment</h3>
                    <p className="text-gray-400 text-sm">
                      Safe and encrypted payment processing for your peace of mind
                    </p>
                  </div>
                </div>
                
                <div className="card-professional p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-display text-white mb-4">
                      Why Choose <span className="text-gradient-primary">HakBorrel</span>?
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Underground Experience</h4>
                          <p className="text-gray-400 text-sm">Authentic hardcore events in intimate venues</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Top Artists</h4>
                          <p className="text-gray-400 text-sm">Featuring the best hardcore DJs and producers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Community Focus</h4>
                          <p className="text-gray-400 text-sm">Building connections within the hardcore scene</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Digital Tickets</h4>
                          <p className="text-gray-400 text-sm">Instant delivery via email, no printing needed</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Fair Pricing</h4>
                          <p className="text-gray-400 text-sm">Transparent pricing with no hidden fees</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">24/7 Support</h4>
                          <p className="text-gray-400 text-sm">Round-the-clock customer support for any issues</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Events Section - same style as homepage */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                  <h2 className="text-5xl md:text-7xl font-display">
                    <span className="text-white">UPCOMING</span>{" "}
                    <span className="text-gradient-primary">EVENTS</span>
                  </h2>
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                </div>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-body">
                  Choose your event and secure your tickets for the ultimate hardcore experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <div
                    key={event.id}
                    className={`card-professional p-6 group cursor-pointer transition-all duration-300 ${
                      selectedEvent?.id === event.id 
                        ? 'ring-2 ring-primary/50 shadow-lg shadow-primary/20' 
                        : 'hover:scale-105'
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`px-3 py-1 rounded-full border text-xs font-bold ${getStatusColor(event.status)}`}>
                        {getStatusText(event.status)}
                      </div>
                    </div>
                    
                    <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-heading mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(event.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-gray-300 text-sm">{event.location}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-secondary" />
                        <span className="text-gray-300 text-sm">
                          {event.ticketTypes.reduce((sum, type) => sum + type.available, 0)} available
                        </span>
                      </div>
                      <div className="text-primary font-medium">
                        From €{Math.min(...event.ticketTypes.map(t => t.price))}
                      </div>
                    </div>
                    <button
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                        selectedEvent?.id === event.id
                          ? 'bg-primary text-black'
                          : 'bg-primary/20 text-primary hover:bg-primary/30'
                      }`}
                    >
                      {selectedEvent?.id === event.id ? '✓ Selected' : 'Select Event'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tickets Section - same style as homepage */}
            {selectedEvent && (
              <div className="max-w-6xl mx-auto mb-20">
                <div className="text-center mb-20">
                  <div className="inline-flex items-center gap-4 mb-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                    <h2 className="text-5xl md:text-7xl font-display">
                      <span className="text-white">CHOOSE YOUR</span>{" "}
                      <span className="text-gradient-primary">TICKETS</span>
                    </h2>
                    <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                  </div>
                  <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-body">
                    Select the perfect ticket type for your underground experience.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {selectedEvent.ticketTypes.map((ticket) => {
                    const IconComponent = ticket.icon
                    return (
                      <div
                        key={ticket.id}
                        className={`card-professional p-6 group cursor-pointer transition-all duration-300 ${
                          selectedTicket?.id === ticket.id
                            ? 'ring-2 ring-primary/50 shadow-lg shadow-primary/20'
                            : ticket.popular
                            ? 'ring-1 ring-primary/30'
                            : 'hover:scale-105'
                        }`}
                        onClick={() => setSelectedTicket(ticket)}
                      >
                        {ticket.popular && (
                          <div className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                            MOST POPULAR
                          </div>
                        )}
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-display text-white mb-2">{ticket.name}</h3>
                          <div className="text-4xl font-bold text-primary mb-2">€{ticket.price}</div>
                          <p className="text-gray-400 text-sm">{ticket.description}</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {ticket.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">
                            {ticket.available} available
                          </span>
                          <div className={`w-3 h-3 rounded-full ${
                            selectedTicket?.id === ticket.id ? 'bg-primary' : 'bg-gray-600'
                          }`}></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Checkout Section - same style as homepage */}
            {selectedEvent && selectedTicket && (
              <div className="max-w-4xl mx-auto mb-20">
                <div className="text-center mb-20">
                  <div className="inline-flex items-center gap-4 mb-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                    <h2 className="text-5xl md:text-7xl font-display">
                      <span className="text-white">COMPLETE</span>{" "}
                      <span className="text-gradient-primary">PURCHASE</span>
                    </h2>
                    <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                  </div>
                  <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-body">
                    Finalize your ticket purchase and join the underground movement.
                  </p>
                </div>

                <div className="card-professional p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div>
                      <h3 className="text-2xl font-display text-white mb-6">Order Summary</h3>
                      <div className="flex items-start gap-4 mb-6">
                        <img
                          src={selectedEvent.image}
                          alt={selectedEvent.title}
                          className="w-20 h-20 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-lg">{selectedEvent.title}</h4>
                          <p className="text-primary text-sm font-medium">{formatDate(selectedEvent.date)}</p>
                          <p className="text-gray-400 text-sm">{selectedEvent.location}</p>
                        </div>
                      </div>
                      <div className="border-t border-gray-700/50 pt-4 mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">{selectedTicket.name} × {quantity}</span>
                          <span className="text-white">€{selectedTicket.price * quantity}</span>
                        </div>
                        <div className="flex items-center justify-between text-2xl font-bold">
                          <span className="text-white">Total</span>
                          <span className="text-primary">€{calculateTotal()}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <Check className="h-4 w-4 text-primary" />
                          Digital tickets sent via email
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <CreditCard className="h-4 w-4 text-primary" />
                          Secure payment processing
                        </div>
                      </div>
                    </div>

                    {/* Checkout Form */}
                    <div>
                      <h3 className="text-2xl font-display text-white mb-6">Checkout Details</h3>
                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">Quantity</label>
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition-colors"
                            >
                              -
                            </button>
                            <span className="text-white font-medium">{quantity}</span>
                            <button
                              onClick={() => setQuantity(Math.min(selectedTicket.available, quantity + 1))}
                              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Complete Purchase - €{calculateTotal()}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}