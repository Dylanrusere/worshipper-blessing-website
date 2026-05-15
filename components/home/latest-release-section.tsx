"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations"
import { Youtube } from "lucide-react"
import { FaSpotify } from "react-icons/fa"

const streamingPlatforms = [
  { name: "YouTube", icon: Youtube, href: "https://youtu.be/WNMfn_9UiU0" },
  { name: "Spotify", icon: FaSpotify, href: "https://open.spotify.com/track/3jopujUNNNcYjBUHnDzJEJ?si=e9dab4af1efa430f" },
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column - Album Info */}
          <motion.div variants={fadeUp} className="space-y-8">
            {/* Album Art */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm group">
              <Image
                src="/covers/mwari-ngaakudzwe.jpeg"
                alt="Mwari Ngaakudzwe Cover"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>

            {/* Song Details */}
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-2">
                Mwari Ngaakudzwe (Glory be to God)
              </h3>
              <p className="text-ivory/60 leading-relaxed max-w-md">
                A worship and daily conversation to give thanks, acknowledging God's power in our lives because  he is a good God!
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
              <div className="flex justify-center p-6">
                <div className="w-full max-w-2xl shadow-2xl rounded-xl overflow-hidden bg-black/20">
                  {/* Spotify Embed */}
                  <iframe
                    src={`https://open.spotify.com/embed/track/3jopujUNNNcYjBUHnDzJEJ?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
