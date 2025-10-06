"use client"

import { Clock, MapPin, Music, Calendar, Heart, Info } from "lucide-react"
import { useState } from "react"

// Sample lineup data - replace with real data
const lineupData = [
  {
    id: "main-stage",
    name: "MAIN STAGE",
    color: "primary",
    events: [
      { 
        date: "20", 
        month: "SEPTEMBER", 
        time: "22:00 - 06:00", 
        artist: "THUNDER STORM", 
        genre: "Hardcore", 
        location: "Industrial Warehouse, Rotterdam",
        status: "confirmed",
        icon: "THUNDER"
      },
      { 
        date: "21", 
        month: "SEPTEMBER", 
        time: "23:00 - 05:00", 
        artist: "BASS DESTROYER", 
        genre: "Hardcore", 
        location: "Industrial Warehouse, Rotterdam",
        status: "confirmed",
        icon: "BASS"
      },
      { 
        date: "22", 
        month: "SEPTEMBER", 
        time: "22:30 - 06:30", 
        artist: "NEON PULSE", 
        genre: "Hardcore", 
        location: "Industrial Warehouse, Rotterdam",
        status: "confirmed",
        icon: "NEON"
      },
    ]
  },
  {
    id: "underground-stage",
    name: "UNDERGROUND STAGE",
    color: "secondary",
    events: [
      { 
        date: "20", 
        month: "SEPTEMBER", 
        time: "21:30 - 05:30", 
        artist: "DEEP BASS", 
        genre: "Underground", 
        location: "Secret Bunker, Amsterdam",
        status: "confirmed",
        icon: "DEEP"
      },
      { 
        date: "21", 
        month: "SEPTEMBER", 
        time: "23:30 - 06:00", 
        artist: "DARK MATTER", 
        genre: "Underground", 
        location: "Secret Bunker, Amsterdam",
        status: "confirmed",
        icon: "DARK"
      },
      { 
        date: "22", 
        month: "SEPTEMBER", 
        time: "22:00 - 05:00", 
        artist: "VOID SESSION", 
        genre: "Underground", 
        location: "Secret Bunker, Amsterdam",
        status: "confirmed",
        icon: "VOID"
      },
    ]
  },
  {
    id: "community-stage",
    name: "COMMUNITY STAGE",
    color: "primary",
    events: [
      { 
        date: "20", 
        month: "SEPTEMBER", 
        time: "22:30 - 04:30", 
        artist: "LOCAL HERO", 
        genre: "Community", 
        location: "Community Center, Utrecht",
        status: "confirmed",
        icon: "HERO"
      },
      { 
        date: "21", 
        month: "SEPTEMBER", 
        time: "23:00 - 05:00", 
        artist: "RISING STAR", 
        genre: "Community", 
        location: "Community Center, Utrecht",
        status: "confirmed",
        icon: "STAR"
      },
      { 
        date: "22", 
        month: "SEPTEMBER", 
        time: "22:00 - 04:00", 
        artist: "UNDERGROUND LEGEND", 
        genre: "Community", 
        location: "Community Center, Utrecht",
        status: "confirmed",
        icon: "LEGEND"
      },
    ]
  }
]

const eventInfo = {
  date: "2024-04-20",
  venue: "Industrial Warehouse, Rotterdam",
  doors: "21:00",
  end: "06:00"
}

