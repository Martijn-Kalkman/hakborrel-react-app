"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SecretChaptersPage() {
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple code validation - in production this would be server-side
    if (code.toUpperCase() === "HAKBORREL2024" || code.toUpperCase() === "UNDERGROUND") {
      router.push("/secret-chapters/access-test")
    } else {
      setError("Invalid code. Please try again.")
      setCode("")
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-purple-900/30" />

        {/* Atmospheric glowing orbs - purple theme */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[30%] right-[20%] w-56 h-56 bg-purple-600/18 rounded-full blur-[90px]" />
          <div className="absolute top-[50%] right-[40%] w-48 h-48 bg-purple-400/15 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/20 p-6 rounded-full">
                <Lock className="h-16 w-16 text-secondary" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-secondary" style={{ textShadow: "0 0 40px rgba(128, 0, 255, 0.8)" }}>
                COMMUNITY RAVES
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-4">Enter the secret code to unlock exclusive underground events</p>
            <p className="text-gray-400 text-sm">Hidden locations • Secret lineups • Intimate experiences</p>
          </div>

          {/* Code Entry Form */}
          <div className="bg-black/60 backdrop-blur-sm border-2 border-secondary rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="code" className="block text-secondary font-bold mb-3 text-lg">
                  ENTER ACCESS CODE
                </label>
                <Input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value)
                    setError("")
                  }}
                  placeholder="XXXX-XXXX-XXXX"
                  className="bg-black/80 border-secondary/50 text-white text-lg py-6 focus:border-secondary placeholder:text-gray-500"
                  required
                />
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-lg py-6 rounded-full"
              >
                UNLOCK ACCESS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-secondary/20">
              <p className="text-gray-400 text-sm text-center mb-4">Don't have a code yet?</p>
              <p className="text-gray-500 text-xs text-center">
                Access codes are distributed to community members at events and through our newsletter. Join our mailing
                list to stay updated on how to gain access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
