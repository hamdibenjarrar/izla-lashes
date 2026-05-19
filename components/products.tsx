'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLang } from '@/lib/lang-context'

const productsData = {
  fr: {
    label: 'COLLECTIONS IZLA',
    title: 'Cils Premium',
    desc: 'Découvrez nos collections de cils de soie 100% premium, conçues pour sublimer votre beauté naturelle avec luxe et élégance.',
    buy: 'Acheter',
    items: [
      {
        id: 'noir',
        name: 'Noir Intense',
        desc: 'Cils noirs profonds pour définition dramatique',
        price: '110 TND',
        image: '/IMAGE 1 - Hero Shot Packaging (1).png',
        badge: 'best seller',
      },
      {
        id: 'brown',
        name: 'Brun Naturel',
        desc: 'Cils marron pour élégance subtile',
        price: '110 TND',
        image: '/IMAGE 4 - Instagram Flat Lay (1).png',
        badge: 'new',
      },
      {
        id: 'premium',
        name: 'Premium Mix',
        desc: 'Collection noir et marron premium',
        price: '175 TND',
        image: '/IZLA Collections Display.png',
      },
      {
        id: 'luxury',
        name: 'Luxury Unboxing',
        desc: 'Expérience de luxe premium complète',
        price: '145 TND',
        image: '/IZLA Luxury Unboxing Flat Lay.png',
      },
    ]
  },
  ar: {
    label: 'مجموعات إيزلا',
    title: 'رموش فاخرة',
    desc: 'اكتشفي مجموعاتنا من رموش الحرير الفاخرة بنسبة 100٪، المصممة لتعزيز جمالك الطبيعي بالفخامة والأناقة.',
    buy: 'شراء',
    items: [
      {
        id: 'noir',
        name: 'أسود كثيف',
        desc: 'رموش سوداء عميقة لتحديد دراماتيكي',
        price: '110 TND',
        image: '/IMAGE 1 - Hero Shot Packaging (1).png',
        badge: 'best seller',
      },
      {
        id: 'brown',
        name: 'بني طبيعي',
        desc: 'رموش بنية لأناقة رقيقة',
        price: '110 TND',
        image: '/IMAGE 4 - Instagram Flat Lay (1).png',
        badge: 'new',
      },
      {
        id: 'premium',
        name: 'مزيج فاخر',
        desc: 'مجموعة سوداء وبنية فاخرة',
        price: '175 TND',
        image: '/IZLA Collections Display.png',
      },
      {
        id: 'luxury',
        name: 'تجربة فتح صندوق فاخرة',
        desc: 'تجربة فاخرة متكاملة',
        price: '145 TND',
        image: '/IZLA Luxury Unboxing Flat Lay.png',
      },
    ]
  }
}

export default function Products() {
  const { lang } = useLang()
  const data = productsData[lang]
  const [cart, setCart] = useState<{ [key: string]: boolean }>({})

  const toggleCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="products" className="products-sec">
      <div className="p-container section-wrap">
        <div className="p-header">
          <div className="p-label">{data.label}</div>
          <h2 className="p-title">{data.title}</h2>
          <p className="p-desc">{data.desc}</p>
        </div>

        <div className="p-grid">
          {data.items.map(product => (
            <div key={product.id} className="p-card-luxury">
              <div className="p-img-wrap">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <div className={`p-badge ${product.badge === 'new' ? 'new' : 'bestseller'}`}>
                    {product.badge === 'best seller' ? 'Bestseller' : 'Nouveau'}
                  </div>
                )}
              </div>

              <div className="p-content">
                <h3 className="p-name">{product.name}</h3>
                <p className="p-text">{product.desc}</p>

                <div className="p-footer">
                  <div className="p-price">{product.price}</div>
                  <a href="https://wa.me/21650000000" target="_blank" rel="noopener noreferrer" className="p-cta">
                    {data.buy}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
