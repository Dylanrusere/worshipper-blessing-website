"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Calendar, Play } from "lucide-react"
import { fadeUp, fadeInScale, cardElevation, staggerContainer, viewportSettings } from "@/lib/animations"

const albums = [
  {
    id: 1,
    title: "My Attestation",
    year: "2024",
    description: "A powerful collection of worship anthems declaring the holiness and majesty of God.",
    coverImage: "/covers/mwari-ngaakudzwe.jpeg",
    // Use the Album Link for the main cover play button
    albumSpotifyUrl: "https://open.spotify.com/album/43y2jZpPZpGz7rK4X2X6Xk", 
    tracks: [
      { name: "Chishamiso - Coming May 25th", spotifyId: null },
      { name: "Mwari Ngaakudzwe", spotifyId: "3jopujUNNNcYjBUHnDzJEJ" },
      { name: "Hallowed Be Your Name", spotifyId: "57ycClB4V7hSBq1lhQvEU0" },
      { name: "Vimba naJesu", spotifyId: "2Ut1HbXiy1YWXOYfhnqo0n" },
      { name: "Mwari Makanaka", spotifyId: "42tQh2J1aLNRjk90vQVhUc" },
    ],
  },
]

const singles = [
  {
    id: 1,
    title: "Tinokudza",
    spotifyId: "2Ut1HbXiy1YWXOYfhnqo0n",
    featuring: "Feat. Oncemore Six",
    year: "2024",
    coverImage: "/covers/mwari-ngaakudzwe.jpeg",
  },
]

export default function DiscographyPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Discography"
          subtitle="A collection of anointed worship music spanning years of ministry"
          backgroundImage="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=2940&auto=format&fit=crop"
        />

        {/* Albums Section */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-center mb-16"
            >
              <motion.p variants={fadeUp} className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">
                Full Projects
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">
                Albums
              </motion.h2>
              <motion.div variants={fadeUp} className="h-px w-24 bg-gold/50 mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="space-y-16"
            >
              {albums.map((album, index) => (
                <motion.div
                  key={album.id}
                  variants={cardElevation}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Album Cover */}
                  <motion.div
                    variants={fadeInScale}
                    className={`relative aspect-square max-w-md mx-auto lg:mx-0 group ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play Overlay - Links to full Album */}
                    <a
                      href={album.albumSpotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center gold-glow"
                      >
                        <Play className="w-8 h-8 text-charcoal ml-1" fill="currentColor" />
                      </motion.div>
                    </a>

                    <div className="absolute inset-0 border border-gold/20 group-hover:border-gold/40 transition-colors duration-300 pointer-events-none" />
                  </motion.div>

                  {/* Album Info & Tracklist */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar size={16} className="text-gold/60" />
                      <span className="text-gold/80 text-sm">{album.year}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-4">{album.title}</h3>
                    <p className="text-ivory/60 leading-relaxed mb-8">{album.description}</p>

                    <div className="space-y-4">
                      <p className="text-gold/80 text-sm tracking-wide uppercase mb-4">Track List</p>
                      {album.tracks.map((track, trackIndex) => (
                        <div key={trackIndex} className="w-full">
                          {track.spotifyId ? (
                            <iframe
                              src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
                              width="100%"
                              height="80"
                              frameBorder="0"
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              loading="lazy"
                              className="rounded-lg shadow-lg border border-white/5"
                            ></iframe>
                          ) : (
                            <div className="flex items-center gap-4 p-4 bg-secondary/30 border border-border/20 rounded-lg">
                              <span className="text-gold/50 text-sm w-6">
                                {String(trackIndex + 1).padStart(2, "0")}
                              </span>
                              <span className="text-ivory/60 italic text-sm">{track.name}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Singles Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-center mb-16"
            >
              <motion.p variants={fadeUp} className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">
                Latest Releases
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">
                Singles
              </motion.h2>
              <motion.div variants={fadeUp} className="h-px w-24 bg-gold/50 mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {singles.map((single) => (
                <motion.div
                  key={single.id}
                  variants={cardElevation}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <a 
                    href={`https://open.spotify.com/track/${single.spotifyId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
                      <Image
                        src={single.coverImage}
                        alt={single.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center gold-glow">
                          <Play className="w-5 h-5 text-charcoal ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors duration-300" />
                    </div>

                    <h4 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors duration-300 mb-1">
                      {single.title}
                    </h4>
                    {single.featuring && <p className="text-gold/60 text-sm mb-1">{single.featuring}</p>}
                    <p className="text-ivory/40 text-sm">{single.year}</p>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}