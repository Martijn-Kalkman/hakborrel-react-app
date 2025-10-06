"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { X, Play, Download, Share2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

// Mock media data
const eventMedia = {
  "1": {
    eventTitle: "UNDERGROUND RAVE #23",
    photos: [
      { id: 1, url: "/hardcore-rave-underground-party-dark-neon-lights.jpg", caption: "The energy was unreal" },
      { id: 2, url: "/hardcore-festival-industrial-warehouse-dark-atmosp.jpg", caption: "Lost in the bass" },
      { id: 3, url: "/underground-bunker-rave-dark-green-lights.jpg", caption: "Underground vibes" },
      {
        id: 4,
        url: "/hardcore-rave-underground-party-dark-neon-lights-c.jpg",
        caption: "The crowd went wild",
      },
      { id: 5, url: "/placeholder.svg?key=m5xy", caption: "DJ set highlights" },
      { id: 6, url: "/placeholder.svg?key=m6xy", caption: "Atmosphere on point" },
    ],
    videos: [
      { id: 1, thumbnail: "/placeholder.svg?key=v1xy", title: "Event Highlights", duration: "3:45" },
      { id: 2, thumbnail: "/placeholder.svg?key=v2xy", title: "DJ Set - Part 1", duration: "15:20" },
    ],
  },
}

export default function EventMediaPage({ params }: { params: { id: string } }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const media = eventMedia[params.id as keyof typeof eventMedia]

  if (!media) {
    return <div>Media not found</div>
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < media.photos.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-purple-950/30" />

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="mb-12">
            <Link href={`/events/${params.id}`}>
              <Button
                variant="outline"
                className="mb-6 border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
              >
                ← Back to Event
              </Button>
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-primary" style={{ textShadow: "0 0 40px rgba(57, 255, 20, 0.8)" }}>
                EVENT MEDIA
              </span>
            </h1>
            <p className="text-gray-400 text-lg">{media.eventTitle}</p>
          </div>

          {/* Photos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {media.photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary rounded-full p-3">
                        <Share2 className="h-6 w-6 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {media.videos.map((video) => (
                <div
                  key={video.id}
                  className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group bg-black border border-primary/30 hover:border-primary transition-colors"
                >
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-black fill-black" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white font-bold">{video.title}</p>
                    <p className="text-gray-400 text-sm">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={prevImage}
            disabled={selectedImage === 0}
            className="absolute left-4 text-white hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <div className="text-4xl">‹</div>
          </button>

          <button
            onClick={nextImage}
            disabled={selectedImage === media.photos.length - 1}
            className="absolute right-4 text-white hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <div className="text-4xl">›</div>
          </button>

          <div className="max-w-6xl w-full">
            <div className="relative aspect-video">
              <Image
                src={media.photos[selectedImage].url || "/placeholder.svg"}
                alt={media.photos[selectedImage].caption}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-4 text-lg">{media.photos[selectedImage].caption}</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button className="bg-primary hover:bg-primary/90 text-black">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
