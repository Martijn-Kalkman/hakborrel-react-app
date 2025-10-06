"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Globe, Lock, CheckCircle2, XCircle, Users, Music, Calendar, MapPin } from "lucide-react"

export function CommunitySection() {
  const [code, setCode] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState("")

  const handleUnlock = () => {
    if (code.toLowerCase() === "hakborrel2024") {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Invalid code. Try again or attend an event to receive your code.")
    }
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Community-specific hexagonal pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M30 0l26 15v30L30 60 4 45V15L30 0z'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'hexagon-move 15s linear infinite'
        }}
      />

      {/* Breathing side glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/15 rounded-full blur-[100px] -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] -translate-y-1/2 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      
      {/* Floating access indicators */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '2s' }} />
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-secondary/40 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      
      {/* Central pulsing accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-primary"></div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">COMMUNITY</span>{" "}
              <span className="text-primary">RAVES</span>
            </h2>
            <div className="w-1 h-8 bg-primary"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose your experience: Open gatherings for everyone or exclusive secret events for the initiated.
          </p>
        </div>

        {/* Two side-by-side sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Open Gatherings Section */}
          <div className="bg-black/60 backdrop-blur-sm border border-primary/30 rounded-xl p-8 group hover:border-primary/60 hover:bg-black/70 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 p-4 rounded-lg">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-primary text-2xl font-bold">OPEN GATHERINGS</h3>
                <p className="text-gray-400 text-sm">Public events for everyone</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <Users className="h-5 w-5 text-primary" />
                <span>Open to all hardcore enthusiasts</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Regular monthly events</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Public venues and locations</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Music className="h-5 w-5 text-primary" />
                <span>Diverse lineup of DJs</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Next Open Event</h4>
                <p className="text-gray-300 text-sm mb-2">UNDERGROUND RAVE #23</p>
                <p className="text-gray-400 text-xs">March 15, 2024 • Secret Location, Amsterdam</p>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 text-lg group-hover:scale-[1.02] cursor-pointer">
                VIEW OPEN EVENTS
              </Button>
            </div>
          </div>

          {/* Secret Events Section */}
          <div className="bg-black/60 backdrop-blur-sm border border-secondary/30 rounded-xl p-8 group hover:border-secondary/60 hover:bg-black/70 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary/20 p-4 rounded-lg">
                <Lock className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-secondary text-2xl font-bold">SECRET EVENTS</h3>
                <p className="text-gray-400 text-sm">Exclusive underground gatherings</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <Lock className="h-5 w-5 text-secondary" />
                <span>Invite-only community access</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Hidden locations revealed 24h before</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Music className="h-5 w-5 text-secondary" />
                <span>Secret lineups and special guests</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Users className="h-5 w-5 text-secondary" />
                <span>Intimate atmosphere, limited capacity</span>
              </div>
            </div>

            {!isUnlocked ? (
              <div className="space-y-4">
                <div className="bg-secondary/10 rounded-lg p-4">
                  <h4 className="text-secondary font-semibold mb-2">Access Required</h4>
                  <p className="text-gray-300 text-sm mb-2">Enter your community code to unlock</p>
                  <p className="text-gray-400 text-xs">Attend an event to receive your access code</p>
                </div>

                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Enter your code..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="bg-black/40 border-secondary/50 text-white placeholder:text-gray-400 focus:border-secondary"
                    onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
                  />

                  {error && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <XCircle className="h-4 w-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  <Button
                    onClick={handleUnlock}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 text-lg"
                  >
                    UNLOCK SECRET ACCESS
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-secondary/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <h4 className="text-secondary font-semibold">Access Granted</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">Next Secret Event</p>
                  <p className="text-gray-400 text-xs">April 20, 2024 • Location TBA</p>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 text-lg group-hover:scale-[1.02] cursor-pointer">
                  VIEW SECRET EVENTS
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <div className="bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 max-w-4xl mx-auto">
            <h4 className="text-white text-lg font-bold mb-4">HOW IT WORKS</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
              <div className="text-center">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h5 className="font-semibold mb-2">Attend Open Events</h5>
                <p>Start with our public gatherings to experience the community</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <h5 className="font-semibold mb-2">Get Your Code</h5>
                <p>Receive your exclusive access code at the event</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h5 className="font-semibold mb-2">Unlock Secrets</h5>
                <p>Access exclusive events and hidden locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}