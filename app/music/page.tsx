"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Play, Youtube, Music2, Apple, Music, ExternalLink } from "lucide-react"
import { fadeUp, fadeInScale, cardElevation, staggerContainer, viewportSettings } from "@/lib/animations"

const featuredSessions = [
  {
    id: 1,
    title: "Worship Sessions",
    description: "An intimate live worship session featuring the powerful anthem declaring God's holiness.",
    thumbnail: "/covers/mwari-ngaakudzwe.jpeg",
    duration: "12:34",
  },
  {
    id: 2,
    title: "Worship Sessions",
    description: "Experience the reverence of worship in this Spirit-filled studio recording.",
    thumbnail: "/covers/mwari-ngaakudzwe.jpeg",
    duration: "8:45",
  },
  {
    id: 3,
    title: "Worship Sessions",
    description: "A live recording from a powerful prophetic worship service with testimonials.",
    thumbnail: "/covers/mwari-ngaakudzwe.jpeg",
    duration: "45:20",
  },
]

const streamingPlatforms = [
  { 
    name: "YouTube", 
    icon: Youtube, 
    href: "https://www.youtube.com/@TheWorshipperBlessing",
    color: "#FF0000",
    description: "Watch live sessions and music videos"
  },
  { 
    name: "Spotify", 
    icon: Music2, 
    href: "https://open.spotify.com/artist/7g8tmqTM3bLeNOTW4bNzI1",
    color: "#1DB954",
    description: "Stream full discography"
  },
  { 
    name: "Apple Music", 
    icon: Apple, 
    href: "#",
    color: "#FA57C1",
    description: "Listen in high quality"
  },
  { 
    name: "Amazon Music", 
    icon: Music, 
    href: "#",
    color: "#FF9900",
    description: "Available on Amazon"
  },
]

export default function MusicPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Worship Sounds"
          subtitle="Experience the atmosphere of heaven through anointed worship music"
          backgroundImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2940&auto=format&fit=crop"
        />

        {/* Featured Worship Sessions */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4"
              >
                Featured
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6"
              >
                Worship Sessions
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="h-px w-24 bg-gold/50 mx-auto"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {featuredSessions.map((session) => (
                <motion.div
                  key={session.id}
                  variants={cardElevation}
                  className="group relative overflow-hidden bg-secondary/30 border border-border/30 hover:border-gold/30 transition-all duration-500"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={session.thumbnail}
                      alt={session.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center gold-glow"
                      >
                        <Play className="w-6 h-6 text-charcoal ml-1" fill="currentColor" />
                      </motion.button>
                    </div>

                    {/* Duration */}
                    <span className="absolute bottom-4 right-4 px-2 py-1 bg-charcoal/80 text-ivory text-sm">
                      {session.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
                      {session.title}
                    </h3>
                    <p className="text-ivory/60 text-sm leading-relaxed">
                      {session.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Streaming Platforms */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4"
              >
                Listen Everywhere
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6"
              >
                Streaming Platforms
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="h-px w-24 bg-gold/50 mx-auto"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {streamingPlatforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardElevation}
                  whileHover={{ y: -5 }}
                  className="group p-8 bg-charcoal border border-border/30 hover:border-gold/30 text-center transition-all duration-300"
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:gold-glow"
                    style={{ 
                      backgroundColor: `${platform.color}20`,
                      borderColor: platform.color,
                      borderWidth: 1,
                    }}
                  >
                    <platform.icon 
                      className="w-7 h-7 transition-colors duration-300"
                      style={{ color: platform.color }}
                    />
                  </div>
                  <h3 className="font-serif text-lg text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-ivory/50 text-sm mb-4">
                    {platform.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold/70 text-sm group-hover:text-gold transition-colors">
                    Listen Now <ExternalLink size={12} />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
