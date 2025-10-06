import { Heart, Users, Music, Zap } from "lucide-react"

export function StorySection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-primary"></div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">THE STORY OF</span>{" "}
              <span className="text-primary">HAKBORREL</span>
            </h2>
            <div className="w-1 h-8 bg-primary"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Not just a party. It&apos;s a movement.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Beginning</h3>
            </div>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                HAKborrel started as a simple idea: create a space where hardcore music lovers could gather without
                pretense, without judgment, just pure energy and authentic connection.
              </p>
              <p>
                What began as small gatherings in underground locations has grown into a movement that spans cities,
                bringing together people who understand that hardcore isn&apos;t just music—it&apos;s a way of life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-white">Community First</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every event is built around the community. We believe in creating spaces where everyone feels welcome,
                regardless of background or experience level.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                  <Music className="h-5 w-5 text-secondary" />
                </div>
                <h4 className="text-lg font-bold text-white">Music Quality</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                We curate lineups that represent the best of hardcore music, from established legends to emerging
                talents pushing the boundaries of the genre.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-white">Raw Energy</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our events capture the raw, unfiltered energy that defines hardcore culture. No compromises, no
                commercial considerations—just pure underground spirit.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                  <Heart className="h-5 w-5 text-secondary" />
                </div>
                <h4 className="text-lg font-bold text-white">Authentic Experience</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                From secret locations to intimate venues, every detail is designed to create an authentic underground
                experience that honors the roots of hardcore culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}