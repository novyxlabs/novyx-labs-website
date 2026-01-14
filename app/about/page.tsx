import { Mission } from '@/components/about/Mission'
import { Story } from '@/components/about/Story'
import { Values } from '@/components/about/Values'
import { Contact } from '@/components/about/Contact'

export const metadata = {
  title: 'About - AI Innovation Hub for Founders | Novyx Labs',
  description: 'Learn about Novyx Labs and our mission to empower founders with AI intelligence across every vertical.',
  openGraph: {
    title: 'About Novyx Labs - AI Innovation Hub',
    description: 'Empowering founders with AI intelligence across every vertical',
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





