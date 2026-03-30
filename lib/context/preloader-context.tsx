"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"

interface PreloaderContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  startTransition: (href: string, callback: () => void) => void
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined)

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  // Initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // Keep the original duration
    return () => clearTimeout(timer)
  }, [])

  // Transition helper
  const startTransition = useCallback((href: string, callback: () => void) => {
    // Only trigger if it's a different path
    if (window.location.pathname !== href) {
      setIsLoading(true)
      // Allow some time for the preloader to fade in before navigation
      setTimeout(() => {
        callback()
      }, 800)
    } else {
      callback()
    }
  }, [])

  // Reset loading when pathname changes (navigation completed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Duration for transition load (shorter than initial)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading, startTransition }}>
      {children}
    </PreloaderContext.Provider>
  )
}

export function usePreloader() {
  const context = useContext(PreloaderContext)
  if (context === undefined) {
    throw new Error("usePreloader must be used within a PreloaderProvider")
  }
  return context
}
