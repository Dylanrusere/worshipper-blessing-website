"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Calendar, Play, Youtube, ExternalLink } from "lucide-react"
import { fadeUp, fadeInScale, cardElevation, staggerContainer, viewportSettings } from "@/lib/animations"

const albums = [
  {
    id: 1,
    title: "My Attestation",
    year: "2025",
    description: "A powerful collection of worship anthems declaring the holiness and majesty of God.",
    coverImage: "/covers/mwari-ngaakudzwe.jpeg",
    albumSpotifyUrl: "https://open.spotify.com/album/43y2jZpPZpGz7rK4X2X6Xk", 
    tracks: [
      { 
        name: "Chishamiso", 
        spotifyId: null, 
        youtubeUrl: null
      },
      { 
        name: "Mwari Ngaakudzwe", 
        spotifyId: "3jopujUNNNcYjBUHnDzJEJ", 
        youtubeUrl: null 
      },
      { 
        name: "Hallowed Be Your Name", 
        spotifyId: "57ycClB4V7hSBq1lhQvEU0", 
        youtubeUrl: null 
      },
      { 
        name: "Vimba naJesu", 
        spotifyId: "2Ut1HbXiy1YWXOYfhnqo0n", 
        youtubeUrl: null 
      },
      { 
        name: "Mwari Makanaka", 
        spotifyId: "42tQh2J1aLNRjk90vQVhUc", 
        youtubeUrl: null 
      },
    ],
  },
]

const singles = [
  {
    id: 1,
    title: "We are your People",
    spotifyId: null,
    youtubeUrl: "https://www.youtube.com/watch?v=_RRQe8PWbxI",
    year: "2022",
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
          backgroundImage="/images/hero-4.jpg"
        />

        {/* Albums Section */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
              <motion.p variants={fadeUp} className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Full Projects</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">Albums</motion.h2>
              <motion.div variants={fadeUp} className="h-px w-24 bg-gold/50 mx-auto" />
            </motion.div>

            <div className="space-y-16">
              {albums.map((album, index) => (
                <motion.div key={album.id} variants={cardElevation} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Album Cover Area */}
                  <motion.div variants={fadeInScale} className="relative aspect-square max-w-md mx-auto lg:mx-0 group">
                    <Image src={album.coverImage} alt={album.title} fill className="object-cover" />
                    <a href={album.albumSpotifyUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-charcoal/40 transition-all">
                      <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center gold-glow">
                        <Play className="w-8 h-8 text-charcoal ml-1" fill="currentColor" />
                      </div>
                    </a>
                  </motion.div>

                  {/* Tracklist Logic */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar size={16} className="text-gold/60" />
                      <span className="text-gold/80 text-sm">{album.year}</span>
                    </div>
                    <h3 className="font-serif text-3xl text-ivory mb-8">{album.title}</h3>

                    <div className="space-y-4">
                      {album.tracks.map((track, trackIndex) => (
                        <div key={trackIndex}>
                          {track.spotifyId ? (
                            <iframe
                              src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
                              width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen" loading="lazy"
                              className="rounded-lg border border-white/5"
                            />
                          ) : track.youtubeUrl ? (
                            <a href={track.youtubeUrl} target="_blank" rel="noopener noreferrer" 
                               className="flex items-center justify-between p-4 bg-secondary/30 border border-gold/20 rounded-lg group hover:border-gold transition-colors">
                              <div className="flex items-center gap-4">
                                <span className="text-gold/50 text-sm">{String(trackIndex + 1).padStart(2, '0')}</span>
                                <span className="text-ivory font-medium">{track.name}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                                <Youtube size={18} /> Watch Video
                              </div>
                            </a>
                          ) : (
                            <div className="p-4 bg-white/5 rounded-lg text-ivory/40 italic text-sm">
                               {track.name} — Coming Soon
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Singles Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
              <motion.p variants={fadeUp} className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Latest Releases</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">Singles</motion.h2>
              <motion.div variants={fadeUp} className="h-px w-24 bg-gold/50 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {singles.map((single) => (
                <motion.div key={single.id} variants={cardElevation} whileHover={{ y: -8 }} className="group">
                  <a 
                    href={single.spotifyId ? `https://open.spotify.com/track/${single.spotifyId}` : single.youtubeUrl} 
                    target="_blank" rel="noopener noreferrer" className="block"
                  >
                    <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
                      <Image src={single.coverImage} alt={single.title} fill className="object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                          {single.spotifyId ? <Play className="w-5 h-5 text-charcoal ml-0.5" fill="currentColor" /> : <Youtube className="w-6 h-6 text-charcoal" />}
                        </div>
                      </div>
                    </div>
                    <h4 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">{single.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                        {single.spotifyId ? (
                            <span className="text-[#1DB954] text-[10px] uppercase font-bold flex items-center gap-1">Spotify</span>
                        ) : (
                            <span className="text-[#FF0000] text-[10px] uppercase font-bold flex items-center gap-1">YouTube</span>
                        )}
                        <span className="text-ivory/40 text-xs">• {single.year}</span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}