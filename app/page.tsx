import { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Ecosystem } from '@/components/home/Ecosystem'
import { Capabilities } from '@/components/home/Capabilities'
import { FoundersJourney } from '@/components/home/FoundersJourney'
import { Testimonials } from '@/components/home/Testimonials'
import { CTA } from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'Home - Empowering Builders with AI Intelligence',
  description: 'Novyx Labs is an AI innovation hub for founders. Explore our ecosystem of intelligent solutions from persistent AI to vertical-specific automation.',
  openGraph: {
    title: 'Novyx Labs - AI Innovation Hub for Founders',
    description: 'Empowering builders with AI intelligence across every vertical',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Capabilities />
      <FoundersJourney />
      <Testimonials />
      <CTA />
    </>
  )
}





