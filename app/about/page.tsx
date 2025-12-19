import { Mission } from '@/components/about/Mission'
import { Story } from '@/components/about/Story'
import { Values } from '@/components/about/Values'
import { Contact } from '@/components/about/Contact'

export const metadata = {
  title: 'About - Novyx Labs',
  description: 'Learn about Novyx Labs and our mission to empower founders with automated legal tools.',
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



