"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations"
import { Youtube, Music2, Apple, Music } from "lucide-react"

const streamingPlatforms = [
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@TheWorshipperBlessing" },
  { name: "Spotify", icon: Music2, href: "#" },
  { name: "Apple Music", icon: Apple, href: "#" },
  { name: "Amazon Music", icon: Music, href: "#" },
]

export function LatestReleaseSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right, rgba(212, 175, 55, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
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
            Latest Release
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="h-px w-16 bg-gold/50 mx-auto"
          />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Album Info */}
          <motion.div variants={fadeUp} className="space-y-8">
            {/* Album Art */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm group">
              <Image
                src="/images/worshipper.jpg"
                alt="Muri Mutsvene Album Cover"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center gold-glow">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-charcoal ml-1" />
                </div>
              </div>
            </div>

            {/* Song Details */}
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-2">
                Muri Mutsvene
              </h3>
              <p className="text-gold text-lg mb-4">
                Feat. Oncemore Six
              </p>
              <p className="text-ivory/60 leading-relaxed max-w-md">
                A powerful worship anthem declaring the holiness of God. This song invites 
                the presence of the Lord and leads worshippers into deep reverence and adoration.
              </p>
            </div>

            {/* Streaming Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {streamingPlatforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold hover:gold-glow transition-all duration-300"
                  aria-label={platform.name}
                >
                  <platform.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Spotify Embed Placeholder */}
          <motion.div variants={fadeUp} className="relative">
            <div className="bg-secondary/50 rounded-lg p-6 border border-border/30">
              <div className="aspect-[4/5] md:aspect-[3/4] bg-charcoal/50 rounded-md flex flex-col items-center justify-center text-center p-8">
                <Music2 size={48} className="text-gold/40 mb-4" />
                <p className="text-ivory/60 text-sm mb-2">
                  Listen on Spotify
                </p>
                <p className="text-ivory/40 text-xs max-w-xs">
                  Embedded player would appear here with full album playback
                </p>
                <motion.a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 px-6 py-2 bg-[#1DB954] text-charcoal text-sm font-medium rounded-full hover:bg-[#1ed760] transition-colors"
                >
                  Open Spotify
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
