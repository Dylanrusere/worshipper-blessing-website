import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PreloaderProvider } from '@/lib/context/preloader-context'
import { Preloader } from '@/components/preloader'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Worshipper Blessing | Anointing goes beyond Gift',
  description: 'Experience the sacred atmosphere of worship with The Worshipper Blessing (Blessing Murewa Chinakidzwa). Through music, healing, and prophetic worship, bringing Kingdom Worship to the world.',
  keywords: ['worship', 'gospel', 'Zimbabwe', 'Blessing Murewa Chinakidzwa', 'ZAOGA FIFMI', 'healing', 'deliverance', 'restoration'],
  authors: [{ name: 'The Worshipper Blessing' }],
  openGraph: {
    title: 'The Worshipper Blessing | Anointing goes beyond Gift',
    description: 'Experience the sacred atmosphere of worship. Through music, healing, and prophetic worship.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-charcoal text-ivory overflow-x-hidden">
        <PreloaderProvider>
          <div className="grain-overlay" />
          <Preloader />
          {children}
          <Analytics />
        </PreloaderProvider>
      </body>
    </html>
  )
}
