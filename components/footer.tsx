import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Music } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800/50">
      {/* Enhanced background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
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
      
      {/* Additional subtle pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 4px,
            rgba(57, 255, 20, 0.01) 4px,
            rgba(57, 255, 20, 0.01) 8px
          )`
        }}
      />

      {/* Subtle atmospheric effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url('/logo/HakBorrel-LOGOS_white 1.png')"
                }}
              />
              <h3 className="text-white text-xl font-bold">HAKBORREL</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Underground hardcore movement bringing together music lovers through authentic experiences and raw energy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">EVENTS</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/events" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Open Gatherings
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Event Agenda
                </Link>
              </li>
              <li>
                <Link href="/secret-chapters" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Secret Events
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">COMMUNITY</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/story" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Join Community
                </Link>
              </li>
              <li>
                <Link href="/muziek" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Media Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@hakborrel.nl" className="hover:text-primary transition-colors">
                  info@hakborrel.nl
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+31612345678" className="hover:text-primary transition-colors">
                  +31 6 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Amsterdam, Netherlands</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 HAKBORREL. All rights reserved. Underground hardcore movement.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-black/60 backdrop-blur-sm border border-primary/30 rounded-xl p-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music className="h-6 w-6 text-primary" />
              <h4 className="text-white text-lg font-semibold">STAY CONNECTED</h4>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Get the latest updates on events, secret locations, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/40 border border-primary/50 text-white placeholder:text-gray-400 focus:border-primary rounded-lg px-4 py-3 text-sm"
              />
              <button className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
