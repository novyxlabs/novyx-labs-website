import { Metadata } from 'next'
import { CoreHero } from '@/components/core/CoreHero'
import { CoreFeatures } from '@/components/core/CoreFeatures'
import { CoreDemo } from '@/components/core/CoreDemo'
import { CoreUseCases } from '@/components/core/CoreUseCases'
import { CoreCTA } from '@/components/core/CoreCTA'

export const metadata: Metadata = {
  title: 'Novyx Core - Persistent AI Intelligence | Novyx Labs',
  description: 'Advanced persistent intelligence system that learns, remembers, and adapts across all interactions. The future of AI for founders.',
  openGraph: {
    title: 'Novyx Core - Persistent AI Intelligence',
    description: 'Advanced persistent intelligence system that learns, remembers, and adapts across all interactions.',
    type: 'website',
  },
}

export default function CorePage() {
  return (
    <>
      <CoreHero />
      <CoreFeatures />
      <CoreDemo />
      <CoreUseCases />
      <CoreCTA />
    </>
  )
}
