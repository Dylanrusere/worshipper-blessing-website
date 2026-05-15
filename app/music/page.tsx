"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

// Import Official Brand Icons
import { Youtube, ExternalLink, X, Play } from "lucide-react"
import { FaSpotify, FaAmazon } from "react-icons/fa"
import { SiApple,  } from "react-icons/si"

import {
  fadeUp,
  cardElevation,
  staggerContainer,
  viewportSettings,
} from "@/lib/animations"

const featuredSessions = [
  {
    id: 1,
    title: "Mwari Ngaakudzwe - Live",
    description: "An intimate live worship session featuring the powerful anthem declaring God's holiness.",
    thumbnail: "/images/mwari-ngaakudzwe.png",
    duration: "12:34",
    videoUrl: "https://www.youtube.com/embed/WNMfn_9UiU0",
  },
  {
    id: 2,
    title: "Kingdom Come Session",
    description: "Experience the reverence of worship in this Spirit-filled studio recording.",
    thumbnail: "/images/mwari-ngaakudzwe.png",
    duration: "8:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Prophetic Worship 2024",
    description: "A live recording from a powerful prophetic worship service with testimonials.",
    thumbnail: "/images/mwari-ngaakudzwe.png",
    duration: "45:20",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
]

const streamingPlatforms = [
  {
    name: "YouTube",
    icon: Youtube, // Lucide Youtube is standard
    href: "https://www.youtube.com/@TheWorshipperBlessing",
    color: "#FF0000",
    description: "Watch live sessions and music videos",
  },
  {
    name: "Spotify",
    icon: FaSpotify, // Official Spotify Icon
    href: "https://open.spotify.com/artist/7g8tmqTM3bLeNOTW4bNzI1",
    color: "#1DB954",
    description: "Stream full discography",
  },
  {
    name: "Apple Music",
    icon: SiApple, // Official Apple Music Icon
    href: "#",
    color: "#FA57C1",
    description: "Listen in high quality",
  },
  {
    name: "Amazon Music",
    icon: FaAmazon, // Official Amazon Music Icon
    href: "#",
    color: "#00A8E1", // Updated to official Amazon blue
    description: "Available on Amazon",
  },
]

type Session = {
  id: number
  title: string
  description: string
  thumbnail: string
  duration: string
  videoUrl: string
}

export default function MusicPage() {
  const [activeVideo, setActiveVideo] = useState<Session | null>(null)

  return (
    <>
      <Navigation />

      <main>
        <PageHero
          title="Worship Sounds"
          subtitle="Experience the atmosphere of heaven through anointed worship music"
          backgroundImage="/images/hero-5.jpg"
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
              <motion.p variants={fadeUp} className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Featured</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">Worship Sessions</motion.h2>
              <motion.div variants={fadeUp} className="h-px w-24 bg-gold/50 mx-auto" />
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
                  onClick={() => setActiveVideo(session)}
                  className="group relative overflow-hidden bg-secondary/30 border border-border/30 hover:border-gold/30 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={session.thumbnail}
                      alt={session.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center gold-glow">
                        <Play className="w-6 h-6 text-charcoal ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <span className="absolute bottom-4 right-4 px-2 py-1 bg-charcoal/80 text-ivory text-sm">{session.duration}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-ivory mb-2 group-hover:text-gold transition-colors duration-300">{session.title}</h3>
                    <p className="text-ivory/60 text-sm leading-relaxed">{session.description}</p>
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
              <motion.p variants={fadeUp} className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Stream Anywhere</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">Streaming Platforms</motion.h2>
              <motion.div variants={fadeUp} className="h-px w-24 bg-gold/50 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {streamingPlatforms.map((platform) => {
                const Icon = platform.icon

                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 border border-border/30 bg-charcoal hover:border-gold/40 transition-all duration-300"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${platform.color}15` }} // Slightly more transparent for a modern look
                    >
                      <Icon
                        className="w-7 h-7 transition-transform group-hover:scale-110 duration-300"
                        style={{ color: platform.color }}
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl text-ivory font-serif">{platform.name}</h3>
                      <ExternalLink className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-sm text-ivory/60">{platform.description}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Video Modal Overlay */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 md:p-10"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-12 right-0 text-ivory hover:text-gold transition-colors"
                >
                  <X size={32} />
                </button>
                <iframe
                  src={`${activeVideo.videoUrl}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  )
}