"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePreloader } from "@/lib/context/preloader-context"

export function Preloader() {
  const { isLoading } = usePreloader()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal"
        >
          <div className="relative w-32 h-32">
            {/* Musical Note that morphs to Cross then to W */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Musical Note */}
              <motion.path
                d="M60 20 L60 65 M60 65 C60 75 50 80 45 75 C40 70 45 60 55 60 C57 60 60 62 60 65"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 1 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [1, 1, 1, 0]
                }}
                transition={{
                  duration: 1.2,
                  times: [0, 0.4, 0.8, 1],
                  ease: "easeInOut"
                }}
              />

              {/* Cross */}
              <motion.path
                d="M50 15 L50 85 M30 40 L70 40"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 0, 1, 1, 0],
                  opacity: [0, 0, 1, 1, 0]
                }}
                transition={{
                  duration: 2.4,
                  times: [0, 0.4, 0.6, 0.8, 1],
                  ease: "easeInOut"
                }}
              />

              {/* W for Worshipper */}
              <motion.path
                d="M25 30 L35 70 L50 45 L65 70 L75 30"
                stroke="#D4AF37"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 0, 0, 1],
                  opacity: [0, 0, 0, 1]
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.6, 0.7, 1],
                  ease: "easeInOut"
                }}
              />
            </svg>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                times: [0, 0.8, 1],
                ease: "easeInOut"
              }}
              style={{
                background: "radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)"
              }}
            />
          </div>

          {/* Text */}
          <motion.p
            className="absolute bottom-20 font-serif text-gold text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0, 1], y: [10, 10, 0] }}
            transition={{
              duration: 3,
              times: [0, 0.7, 1],
              ease: "easeOut"
            }}
          >
            The Worshipper
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
