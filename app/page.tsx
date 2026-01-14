import { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { WhoWeAre } from '@/components/home/WhoWeAre'
import { Ecosystem } from '@/components/home/Ecosystem'
import { Capabilities } from '@/components/home/Capabilities'
import { CTA } from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'Novyx Labs - AI for Builders',
  description: 'We build persistent AI systems that remember. Starting with Novyx Core—a knowledge graph that endures across conversations.',
  openGraph: {
    title: 'Novyx Labs - AI for Builders',
    description: 'Building AI that actually remembers',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Ecosystem />
      <Capabilities />
      <CTA />
    </>
  )
}





