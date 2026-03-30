"use client"

import { motion } from "framer-motion"
import { heroText, staggerContainer, lineExpand } from "@/lib/animations"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${backgroundImage}')`,
                filter: "grayscale(100%) brightness(0.3)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
          </>
        ) : (
          <div className="absolute inset-0 bg-charcoal" />
        )}
      </div>

      {/* Spotlight */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
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
        <motion.h1
          variants={heroText}
          className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-ivory mb-6"
        >
          {title}
        </motion.h1>

        <motion.div
          variants={lineExpand}
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs mx-auto mb-6"
        />

        {subtitle && (
          <motion.p
            variants={heroText}
            className="text-ivory/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
