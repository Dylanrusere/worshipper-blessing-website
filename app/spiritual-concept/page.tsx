"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { BookOpen, Heart, Flame, Shield } from "lucide-react"
import { fadeUp, cardElevation, staggerContainer, viewportSettings, lineExpand } from "@/lib/animations"

const concepts = [
  {
    id: 1,
    icon: BookOpen,
    title: "Anointing goes beyond Gift",
    content: [
      "Our foundational motto, drawn from 2 Chronicles 5:13-14, encapsulates the essence of true worship. When the trumpeters and musicians joined in unison to give praise and thanks to the Lord, accompanied by instruments, the singers raised their voices in praise saying, 'He is good; his love endures forever.'",
      "Then the temple of the Lord was filled with the cloud, and the priests could not perform their service because of the cloud, for the glory of the Lord filled the temple of God.",
      "This scripture reveals that anointing transcends mere talent or gifting. It is the divine empowerment that flows when worship creates an atmosphere where heaven invades earth, where God's glory manifests, and where His presence becomes tangible.",
      "In our ministry, we understand that while gifts are important, it is the anointing that brings transformation, healing, and breakthrough. The anointing carries the weight of God's presence and power.",
    ],
    scripture: {
      text: "The trumpeters and musicians joined in unison to give praise and thanks to the Lord... Then the temple of the Lord was filled with the cloud, for the glory of the Lord filled the temple of God.",
      reference: "2 Chronicles 5:13-14",
    },
  },
  {
    id: 2,
    icon: Heart,
    title: "What True Worship Means",
    content: [
      "True worship goes beyond singing songs or playing instruments. It is the complete surrender of one's heart, mind, and spirit to the Creator. When Jesus spoke to the woman at the well, He revealed that God seeks worshippers who worship in Spirit and in truth.",
      "Spirit worship means allowing the Holy Spirit to lead our worship, moving beyond human effort and entertainment into divine encounter. Truth worship means approaching God with sincerity, without pretense or hidden agendas.",
      "This dual requirement creates an atmosphere where heaven touches earth, where the supernatural becomes natural, and where transformation occurs.",
    ],
    scripture: {
      text: "Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks.",
      reference: "John 4:23",
    },
  },
  {
    id: 2,
    icon: Flame,
    title: "Transformation of the Worshipper",
    content: [
      "Every genuine worship encounter leaves the worshipper changed. Like Moses descending from the mountain with a radiant face, worshippers who enter God's presence are transformed by what they behold.",
      "The transformation begins in the heart. Bitterness gives way to forgiveness. Fear surrenders to faith. Anxiety is replaced with peace. This inner transformation then manifests outwardly in changed behavior, restored relationships, and renewed purpose.",
      "The name 'The Worshipper Blessing' speaks to this reality — that the act of worship releases blessing both upon and through the worshipper.",
    ],
    scripture: {
      text: "And we all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory.",
      reference: "2 Corinthians 3:18",
    },
  },
  {
    id: 3,
    icon: BookOpen,
    title: "The Presence of God in Worship",
    content: [
      "The presence of God is not merely a feeling or emotion — it is the tangible manifestation of the Almighty in our midst. When we worship with pure hearts, we create a throne room for the King of Glory to inhabit.",
      "In His presence, the impossible becomes possible. Diseases that medicine cannot cure are healed. Chains that have bound for years are broken. Hearts that have hardened over decades are softened.",
      "Our ministry is built on this foundation: creating spaces where God's presence can manifest freely, unhindered by human agendas or religious formality.",
    ],
    scripture: {
      text: "But You are holy, enthroned in the praises of Israel.",
      reference: "Psalm 22:3 (NKJV)",
    },
  },
  {
    id: 4,
    icon: Shield,
    title: "Worship as Spiritual Warfare",
    content: [
      "Worship is not passive — it is one of the most powerful weapons in spiritual warfare. When King Jehoshaphat faced an overwhelming army, God instructed him to send worshippers ahead of the army. As they sang, God set ambushes against the enemy.",
      "In the ministry of The Worshipper Blessing, we have witnessed countless instances where worship broke demonic strongholds, delivered the oppressed, and brought victory in impossible situations.",
      "Every song we sing, every note we play, is a declaration of war against the kingdom of darkness and a proclamation of the supremacy of Christ.",
    ],
    scripture: {
      text: "After consulting the people, Jehoshaphat appointed men to sing to the Lord... As they began to sing and praise, the Lord set ambushes against the enemy.",
      reference: "2 Chronicles 20:21-22",
    },
  },
]

export default function SpiritualConceptPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Spiritual Concept"
          subtitle="Understanding the theology and power of true worship"
          backgroundImage="/images/hero-3.jpg"
        />

        {/* Introduction */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-6"
              >
                The Foundation
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl text-ivory mb-8"
              >
                The Heart of Kingdom Worship
              </motion.h2>
              <motion.div
                variants={lineExpand}
                className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8"
              />
              <motion.p
                variants={fadeUp}
                className="text-ivory/70 text-lg leading-relaxed"
              >
                The ministry of The Worshipper Blessing is built upon a deep understanding 
                of what it means to worship God in Spirit and in truth. These pages explore 
                the spiritual concepts that undergird our worship, providing insight into 
                the transformative power of authentic, Spirit-led worship.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Concept Sections */}
        {concepts.map((concept, index) => (
          <section
            key={concept.id}
            className={`py-24 md:py-32 ${
              index % 2 === 0 ? "bg-secondary/30" : "bg-charcoal"
            }`}
          >
            <div className="container mx-auto px-6">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="max-w-4xl mx-auto"
              >
                {/* Header */}
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center">
                    <concept.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory">
                    {concept.title}
                  </h2>
                </motion.div>

                {/* Content */}
                <motion.div variants={fadeUp} className="space-y-6 mb-12">
                  {concept.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-ivory/70 leading-relaxed text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* Scripture Callout */}
                <motion.div
                  variants={cardElevation}
                  className="relative p-8 md:p-10 bg-charcoal/50 border-l-4 border-gold"
                >
                  <div className="absolute top-4 right-4">
                    <BookOpen className="w-8 h-8 text-gold/20" />
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-ivory italic mb-4 leading-relaxed">
                    &ldquo;{concept.scripture.text}&rdquo;
                  </p>
                  <p className="text-gold text-sm tracking-wide">
                    — {concept.scripture.reference}
                  </p>
                </motion.div>

                {/* Divider */}
                {index < concepts.length - 1 && (
                  <motion.div
                    variants={lineExpand}
                    className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-16"
                  />
                )}
              </motion.div>
            </div>
          </section>
        ))}

        {/* Closing */}
        <section className="py-24 md:py-32 bg-secondary/20">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                variants={lineExpand}
                className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-12"
              />
              <motion.p
                variants={fadeUp}
                className="font-serif text-2xl md:text-3xl text-ivory leading-relaxed mb-8"
              >
                May your understanding of worship deepen, and may you encounter 
                the transforming presence of God as you apply these truths in 
                your own worship journey.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-gold italic"
              >
                — The Worshipper Blessing
              </motion.p>
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
