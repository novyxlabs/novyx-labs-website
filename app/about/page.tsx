import { Mission } from '@/components/about/Mission'
import { Story } from '@/components/about/Story'
import { Values } from '@/components/about/Values'
import { Contact } from '@/components/about/Contact'

export const metadata = {
  title: 'About - Building AI That Remembers | Novyx Labs',
  description: 'We build persistent AI systems that actually remember. Starting with Novyx Core—a knowledge graph that endures.',
  openGraph: {
    title: 'About Novyx Labs - Building AI That Remembers',
    description: 'Building persistent AI systems for developers',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <Mission />
      <Story />
      <Values />
      <Contact />
    </>
  )
}





