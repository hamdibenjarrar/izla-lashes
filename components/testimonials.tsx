'use client'

import Image from 'next/image'
import { useLang } from '@/lib/lang-context'

const testimonialData = {
  fr: {
    label: 'CUSTOMER LOVE',
    title: 'What Our Clients Say',
    items: [
      {
        stars: '⭐⭐⭐⭐⭐',
        text: '"La qualité est absolument magnifique. Je n\'ai jamais eu plus confiance avec mes cils. Ils ont l\'air si naturels et se sentent sans poids!"',
        author: 'Fatima H.',
      },
      {
        stars: '⭐⭐⭐⭐⭐',
        text: '"Un service exceptionnel du début à la fin. La livraison était rapide, et le paiement à la livraison était très commode. Hautement recommandé!"',
        author: 'Noor K.',
      },
      {
        stars: '⭐⭐⭐⭐⭐',
        text: '"J\'ai essayé beaucoup de marques, mais les cils IZLA sont incomparables. La qualité premium vaut chaque sou."',
        author: 'Amira B.',
      },
    ]
  },
  ar: {
    label: 'حب العملاء',
    title: 'ماذا يقول عملاؤنا',
    items: [
      {
        stars: '⭐⭐⭐⭐⭐',
        text: '"الجودة مذهلة تماماً. لم أشعر بثقة أكثر برموشي. تبدو طبيعية جداً وتشعر بخفة!"',
        author: 'فاطمة ح.',
      },
      {
        stars: '⭐⭐⭐⭐⭐',
        text: '"خدمة استثنائية من البداية إلى النهاية. كانت التوصيل سريعة، والدفع عند التسليم كان مريح جداً. مستحسن بشدة!"',
        author: 'نور ك.',
      },
      {
        stars: '⭐⭐⭐⭐⭐',
        text: '"حاولت الكثير من العلامات التجارية، لكن رموش إيزلا لا مثيل لها. الجودة الفاخرة تستحق كل فلس."',
        author: 'أميرة ب.',
      },
    ]
  }
}

export default function Testimonials() {
  const { lang } = useLang()
  const data = testimonialData[lang]
  const testimonials = data.items
  const isRtl = lang === 'ar'

  return (
    <section style={{ backgroundColor: 'var(--color-ivory-warm)' }} className="py-24">
      <div className="section-wrap max-w-6xl">
        {/* Section header — always centered */}
        <div style={{ textAlign: 'center' }} className="mb-16">
          <span className="section-label mb-4 flex items-center justify-center gap-4">
            <span style={{ backgroundColor: 'var(--color-champagne)' }} className="w-12 h-px opacity-40"></span>
            <span style={{ color: 'var(--color-rose-gold)' }} className="uppercase tracking-widest text-xs">{data.label}</span>
            <span style={{ backgroundColor: 'var(--color-champagne)' }} className="w-12 h-px opacity-40"></span>
          </span>
          <h2 style={{ textAlign: 'center' }} className="section-title">{data.title}</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="t-card bg-white border rounded-lg p-8"
              style={{ borderColor: 'rgba(201,169,110,0.25)', textAlign: isRtl ? 'right' : 'left' }}
            >
              <div className="text-lg mb-4 tracking-widest" style={{ textAlign: isRtl ? 'right' : 'left' }}>{testi.stars}</div>
              <p style={{ color: 'var(--color-text-dark)' }} className="font-serif italic text-lg mb-6 leading-relaxed">{testi.text}</p>
              <p style={{ color: 'var(--color-text-light)' }} className="text-xs uppercase tracking-widest">{testi.author}</p>
            </div>
          ))}
        </div>

        {/* Featured image */}
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src="/IZLA Lifestyle - Woman Applying Lashes.png"
            alt="IZLA Lashes Beauty"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
