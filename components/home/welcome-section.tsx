"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeUp, fadeInScale, staggerContainer, viewportSettings } from "@/lib/animations"

export function WelcomeSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Accent */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[500px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at left, rgba(212, 175, 55, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Portrait */}
          <motion.div variants={fadeInScale} className="relative">
            <div className="relative aspect-[3/4] max-w-lg mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/images/worshipper.jpg"
                alt="The Worshipper Blessing in worship"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-gold/20" />
              
              {/* Decorative Corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gold/40" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-gold/40" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp} className="lg:pl-8">
            <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-6">
              A Message of Welcome
            </p>

            <blockquote className="relative">
              <span className="absolute -top-8 -left-4 font-serif text-6xl text-gold/20">&ldquo;</span>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory leading-relaxed mb-8">
                True worship transforms the heart and opens the heavens.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-8">
                When we come before the presence of God with sincere hearts, 
                something supernatural happens. Walls come down, healing flows, 
                and lives are forever changed. This is the heart of our ministry — 
                to lead people into an encounter with the living God through 
                authentic, Spirit-led worship.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-8">
                Welcome to this sacred space. May you encounter His presence 
                as you explore and engage with the worship we offer unto Him.
              </p>
            </blockquote>

            {/* Signature */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
              <p className="font-serif text-lg text-gold italic">
                — The Worshipper Blessing
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
