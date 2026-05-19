'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Products from '@/components/products'
import HowToOrder from '@/components/how-to-order'
import Testimonials from '@/components/testimonials'
import Delivery from '@/components/delivery'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Products />
      <HowToOrder />
      <Testimonials />
      <Delivery />
      <Footer />
    </>
  )
}
