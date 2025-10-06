"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { X, Play, Share2, Lock } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

// Mock private media data
const privateEventMedia = {
  "private-1": {
    eventTitle: "HAKBORREL: CHAPTER XII",
    photos: [
      { id: 1, url: "/placeholder.svg?key=pm1xy", caption: "Exclusive underground atmosphere" },
      { id: 2, url: "/placeholder.svg?key=pm2xy", caption: "The initiated gather" },
      { id: 3, url: "/placeholder.svg?key=pm3xy", caption: "Secret location revealed" },
      { id: 4, url: "/placeholder.svg?key=pm4xy", caption: "Pure hardcore energy" },
    ],
    videos: [{ id: 1, thumbnail: "/placeholder.svg?key=pv1xy", title: "Chapter XII Highlights", duration: "5:12" }],
  },
}

export default function PrivateEventMediaPage({ params }: { params: { id: string } }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const media = privateEventMedia[params.id as keyof typeof privateEventMedia]

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

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-purple-900/30" />

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="mb-12">
            <Link href="/secret-chapters/private-events">
              <Button
                variant="outline"
                className="mb-6 border-secondary/50 text-secondary hover:bg-secondary/10 bg-transparent"
              >
                ← Back to Private Events
              </Button>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-8 w-8 text-secondary" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-secondary" style={{ textShadow: "0 0 40px rgba(128, 0, 255, 0.8)" }}>
                  EXCLUSIVE MEDIA
                </span>
              </h1>
            </div>
            <p className="text-gray-400 text-lg">{media.eventTitle}</p>
            <p className="text-secondary text-sm mt-2">🔒 Private - Only visible to community members</p>
          </div>

          {/* Photos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {media.photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group border-2 border-secondary/30 hover:border-secondary transition-colors"
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
                      <div className="bg-secondary rounded-full p-3">
                        <Share2 className="h-6 w-6 text-white" />
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
                  className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group bg-black border-2 border-secondary/30 hover:border-secondary transition-colors"
                >
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="bg-secondary rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white fill-white" />
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
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
          >
            <X className="h-8 w-8" />
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
          </div>
        </div>
      )}
    </main>
  )
}
