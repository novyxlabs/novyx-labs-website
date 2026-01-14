import { Mission } from '@/components/about/Mission'
import { Values } from '@/components/about/Values'
import { Contact } from '@/components/about/Contact'

export const metadata = {
  title: 'About - Fix AI Forgetfulness | Novyx Labs LLC',
  description: 'Novyx Labs builds persistent knowledge graphs that fix AI forgetfulness. From open-source foundations to enterprise governance.',
  keywords: ['persistent AI', 'knowledge graphs', 'self-healing', 'enterprise governance', 'open source'],
  openGraph: {
    title: 'About Novyx Labs - Fix AI Forgetfulness',
    description: 'Persistent knowledge graphs that never forget',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <Mission />
      <Values />
      <Contact />
    </>
  )
}





