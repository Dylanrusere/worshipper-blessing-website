"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { LatestReleaseSection } from "@/components/home/latest-release-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { MinistryImpactSection } from "@/components/home/ministry-impact-section"
import { ScriptureSection } from "@/components/home/scripture-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <LatestReleaseSection />
        <WelcomeSection />
        <MinistryImpactSection />
        <ScriptureSection />
      </main>
      <Footer />
    </>
  )
}
