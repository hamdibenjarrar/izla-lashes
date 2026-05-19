'use client'

import type { ComponentType } from 'react'
import { CreditCard, Home, Leaf, Sparkles } from 'lucide-react'
import { useLang } from '@/lib/lang-context'

type FeatureItem = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  desc: string
}

const featuresData: Record<'fr' | 'ar', FeatureItem[]> = {
  fr: [
    {
      icon: Sparkles,
      title: 'Qualité Premium',
      desc: 'Cils en soie naturelle 100% avec durabilité et confort supérieurs',
    },
    {
      icon: Leaf,
      title: 'Sans Cruauté',
      desc: 'Matériaux d\'origine éthique et formulations végétaliens',
    },
    {
      icon: Home,
      title: 'Livraison à Domicile',
      desc: 'Livraison commode directement à votre porte en Tunisie',
    },
    {
      icon: CreditCard,
      title: 'Paiement à la Livraison',
      desc: 'Options de paiement flexibles sans frais cachés',
    },
  ],
  ar: [
    {
      icon: Sparkles,
      title: 'جودة فاخرة',
      desc: 'رموش من الحرير الطبيعي 100٪ مع متانة وراحة فائقة',
    },
    {
      icon: Leaf,
      title: 'بدون قسوة',
      desc: 'مواد ذات مصدر أخلاقي وتركيبات نباتية خالية',
    },
    {
      icon: Home,
      title: 'التوصيل إلى المنزل',
      desc: 'توصيل مريح مباشرة إلى باب منزلك في تونس',
    },
    {
      icon: CreditCard,
      title: 'الدفع عند التسليم',
      desc: 'خيارات دفع مرنة بدون رسوم مخفية',
    },
  ]
}

export default function Features() {
  const { lang } = useLang()
  const features = featuresData[lang]

  return (
    <section style={{ backgroundColor: 'var(--color-obsidian)', borderColor: 'var(--color-champagne)' }} className="py-0 border-y border-opacity-10">
      <div className="section-wrap grid grid-cols-1 md:grid-cols-4 divide-x" style={{ borderColor: 'var(--color-champagne)' }}>
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <div key={idx} className="feat px-8 py-8 flex flex-col gap-2 items-center text-center">
              <Icon className="feat-icon" strokeWidth={1.4} aria-hidden />
            <h3 style={{ color: 'var(--color-champagne)' }} className="text-xs uppercase tracking-widest font-medium">{feature.title}</h3>
            <p style={{ color: 'var(--color-champagne)' }} className="text-xs opacity-50 leading-relaxed">{feature.desc}</p>
          </div>
          )
        })}
      </div>
    </section>
  )
}
