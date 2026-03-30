"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { heroText, staggerContainer, lineExpand, gentleFade } from "@/lib/animations"

const BG_IMAGES = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BG_IMAGES.length)
    }, 6000) // Change every 6 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${BG_IMAGES[currentIndex]}')`,
              filter: "grayscale(100%) brightness(0.3)",
              backgroundAttachment: "fixed", // The "fixed" magic
            }}
          />
        </AnimatePresence>
        
        {/* Overlays - Kept outside AnimatePresence so they don't flicker */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-charcoal/80" />
      </div>

      {/* Spotlight Effect */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-1"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.p
          variants={heroText}
          className="text-gold/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          The Worshipper Blessing
        </motion.p>

        <motion.h1
          variants={heroText}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-ivory leading-[1.1] mb-6 max-w-5xl mx-auto text-balance"
        >
          Bringing Kingdom Worship to the World
        </motion.h1>

        <motion.div
          variants={lineExpand}
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent max-w-md mx-auto mb-8"
        />

        <motion.p
          variants={heroText}
          className="text-ivory/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Through music, healing, and prophetic worship
        </motion.p>

        <motion.div
          variants={gentleFade}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/music"
            className="group flex items-center gap-3 bg-gold/10 border border-gold/30 hover:bg-gold/20 hover:border-gold/50 text-gold px-8 py-4 rounded-sm transition-all duration-300"
          >
            <Play size={18} className="group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">Watch Live Sessions</span>
          </Link>
          <Link
            href="/ministry"
            className="group flex items-center gap-3 border border-ivory/20 hover:border-ivory/40 text-ivory/80 hover:text-ivory px-8 py-4 rounded-sm transition-all duration-300"
          >
            <span className="tracking-wide">Explore The Ministry</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-ivory/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}