export function AgendaSection() {
  const [selectedStage, setSelectedStage] = useState("main-stage")

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Agenda-specific background elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='30' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='50' cy='30' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='30' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'hexagon-move 15s linear infinite'
        }}
      />

      {/* Subtle side glows */}
      <div className="absolute top-1/2 left-0 w-60 h-60 bg-primary/8 rounded-full blur-[100px] -translate-y-1/2 animate-smooth-flow" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 right-0 w-60 h-60 bg-secondary/8 rounded-full blur-[100px] -translate-y-1/2 animate-smooth-flow" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      
      {/* Subtle floating agenda indicators */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/25 rounded-full animate-wave-motion" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-secondary/25 rounded-full animate-wave-motion" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      
      {/* Subtle floating particles */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary/15 rounded-full animate-atmospheric-drift" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-secondary/15 rounded-full animate-atmospheric-drift" style={{ animationDelay: '3s' }} />
      
      {/* Subtle central accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/4 to-secondary/4 rounded-full blur-[120px] animate-subtle-glow" style={{ animationDuration: '6s' }} />

      <div className="container-professional relative z-10">
        {/* Professional header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
            <h2 className="text-5xl md:text-7xl font-display">
              <span className="text-white">EVENT</span>{" "}
              <span className="text-gradient-primary">AGENDA</span>
            </h2>
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
          </div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-body mb-12">
            Check out the complete lineup and schedule for our upcoming event.
          </p>

          {/* Event info card */}
          <div className="card-professional p-8 max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/20 p-4 rounded-xl border border-primary/30 w-fit mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-gradient-primary text-xl font-heading mb-2">DATE</h3>
                <p className="text-gray-300 font-body">{formatDate(eventInfo.date)}</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 p-4 rounded-xl border border-secondary/30 w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-gradient-secondary text-xl font-heading mb-2">VENUE</h3>
                <p className="text-gray-300 font-body">{eventInfo.venue}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 p-4 rounded-xl border border-primary/30 w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-gradient-primary text-xl font-heading mb-2">TIMES</h3>
                <p className="text-gray-300 font-body">Doors: {eventInfo.doors} | End: {eventInfo.end}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stage selector */}
        <div className="flex justify-center mb-12">
          <div className="card-professional p-2">
            <div className="flex gap-2">
              {lineupData.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`px-6 py-3 rounded-lg font-heading text-sm transition-all duration-300 ${
                    selectedStage === stage.id
                      ? stage.color === 'primary'
                        ? 'bg-primary text-black'
                        : 'bg-secondary text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {stage.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lineup display */}
        <div className="max-w-6xl mx-auto">
          {lineupData.map((stage) => (
            <div
              key={stage.id}
              className={`transition-all duration-500 ${
                selectedStage === stage.id ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="mb-8">
                <div className="text-center mb-8">
                  <h3 className={`text-3xl font-display mb-2 ${
                    stage.color === 'primary' ? 'text-gradient-primary' : 'text-gradient-secondary'
                  }`}>
                    {stage.name}
                  </h3>
                  <div className={`w-24 h-1 mx-auto rounded-full ${
                    stage.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                  }`}></div>
                </div>

                <div className="space-y-4">
                  {stage.events.map((event, index) => (
                    <div
                      key={index}
                      className="bg-black/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 hover:border-primary/60 transition-all duration-300 hover:bg-black/90 group"
                    >
                      <div className="flex items-center gap-6">
                        {/* Date Section */}
                        <div className="flex flex-col items-center min-w-[80px]">
                          <div className="text-4xl font-bold text-primary mb-1">
                            {event.date}
                          </div>
                          <div className="text-gray-400 text-sm font-body uppercase tracking-wide">
                            {event.month}
                          </div>
                        </div>

                        {/* Event Icon */}
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                          stage.color === 'primary' 
                            ? 'bg-gradient-to-b from-primary/30 to-secondary/30 border border-primary/30' 
                            : 'bg-gradient-to-b from-secondary/30 to-primary/30 border border-secondary/30'
                        }`}>
                          <span className="text-white text-xs font-bold uppercase">
                            {event.icon}
                          </span>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1">
                          <h4 className="text-white text-xl font-heading mb-2">{event.artist}</h4>
                          <p className="text-gray-400 font-body mb-1">{event.location}</p>
                          <p className="text-primary font-body text-sm">{event.time}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col items-end gap-3">
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="border border-gray-400 text-gray-400 hover:border-primary hover:text-primary px-4 py-2 rounded-full text-sm font-body transition-all duration-300">
                            Meer info
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional action button */}
        <div className="text-center mt-20">
          <button className="btn-professional px-12 py-4 text-lg cursor-pointer">
            GET TICKETS NOW
          </button>
        </div>
      </div>
    </section>
  )
}
