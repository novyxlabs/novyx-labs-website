import { ProductsHero } from '@/components/products/ProductsHero'
import { ProductList } from '@/components/products/ProductList'

export const metadata = {
  title: 'Products - Novyx Labs',
  description: 'Explore our suite of legal automation tools designed for modern founders.',
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductList />
    </>
  )
}


