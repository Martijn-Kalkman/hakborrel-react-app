"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (pathname !== '/') {
      router.push('/#' + sectionId)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        // Smooth scroll with offset for better positioning
        const offset = 80 // Account for fixed navigation height
        const elementPosition = element.offsetTop - offset
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsMenuOpen(false)
  }

  const navigateToHome = () => {
    if (pathname !== '/') {
      router.push('/')
    } else {
      scrollToSection('home')
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={navigateToHome} className="flex items-center hover:scale-105 transition-transform">
            <div 
              className="w-10 h-10 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/logo/HakBorrel-LOGOS_white 1.png')"
              }}
            />
            <span className="text-white font-bold text-lg ml-3">HAKBORREL</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={navigateToHome} className="text-white hover:text-primary transition-colors font-medium text-sm tracking-wide hover:scale-105 cursor-pointer">
              HOME
            </button>
            <button onClick={() => scrollToSection('events')} className="text-white hover:text-primary transition-colors font-medium text-sm tracking-wide hover:scale-105 cursor-pointer">
              EVENTS
            </button>
            <button onClick={() => scrollToSection('videos')} className="text-white hover:text-primary transition-colors font-medium text-sm tracking-wide hover:scale-105 cursor-pointer">
              VIDEO&apos;S
            </button>
            <button onClick={() => scrollToSection('community')} className="text-white hover:text-primary transition-colors font-medium text-sm tracking-wide hover:scale-105 cursor-pointer">
              COMMUNITY
            </button>
            <button onClick={() => scrollToSection('story')} className="text-white hover:text-primary transition-colors font-medium text-sm tracking-wide hover:scale-105 cursor-pointer">
              STORY
            </button>
            <button onClick={() => scrollToSection('media')} className="text-white hover:text-primary transition-colors font-medium text-sm tracking-wide hover:scale-105 cursor-pointer">
              MEDIA
            </button>
            <Link href="/tickets" className="text-white hover:text-primary transition-colors font-medium text-sm tracking-wide hover:scale-105 cursor-pointer">
              TICKETS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Search and Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Zoeken..."
                className="pl-10 w-48 bg-transparent border-primary/50 text-white placeholder:text-gray-400 focus:border-primary hover:border-primary/70 transition-colors"
              />
            </div>
            <Button variant="outline" className="border-primary/50 text-white hover:bg-primary/10 bg-transparent font-medium text-sm hover:scale-105 transition-all">
              INLOGGEN
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-black font-medium text-sm transition-all hover:scale-105">NIEUWSBRIEF</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 mt-4">
            <div className="px-6 py-4 space-y-4">
              <button onClick={navigateToHome} className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 cursor-pointer">
                HOME
              </button>
              <button onClick={() => scrollToSection('events')} className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 cursor-pointer">
                EVENTS
              </button>
              <button onClick={() => scrollToSection('videos')} className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 cursor-pointer">
                VIDEO&apos;S
              </button>
              <button onClick={() => scrollToSection('community')} className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 cursor-pointer">
                COMMUNITY
              </button>
              <button onClick={() => scrollToSection('story')} className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 cursor-pointer">
                STORY
              </button>
              <button onClick={() => scrollToSection('media')} className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 cursor-pointer">
                MEDIA
              </button>
              <Link href="/tickets" className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 cursor-pointer">
                TICKETS
              </Link>
              <div className="pt-4 border-t border-white/10">
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-medium text-sm transition-all cursor-pointer">
                  NIEUWSBRIEF
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}