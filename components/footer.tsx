"use client"

import { TransitionLink } from "./transition-link"
import { motion } from "framer-motion"
import { Youtube, Facebook, Instagram } from "lucide-react"
import { SiTiktok, SiApple } from "react-icons/si" 
import { FaSpotify, FaDeezer, FaAmazon } from "react-icons/fa"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/ministry", label: "Ministry" },
  { href: "/music", label: "Music" },
  { href: "/discography", label: "Discography" },
  { href: "/events", label: "Events" },
  { href: "/connect", label: "Connect" },
]

const streamingLinks = [
  { icon: FaSpotify, href: "https://open.spotify.com/artist/7g8tmqTM3bLeNOTW4bNzI1", label: "Spotify", color: "#1DB954" },
  { icon: SiApple, href: "#", label: "iTunes", color: "#FC3C44" },
  { icon: FaAmazon, href: "#", label: "Amazon Music", color: "#00A8E1" },
  { icon: FaDeezer, href: "#", label: "Deezer", color: "#FF0000" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
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
              {[
                { icon: Youtube, href: "https://www.youtube.com/@TheWorshipperBlessing", label: "YouTube" },
                { icon: Facebook, href: "https://facebook.com/BlessingChinakidzwa", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com/the_worshipper_blessing_music", label: "Instagram" },
                { icon: SiTiktok, href: "https://tiktok.com/@theworshipperblessing", label: "TikTok" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-ivory/60">
              Serving through worship in ZAOGA FIFMI
            </p>
          </div>
        </div>

        {/* --- Streaming Platforms Section (Just below the Grid) --- */}
        <div className="pt-8 border-t border-border/10">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
            {streamingLinks.map((platform) => (
              <motion.a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, color: platform.color }}
                className="flex items-center gap-2 text-ivory/60 transition-colors duration-300"
                aria-label={platform.label}
              >
                <platform.icon size={20} />
                <span className="text-[10px] uppercase tracking-widest font-bold hidden sm:inline">
                  {platform.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} The Worshipper Blessing. All rights reserved.
          </p>
          <p className="text-xs text-ivory/40 italic">
            Anointing goes beyond Gift
          </p>
        </div>
        <p className="text-xs text-ivory/40 text-center mt-10">
          Developed with <span className="text-gold">♥</span> by <a href="https://eighttech.co.zw" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Eight Tech</a>
        </p>
      </div>
    </footer>
  )
}