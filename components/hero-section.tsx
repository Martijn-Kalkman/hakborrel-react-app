import { Globe, Lock, ArrowRight, Music, Users, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Hero-specific diagonal pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.02) 2px,
            rgba(255, 255, 255, 0.02) 4px
          )`
        }}
      />

      {/* Subtle corner glow effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-smooth-flow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-smooth-flow" style={{ animationDelay: '2s' }} />
      
      {/* Very subtle atmospheric glows */}
      <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-primary/5 rounded-full blur-[100px] animate-atmospheric-drift" />
      <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-secondary/5 rounded-full blur-[100px] animate-atmospheric-drift" style={{ animationDelay: '3s' }} />
      
      {/* Subtle floating particles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-atmospheric-drift" />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-secondary/20 rounded-full animate-atmospheric-drift" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-primary/25 rounded-full animate-atmospheric-drift" style={{ animationDelay: '10s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-12">
          <div 
            className="w-24 h-24 mx-auto bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/logo/HakBorrel-LOGOS_white 1.png')"
            }}
          />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-display mb-6 text-center leading-tight">
          <span className="text-white">HAKBORREL</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-16 tracking-wider max-w-2xl mx-auto text-center leading-relaxed font-body uppercase">
          UNDERGROUND • HARDCORE • MOVEMENT
        </p>

        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Open Gatherings Card */}
            <div className="card-professional p-6 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-gradient-primary text-xl font-heading mb-3">OPEN GATHERINGS</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-body">
                    Public events for everyone. Experience the energy, feel the bass, join the collective underground movement.
                  </p>
                </div>
              </div>
              <Link href="/tickets">
                <button className="btn-professional w-full text-black font-semibold py-3 text-base group-hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2">
                  GET TICKETS
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Community Raves Card */}
            <div className="card-professional p-6 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/20 p-3 rounded-xl border border-secondary/30">
                  <Lock className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-gradient-secondary text-xl font-heading mb-3">COMMUNITY RAVES</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-body">
                    Exclusive underground events. Hidden locations, secret lineups, intimate experiences for the initiated.
                  </p>
                </div>
              </div>
              <Link href="/tickets">
                <button className="btn-professional btn-secondary w-full text-white font-semibold py-3 text-base group-hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2">
                  GET TICKETS
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Events Card */}
            <div className="card-professional p-4 text-center group">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
                  <Music className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-gradient-primary text-lg font-heading mb-2">EVENTS</h3>
              <p className="text-gray-400 text-xs mb-4 font-body">Upcoming shows and festivals</p>
              <Link href="/tickets">
                <button className="btn-professional px-4 py-2 text-xs group-hover:scale-105 cursor-pointer">
                  GET TICKETS
                </button>
              </Link>
            </div>

            {/* Community Card */}
            <div className="card-professional p-4 text-center group">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary/20 p-3 rounded-xl border border-secondary/30">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="text-gradient-secondary text-lg font-heading mb-2">COMMUNITY</h3>
              <p className="text-gray-400 text-xs mb-4 font-body">Join the underground movement</p>
              <Link href="/tickets">
                <button className="btn-professional btn-secondary px-4 py-2 text-xs group-hover:scale-105 cursor-pointer">
                  GET TICKETS
                </button>
              </Link>
            </div>

            {/* Music Card */}
            <div className="card-professional p-4 text-center group">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-gradient-primary text-lg font-heading mb-2">MUSIC</h3>
              <p className="text-gray-400 text-xs mb-4 font-body">Latest tracks and mixes</p>
              <Link href="/tickets">
                <button className="btn-professional px-4 py-2 text-xs group-hover:scale-105 cursor-pointer">
                  GET TICKETS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}