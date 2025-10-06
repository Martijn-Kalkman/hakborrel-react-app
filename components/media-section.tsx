import Image from "next/image"
import Link from "next/link"
import { Youtube, Music, Instagram } from "lucide-react"

const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    title: "Underground Rave #22",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&crop=center",
    title: "Festival 2023",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
    title: "Bunker Sessions",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop&crop=center",
    title: "Midnight Madness",
  },
]

export function MediaSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Animated media gallery background */}
      <div className="absolute inset-0 bg-black" />
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(128, 0, 255, 0.15) 0%, transparent 50%), 
                      radial-gradient(circle at 70% 70%, rgba(57, 255, 20, 0.15) 0%, transparent 50%)`,
          animation: 'media-pulse 12s ease-in-out infinite'
        }}
      />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 20s linear infinite'
        }}
      />

      {/* Rotating central glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-[150px] animate-spin" 
        style={{ animationDuration: '30s' }}
      />
      
      {/* Floating media indicators */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: '2s' }} />
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-secondary/20 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-secondary/20 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
      
      {/* Pulsing corner accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-secondary"></div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-secondary">MEDIA</span>{" "}
              <span className="text-white">GALLERY</span>
            </h2>
            <div className="w-1 h-8 bg-secondary"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Relive the energy and atmosphere of our underground gatherings through our photo gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mediaItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg bg-black/60 backdrop-blur-sm border border-gray-700/50 hover:border-secondary/50 transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a 
            href="https://youtube.com/@hakborrel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center border border-red-600/30 group-hover:bg-red-600/30 group-hover:border-red-600/50 transition-all duration-300">
              <Youtube className="h-8 w-8 text-red-500 group-hover:text-red-400" />
            </div>
            <span className="text-gray-400 text-sm font-body group-hover:text-white transition-colors">YouTube</span>
          </a>

          <a 
            href="https://tiktok.com/@hakborrel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border border-gray-600/30 group-hover:bg-black/30 group-hover:border-gray-500/50 transition-all duration-300">
              <Music className="h-8 w-8 text-white group-hover:text-gray-300" />
            </div>
            <span className="text-gray-400 text-sm font-body group-hover:text-white transition-colors">TikTok</span>
          </a>

          <a 
            href="https://instagram.com/hakborrel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center border border-purple-600/30 group-hover:from-purple-600/30 group-hover:to-pink-600/30 group-hover:border-purple-500/50 transition-all duration-300">
              <Instagram className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
            </div>
            <span className="text-gray-400 text-sm font-body group-hover:text-white transition-colors">Instagram</span>
          </a>
        </div>

        <div className="text-center mt-12">
          <Link href="/tickets">
            <button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              GET TICKETS
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}