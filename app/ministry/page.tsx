"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Heart, Sparkles, RefreshCw, BookOpen } from "lucide-react"
import { fadeUp, fadeInScale, cardElevation, staggerContainer, viewportSettings, lineExpand } from "@/lib/animations"

const ministryPillars = [
  {
    icon: BookOpen,
    title: "Anointing goes beyond Gift",
    description: "When we worship with pure hearts, the glory of the Lord fills His temple and His presence manifests powerfully.",
    scripture: "2 Chronicles 5:13-14 - The glory of the Lord filled the temple of God",
  },
  {
    icon: Heart,
    title: "Healing",
    description: "The ministry operates in divine healing, where the sick receive their healing through worship. Many testimonies of miraculous healings have been recorded during worship sessions.",
    scripture: "Isaiah 53:5 - By His stripes we are healed",
  },
  {
    icon: Sparkles,
    title: "Deliverance",
    description: "Through the atmosphere of worship, demonic strongholds are broken and captives are set free. The presence of God in worship brings liberation to the oppressed.",
    scripture: "Luke 4:18 - He has sent me to proclaim freedom for the prisoners",
  },
  {
    icon: RefreshCw,
    title: "Restoration",
    description: "Broken marriages, lost hope, and shattered dreams find restoration in worship. God restores what the enemy has stolen when we come before His presence.",
    scripture: "Joel 2:25 - I will restore the years the locusts have eaten",
  },
]

export default function MinistryPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="The Ministry"
          subtitle="Serving through worship in ZAOGA FIFMI"
          backgroundImage="/images/hero-2.jpg"
        />

        {/* Calling Story Section */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Image */}
              <motion.div variants={fadeInScale} className="order-2 lg:order-1">
                <div className="relative aspect-[4/5] max-w-lg mx-auto overflow-hidden">
                  <Image
                    src="/images/hero-5.jpg"
                    alt="Worship moment"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 border border-gold/20" />
                </div>
              </motion.div>

              {/* Story */}
              <motion.div variants={fadeUp} className="order-1 lg:order-2 space-y-6">
                <p className="text-gold/80 text-sm tracking-[0.3em] uppercase">
                  The Calling
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-ivory">
                  A Journey of Worship
                </h2>
                <div className="h-px w-16 bg-gold/50" />
                <div className="space-y-4 text-ivory/70 leading-relaxed">
                  <p>
                    The Worshipper Blessing&apos;s journey began with a divine encounter 
                    that transformed a simple singer into a vessel for Kingdom worship. 
                    From the early days of ministry in Zimbabwe, the calling was clear: 
                    to lead people into the presence of God through authentic worship.
                  </p>
                  <p>
                    Serving within ZAOGA FIFMI, the ministry has grown from local 
                    gatherings to impacting nations. The worship is characterized by 
                    prophetic utterances, healing manifestations, and the tangible 
                    presence of the Holy Spirit.
                  </p>
                  <p>
                    Every song is birthed from moments of deep communion with God. 
                    The ministry is not about entertainment but about creating an 
                    atmosphere where heaven touches earth and lives are forever changed.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ministry Pillars Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
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
                Ministry Pillars
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6"
              >
                The Foundations of Our Ministry
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="h-px w-24 bg-gold/50 mx-auto"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {ministryPillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={cardElevation}
                  className="group relative p-8 md:p-10 bg-charcoal border border-border/30 hover:border-gold/30 transition-all duration-500"
                >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-gold/50" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gold/50" />

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center group-hover:gold-glow transition-all duration-300">
                      <pillar.icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-gold transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-ivory/60 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Scripture */}
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-gold/80 text-sm italic flex items-start gap-2">
                      <BookOpen size={14} className="mt-1 shrink-0" />
                      {pillar.scripture}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Worship Philosophy Section */}
        <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 60%)",
            }}
          />

          <div className="container mx-auto px-6 relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4"
              >
                Our Philosophy
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-8"
              >
                The Blessing of the Worshipper
              </motion.h2>

              <motion.div
                variants={lineExpand}
                className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-12"
              />

              <motion.div variants={fadeUp} className="space-y-6 text-ivory/70 leading-relaxed text-lg">
                <p>
                  <strong className="text-gold">&ldquo;Anointing goes beyond Gift&rdquo;</strong> — 
                  This is the foundational truth that defines our ministry. The name 
                  &ldquo;The Worshipper Blessing&rdquo; carries a profound spiritual meaning. 
                  It speaks of the transformation that occurs when one becomes a true worshipper — 
                  the blessing that flows both to the worshipper and through the worshipper 
                  to others.
                </p>
                <p>
                  True worship is not about the skill of the voice or the excellence of 
                  musicianship, though these are important. It is about the posture of 
                  the heart — a heart fully surrendered to God, creating space for 
                  His presence to manifest.
                </p>
                <p>
                  When we worship in spirit and truth, we become conduits of God&apos;s 
                  blessing. The atmosphere shifts, the sick are healed, the bound are 
                  delivered, and the broken are restored. This is the essence of 
                  our ministry.
                </p>
              </motion.div>

              <motion.div
                variants={lineExpand}
                className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-12"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
