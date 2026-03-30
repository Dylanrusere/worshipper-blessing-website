"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { fadeUp, fadeInScale, staggerContainer, viewportSettings } from "@/lib/animations"

const categories = [
  { id: "all", label: "All" },
  { id: "worship", label: "Worship Photos" },
  { id: "stage", label: "Live Stage" },
  { id: "behind", label: "Behind the Scenes" },
]

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    alt: "Worship session with raised hands",
    category: "worship",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2940&auto=format&fit=crop",
    alt: "Live stage performance",
    category: "stage",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2940&auto=format&fit=crop",
    alt: "Behind the scenes recording",
    category: "behind",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2940&auto=format&fit=crop",
    alt: "Studio session",
    category: "behind",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2940&auto=format&fit=crop",
    alt: "Concert lights",
    category: "stage",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2940&auto=format&fit=crop",
    alt: "Intimate worship moment",
    category: "worship",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=2940&auto=format&fit=crop",
    alt: "Prayer moment",
    category: "worship",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=2940&auto=format&fit=crop",
    alt: "Album artwork session",
    category: "behind",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2940&auto=format&fit=crop",
    alt: "Scripture reading",
    category: "worship",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1609234656388-0ff363383899?q=80&w=2940&auto=format&fit=crop",
    alt: "Portrait session",
    category: "behind",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2940&auto=format&fit=crop",
    alt: "Stage performance",
    category: "stage",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2940&auto=format&fit=crop",
    alt: "Acoustic session",
    category: "behind",
  },
]

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const currentImageIndex = lightboxImage !== null
    ? filteredImages.findIndex((img) => img.id === lightboxImage)
    : -1

  const navigateLightbox = (direction: "prev" | "next") => {
    if (currentImageIndex === -1) return
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % filteredImages.length
        : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxImage(filteredImages[newIndex].id)
  }

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Media"
          subtitle="Moments captured from worship sessions and ministry events"
          backgroundImage="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2940&auto=format&fit=crop"
        />

        {/* Gallery Section */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            {/* Category Filter */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  variants={fadeUp}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 text-sm tracking-wide transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gold text-charcoal"
                      : "bg-transparent border border-border/50 text-ivory/70 hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Masonry Grid */}
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="break-inside-avoid group cursor-pointer"
                    onClick={() => setLightboxImage(image.id)}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
                      <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-300" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center">
                          <span className="text-charcoal text-2xl">+</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-lg flex items-center justify-center"
              onClick={() => setLightboxImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 p-2 text-ivory/60 hover:text-gold transition-colors"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox("prev")
                }}
                className="absolute left-6 p-2 text-ivory/60 hover:text-gold transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox("next")
                }}
                className="absolute right-6 p-2 text-ivory/60 hover:text-gold transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-[90vw] max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredImages.find((img) => img.id === lightboxImage) && (
                  <Image
                    src={filteredImages.find((img) => img.id === lightboxImage)!.src}
                    alt={filteredImages.find((img) => img.id === lightboxImage)!.alt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                )}
              </motion.div>

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60 text-sm">
                {currentImageIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
