"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Youtube, Facebook, Mail, Send, CheckCircle } from "lucide-react"
import { fadeUp, cardElevation, staggerContainer, viewportSettings, lineExpand } from "@/lib/animations"

const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@TheWorshipperBlessing",
    handle: "@TheWorshipperBlessing",
    description: "Watch worship sessions, music videos, and live recordings",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
    handle: "The Worshipper Blessing",
    description: "Join our community and stay updated on ministry activities",
  },
]

export default function ConnectPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubscribed(true)
    setNewsletterEmail("")
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

        {/* Contact Form Section */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Left - Info */}
              <motion.div variants={fadeUp} className="space-y-8">
                <div>
                  <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">
                    Reach Out
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6">
                    We&apos;d Love to Hear From You
                  </h2>
                  <div className="h-px w-16 bg-gold/50 mb-6" />
                  <p className="text-ivory/70 leading-relaxed">
                    Whether you have questions about the ministry, want to invite us 
                    for an event, or simply want to share how worship has impacted 
                    your life, we welcome your message.
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-4 pt-8 border-t border-border/30">
                  <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-6">
                    Follow Us
                  </p>
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="group flex items-start gap-4 p-4 bg-secondary/30 border border-border/30 hover:border-gold/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                        <social.icon size={20} className="text-ivory/60 group-hover:text-gold transition-colors" />
                      </div>
                      <div>
                        <p className="text-ivory group-hover:text-gold transition-colors font-medium">
                          {social.name}
                        </p>
                        <p className="text-gold/70 text-sm">{social.handle}</p>
                        <p className="text-ivory/50 text-sm mt-1">{social.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div variants={cardElevation}>
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-secondary/30 border border-gold/30">
                    <CheckCircle size={48} className="text-gold mb-6" />
                    <h3 className="font-serif text-2xl text-ivory mb-4">
                      Message Sent
                    </h3>
                    <p className="text-ivory/60 mb-6">
                      Thank you for reaching out. We will respond to your message soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-gold hover:text-ivory transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="p-8 md:p-10 bg-secondary/30 border border-border/30 space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-ivory/80 text-sm mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 bg-charcoal border border-border/50 text-ivory placeholder:text-ivory/30 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-ivory/80 text-sm mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 bg-charcoal border border-border/50 text-ivory placeholder:text-ivory/30 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-ivory/80 text-sm mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-charcoal border border-border/50 text-ivory placeholder:text-ivory/30 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-deep-gold text-charcoal py-4 transition-colors duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span className="tracking-wide">Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
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

              <motion.div variants={fadeUp} className="mb-8">
                <Mail size={40} className="text-gold mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
                  Stay Connected
                </h2>
                <p className="text-ivory/60 leading-relaxed max-w-xl mx-auto">
                  Receive new worship sessions, ministry updates, and event 
                  announcements directly in your inbox.
                </p>
              </motion.div>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-3 text-gold"
                >
                  <CheckCircle size={24} />
                  <span className="text-lg">Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeUp}
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-charcoal border border-border/50 text-ivory placeholder:text-ivory/30 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gold hover:bg-deep-gold text-charcoal tracking-wide transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </motion.form>
              )}

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
