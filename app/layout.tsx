import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Novyx Labs - AI Innovation Hub for Founders',
    template: '%s | Novyx Labs'
  },
  description: 'Empowering builders with AI intelligence across every vertical. From persistent intelligence to vertical-specific automation for modern founders.',
  keywords: ['AI for founders', 'persistent intelligence', 'AI automation', 'startup tools', 'legal tech AI', 'Novyx Core', 'founder tools', 'AI solutions'],
  authors: [{ name: 'Novyx Labs', url: 'https://novyxlabs.com' }],
  creator: 'Novyx Labs',
  publisher: 'Novyx Labs',
  metadataBase: new URL('https://novyx-labs-website.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novyx-labs-website.vercel.app',
    title: 'Novyx Labs - AI Innovation Hub for Founders',
    description: 'Empowering builders with AI intelligence across every vertical',
    siteName: 'Novyx Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Novyx Labs - AI Innovation Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novyx Labs - AI Innovation Hub for Founders',
    description: 'Empowering builders with AI intelligence across every vertical',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}





