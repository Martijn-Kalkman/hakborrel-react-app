"use client"

interface SharedBackgroundProps {
  variant?: 'hero' | 'events' | 'videos' | 'community' | 'story' | 'media'
  className?: string
}

export function SharedBackground({ variant = 'hero', className = '' }: SharedBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Unified base background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Single continuous gradient that flows across all sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-secondary/12" />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='0.5'/%3E%3Ccircle cx='30' cy='10' r='0.5'/%3E%3Ccircle cx='50' cy='10' r='0.5'/%3E%3Ccircle cx='10' cy='30' r='0.5'/%3E%3Ccircle cx='30' cy='30' r='0.5'/%3E%3Ccircle cx='50' cy='30' r='0.5'/%3E%3Ccircle cx='10' cy='50' r='0.5'/%3E%3Ccircle cx='30' cy='50' r='0.5'/%3E%3Ccircle cx='50' cy='50' r='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Smooth edge fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
    </div>
  )
}
