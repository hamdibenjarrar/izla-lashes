'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'
import { useLang } from '@/lib/lang-context'

const content = {
  fr: {
    eyebrow: 'Extensions Cils Premium',
    title: 'Beauté Redéfinie',
    desc: 'Cils en soie 100% premium. Noir intense et brun naturel. Livraison gratuite. Paiement à la livraison.',
    shop: 'Découvrir',
    learn: 'En Savoir Plus',
    quality: 'Qualité Premium',
    silk: 'Soie 100%',
    natural: '100% Naturel',
    cruelty: 'Sans Cruauté',
  },
  ar: {
    eyebrow: 'تمديد الرموش الفاخرة',
    title: 'إعادة تحديد الجمال',
    desc: 'رموش حريرية 100٪. أسود عميق وبني طبيعي. التوصيل المجاني. الدفع عند الاستلام.',
    shop: 'استكشفي',
    learn: 'اعرفي المزيد',
    quality: 'جودة فاخرة',
    silk: 'حرير 100٪',
    natural: '100% طبيعي',
    cruelty: 'بدون قسوة',
  }
}

export default function Hero() {
  const { lang } = useLang()
  const t = content[lang]
  const heroImage = '/IZLA Hero - Tunisian Woman at Vanity.png'
  const heroStyle = { '--hero-image': `url("${heroImage}")` } as CSSProperties

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">{t.eyebrow}</div>
          <h1>{t.title}</h1>
          <p className="hero-sub">{t.desc}</p>
          <div className="hero-ctas">
            <a href="#products" className="btn-p">{t.shop}</a>
            <button className="btn-o">{t.learn}</button>
          </div>
          <div style={{ marginTop: '48px' }}>
            <div className="h-card">
              <div className="h-card-lbl">{t.quality}</div>
              <div className="h-card-val">{t.silk}</div>
            </div>
            <div className="pills" style={{ marginTop: '12px' }}>
              <span className="pill">{t.natural}</span>
              <span className="pill">{t.cruelty}</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div style={{ position: 'relative', height: '520px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(13,10,11,0.2)' }}>
            <Image
              src={heroImage}
              alt="IZLA Luxury Lashes - Woman at Vanity"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
