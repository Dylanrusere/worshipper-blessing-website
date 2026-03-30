"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, lineExpand, viewportSettings } from "@/lib/animations"

export function ScriptureSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Top Divider */}
          <motion.div
            variants={lineExpand}
            className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-12"
          />

          {/* Scripture Quote */}
          <motion.blockquote variants={fadeUp} className="relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-8xl text-gold/10">
              &ldquo;
            </span>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-ivory leading-relaxed mb-8 relative z-10">
              God is Spirit, and His worshippers must worship in Spirit and in truth.
            </p>
            <footer className="text-gold text-lg tracking-wide">
              — John 4:24
            </footer>
          </motion.blockquote>

          {/* Bottom Divider */}
          <motion.div
            variants={lineExpand}
            className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-12"
          />
        </motion.div>
      </div>
    </section>
  )
}
