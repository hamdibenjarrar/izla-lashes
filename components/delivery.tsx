'use client'

import Image from 'next/image'
import type { ComponentType } from 'react'
import { CreditCard, Gift, Truck } from 'lucide-react'
import { useLang } from '@/lib/lang-context'

type DeliveryItem = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
}

const deliveryData: Record<'fr' | 'ar', { title: string; desc: string; items: DeliveryItem[] }> = {
  fr: {
    title: 'Livraison Seamless en Tunisie',
    desc: 'Nous apportons le luxe directement à votre porte. Expédition rapide et fiable avec la flexibilité de payer à la livraison. Pas de surprises, pas de frais cachés.',
    items: [
      { icon: Truck, label: 'Livraison Rapide Nationale' },
      { icon: CreditCard, label: 'Paiement à la Livraison' },
      { icon: Gift, label: 'Emballage Luxe Inclus' },
    ],
  },
  ar: {
    title: 'التوصيل السلس عبر تونس',
    desc: 'نحن نحضر الفخامة مباشرة إلى باب منزلك. الشحن السريع والموثوق مع مرونة الدفع عند الاستلام. لا مفاجآت، لا رسوم مخفية.',
    items: [
      { icon: Truck, label: 'التوصيل السريع الوطني' },
      { icon: CreditCard, label: 'الدفع عند الاستلام' },
      { icon: Gift, label: 'التغليف الفاخر مضمون' },
    ],
  }
}

export default function Delivery() {
  const { lang } = useLang()
  const data = deliveryData[lang]
  const isRtl = lang === 'ar'
  const deliveryImage = '/IZLA Luxury Unboxing Flat Lay.png'

  return (
    <section style={{ backgroundColor: 'var(--gold)' }} className="py-20">
      <div className={`section-wrap max-w-5xl flex flex-col items-center gap-12 ${isRtl ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        {/* Text */}
        <div className={`del-t flex-1 ${isRtl ? 'text-right' : 'text-left'}`}>
          <h2 style={{ color: 'var(--noir)' }} className="font-serif text-4xl md:text-5xl font-light mb-4">
            {data.title}
          </h2>
          <p style={{ color: 'rgba(26, 26, 26, 0.8)' }} className="text-lg leading-relaxed mb-8">
            {data.desc}
          </p>

          <div className="flex flex-col gap-3">
            {data.items.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className={`delivery-pill ${isRtl ? 'flex-row-reverse text-right' : ''}`}
                >
                  <Icon className="delivery-icon" strokeWidth={1.6} aria-hidden />
                  <span className="delivery-text">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Visual */}
        <div className="delivery-visual flex-1">
          <Image
            src={deliveryImage}
            alt="IZLA Luxury Delivery"
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
