"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, RefreshCw } from "lucide-react"
import { fadeUp, cardElevation, staggerContainer, viewportSettings } from "@/lib/animations"

const pillars = [
  {
    icon: Heart,
    title: "Healing",
    description: "Through the power of worship, God's healing presence touches spirits, minds, and bodies. Many have testified of miraculous healings during our worship sessions.",
  },
  {
    icon: Sparkles,
    title: "Deliverance",
    description: "In the atmosphere of true worship, chains are broken and captives are set free. We minister deliverance through the prophetic worship that ushers in God's presence.",
  },
  {
    icon: RefreshCw,
    title: "Restoration",
    description: "Broken hearts are mended, lost hope is renewed, and purpose is restored. Worship creates a space for God to restore what the enemy has stolen.",
  },
]

export function MinistryImpactSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle Background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4"
          >
            Ministry Impact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6"
          >
            Lives Transformed Through Worship
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="h-px w-24 bg-gold/50 mx-auto"
          />
        </motion.div>

        {/* Pillar Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardElevation}
              className="group relative p-8 md:p-10 bg-secondary/30 border border-border/30 hover:border-gold/30 transition-all duration-500"
            >
              {/* Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-gold/50 transition-all duration-300 group-hover:w-12 group-hover:h-12" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-gold/50 transition-all duration-300 group-hover:w-12 group-hover:h-12" />

              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center group-hover:gold-glow transition-all duration-300">
                  <pillar.icon className="w-6 h-6 text-gold" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-gold transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-ivory/60 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
