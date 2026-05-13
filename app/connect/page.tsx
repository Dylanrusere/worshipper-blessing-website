"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SiTiktok } from "react-icons/si" 
import { Youtube, Facebook, Instagram, Mail, Send, CheckCircle, Phone, UserCircle } from "lucide-react"
import { fadeUp, cardElevation, staggerContainer, viewportSettings } from "@/lib/animations"

const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@TheWorshipperBlessing",
    handle: "@TheWorshipperBlessing",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/BlessingChinakidzwa",
    handle: "The Worshipper Blessing",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/the_worshipper_blessing_music",
    handle: "The Worshipper Blessing",
  },
  {
    name: "TikTok",
    icon: SiTiktok, // Now using the actual TikTok brand icon
    href: "https://tiktok.com/@theworshipperblessing",
    handle: "The Worshipper Blessing",
  },
]

export default function ConnectPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Connect"
          subtitle="Join our worship community and stay connected"
          backgroundImage="https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=2940&auto=format&fit=crop"
        />

        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Left - Info & Contact Details */}
              <motion.div variants={fadeUp} className="space-y-12">
                <div>
                  <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Reach Out</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6">We&apos;d Love to Hear From You</h2>
                  <div className="h-px w-16 bg-gold/50 mb-8" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Ministry Contact */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gold/80 text-xs tracking-widest uppercase font-bold">
                        <UserCircle size={14} /> Ministry Direct
                      </div>
                      <div className="space-y-2">
                        <a href="tel:+263774987995" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors">
                          <Phone size={16} className="text-gold/50" /> +263 774 987 995
                        </a>
                        <a href="mailto:theworshipper38@gmail.com" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors">
                          <Mail size={16} className="text-gold/50" /> theworshipper38@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Management Contact */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gold/80 text-xs tracking-widest uppercase font-bold">
                         Bookings & Management
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 text-ivory/70">
                          <Phone size={16} className="text-gold/50 mt-1" />
                          <div className="flex flex-col">
                            <a href="tel:+263713624817" className="hover:text-gold transition-colors">+263 713 624 817</a>
                            <a href="tel:+263789606210" className="hover:text-gold transition-colors">+263 789 606 210</a>
                          </div>
                        </div>
                        <a href="mailto:magedetanaka3@gmail.com" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors">
                          <Mail size={16} className="text-gold/50" /> magedetanaka3@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links with Actual TikTok Icon */}
                <div className="space-y-4 pt-8 border-t border-border/30">
                  <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-6">Follow Us</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="group flex items-start gap-4 p-4 bg-secondary/30 border border-border/30 hover:border-gold/30 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                          <social.icon 
                            // Note: react-icons use size as a prop, SiTiktok works perfectly here
                            size={social.name === "TikTok" ? 16 : 18} 
                            className="text-ivory/60 group-hover:text-gold transition-colors" 
                          />
                        </div>
                        <div>
                          <p className="text-ivory group-hover:text-gold transition-colors font-medium text-sm">{social.name}</p>
                          <p className="text-gold/70 text-xs">{social.handle}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Form Section */}
              <motion.div variants={cardElevation}>
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-secondary/30 border border-gold/30">
                    <CheckCircle size={48} className="text-gold mb-6" />
                    <h3 className="font-serif text-2xl text-ivory mb-4">Message Sent</h3>
                    <p className="text-ivory/60 mb-6">Thank you. We will respond soon.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-gold hover:text-ivory transition-colors underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-secondary/30 border border-border/30 space-y-6">
                    <div>
                      <label className="block text-ivory/80 text-sm mb-2">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-charcoal border border-border/50 text-ivory focus:border-gold/50 focus:outline-none"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-ivory/80 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-charcoal border border-border/50 text-ivory focus:border-gold/50 focus:outline-none"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-ivory/80 text-sm mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-charcoal border border-border/50 text-ivory focus:border-gold/50 focus:outline-none resize-none"
                        placeholder="How can we help you?"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-deep-gold text-charcoal py-4 transition-colors font-bold uppercase tracking-widest text-xs"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send size={16} />}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}