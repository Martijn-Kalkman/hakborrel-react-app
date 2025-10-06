import { Globe, Lock, ArrowRight, Music, Users, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Main diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
      
      {/* Additional gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/30 to-transparent" />
      
      {/* Diagonal pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.03) 2px,
            rgba(255, 255, 255, 0.03) 4px
          )`
        }}
      />

      {/* Corner glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-breathe" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-breathe" style={{ animationDelay: '2s' }} />
      
      {/* Additional atmospheric glows */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Subtle floating particles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-drift" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/30 rounded-full animate-drift" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-primary/40 rounded-full animate-drift" style={{ animationDelay: '10s' }} />

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
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center leading-tight">
          <span className="text-white">HAKBORREL</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-20 tracking-wide max-w-2xl mx-auto text-center leading-relaxed">
          UNDERGROUND • HARDCORE • MOVEMENT
        </p>

        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Open Gatherings Card */}
            <div className="bg-black/60 backdrop-blur-sm border border-primary/30 rounded-xl p-8 group hover:border-primary/60 hover:bg-black/70 transition-all duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-primary text-2xl font-bold mb-3">OPEN GATHERINGS</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Public events for everyone. Experience the energy, feel the bass, join the collective underground movement.
                  </p>
                </div>
              </div>
              <Link href="/tickets">
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold rounded-lg py-4 text-lg group-hover:scale-[1.02] cursor-pointer cursor-pointer">
                  GET TICKETS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Community Raves Card */}
            <div className="bg-black/60 backdrop-blur-sm border border-secondary/30 rounded-xl p-8 group hover:border-secondary/60 hover:bg-black/70 transition-all duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <Lock className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-secondary text-2xl font-bold mb-3">COMMUNITY RAVES</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Exclusive underground events. Hidden locations, secret lineups, intimate experiences for the initiated.
                  </p>
                </div>
              </div>
              <Link href="/tickets">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg py-4 text-lg group-hover:scale-[1.02] cursor-pointer cursor-pointer">
                  GET TICKETS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Events Card */}
            <div className="bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg p-6 text-center group hover:border-primary/60 hover:bg-black/70 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Music className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-primary text-lg font-bold mb-2">EVENTS</h3>
              <p className="text-gray-400 text-sm mb-4">Upcoming shows and festivals</p>
              <Link href="/tickets">
                <Button className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-lg px-4 py-2 text-sm group-hover:scale-105 cursor-pointer">
                  GET TICKETS
                </Button>
              </Link>
            </div>

            {/* Community Card */}
            <div className="bg-black/60 backdrop-blur-sm border border-secondary/30 rounded-lg p-6 text-center group hover:border-secondary/60 hover:bg-black/70 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="text-secondary text-lg font-bold mb-2">COMMUNITY</h3>
              <p className="text-gray-400 text-sm mb-4">Join the underground movement</p>
              <Link href="/tickets">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg px-4 py-2 text-sm group-hover:scale-105 cursor-pointer">
                  GET TICKETS
                </Button>
              </Link>
            </div>

            {/* Music Card */}
            <div className="bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg p-6 text-center group hover:border-primary/60 hover:bg-black/70 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-primary text-lg font-bold mb-2">MUSIC</h3>
              <p className="text-gray-400 text-sm mb-4">Latest tracks and mixes</p>
              <Link href="/tickets">
                <Button className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-lg px-4 py-2 text-sm group-hover:scale-105 cursor-pointer">
                  GET TICKETS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}