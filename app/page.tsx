import { Hero } from '@/components/home/Hero'
import { FeaturedProduct } from '@/components/home/FeaturedProduct'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Benefits } from '@/components/home/Benefits'
import { Testimonials } from '@/components/home/Testimonials'
import { CTA } from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTA />
    </>
  )
}


