"use client"

import { useState, useEffect } from "react"
import { TransitionLink } from "./transition-link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/ministry", label: "Ministry" },
  { href: "/music", label: "Music" },
  { href: "/discography", label: "Discography" },
  { href: "/spiritual-concept", label: "Spiritual Concept" },
  { href: "/media", label: "Media" },
  { href: "/events", label: "Events" },
  { href: "/connect", label: "Connect" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass border-b border-border/20" : "bg-transparent"
          }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <TransitionLink href="/" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col"
              >
                <span className="font-serif text-xl md:text-2xl text-gold tracking-wide">
                  The Worshipper
                </span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-ivory/60 uppercase">
                  Blessing
                </span>
              </motion.div>
            </TransitionLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <span
                    className={`text-sm tracking-wide transition-colors duration-300 ${pathname === item.href
                        ? "text-gold"
                        : "text-ivory/80 hover:text-gold"
                      }`}
                  >
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-gold"
                    initial={{ width: pathname === item.href ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </TransitionLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-ivory hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-charcoal border-l border-border/30 pt-20 px-6"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <TransitionLink
                      href={item.href}
                      className={`text-lg tracking-wide transition-colors duration-300 ${pathname === item.href
                          ? "text-gold"
                          : "text-ivory/80 hover:text-gold"
                        }`}
                    >
                      {item.label}
                    </TransitionLink>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
