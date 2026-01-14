import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Novyx Labs - Persistent AI for Knowledge Graphs',
    template: '%s | Novyx Labs'
  },
  description: 'Persistent AI brain for enduring knowledge graphs. Core powers multi-tenant, versioned, federated knowledge storage for AI applications.',
  keywords: ['persistent AI', 'knowledge graphs', 'AI memory', 'persistent memory', 'knowledge graph database', 'Novyx Core', 'AI infrastructure', 'federated AI', 'multi-tenant AI', 'AI versioning'],
  authors: [{ name: 'Novyx Labs', url: 'https://novyxlabs.com' }],
  creator: 'Novyx Labs',
  publisher: 'Novyx Labs',
  metadataBase: new URL('https://novyx-labs-website.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novyx-labs-website.vercel.app',
    title: 'Novyx Labs - Persistent AI for Knowledge Graphs',
    description: 'Core powers persistent memory for AI applications with multi-tenant architecture',
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
    title: 'Novyx Labs - Persistent AI for Knowledge Graphs',
    description: 'Core powers persistent memory for AI applications',
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
          <Analytics />
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





