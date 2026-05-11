"use client"

import { TransitionLink } from "./transition-link"
import { motion } from "framer-motion"
import { Youtube, Facebook } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/ministry", label: "Ministry" },
  { href: "/music", label: "Music" },
  { href: "/discography", label: "Discography" },
  { href: "/events", label: "Events" },
  { href: "/connect", label: "Connect" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-gold tracking-wide">
                The Worshipper
              </span>
              <span className="text-xs tracking-[0.2em] text-ivory/60 uppercase">
                Blessing Murewa Chinakidzwa
              </span>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">
              Bringing Kingdom Worship to the World through music, healing, and prophetic worship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-6">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </nav>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="https://www.youtube.com/@TheWorshipperBlessing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </motion.a>
              <motion.a
                href="https://facebook.com/BlessingChinakidzwa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </motion.a>
            </div>
            <p className="text-sm text-ivory/60">
              Serving through worship in ZAOGA FIFMI
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} The Worshipper Blessing. All rights reserved.
          </p>
          <p className="text-xs text-ivory/40">
            A sacred worship experience
          </p>
        </div>
      </div>
    </footer>
  )
}
