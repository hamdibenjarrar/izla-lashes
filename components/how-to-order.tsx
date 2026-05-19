'use client'

import { useLang } from '@/lib/lang-context'

const stepsData = {
  fr: {
    label: 'COMMENT ÇA MARCHE',
    title: 'Trois Étapes Simples',
    desc: 'Obtenir vos cils de rêve est plus facile que jamais. Suivez notre processus simple et profitez d\'extensions de cils premium livrées directement chez vous.',
    cta: 'Acheter sur WhatsApp',
    items: [
      {
        number: '1',
        title: 'Parcourir',
        desc: 'Explorez notre collection sélectionnée d\'ensembles de cils premium et choisissez votre style parfait.',
      },
      {
        number: '2',
        title: 'Commander',
        desc: 'Ajoutez vos cils préférés au panier et finalisez l\'achat en quelques clics.',
      },
      {
        number: '3',
        title: 'Recevoir',
        desc: 'Recevez vos cils de luxe livrés à votre porte. Paiement à la livraison, zéro frais cachés.',
      },
    ]
  },
  ar: {
    label: 'كيفية الطلب',
    title: 'ثلاث خطوات بسيطة',
    desc: 'الحصول على رموشك الحلم أسهل من أي وقت مضى. اتبعي عمليتنا البسيطة واستمتعي برموش فاخرة تُسلم إلى باب منزلك.',
    cta: 'تسوقي الآن عبر واتساب',
    items: [
      {
        number: '1',
        title: 'تصفحي',
        desc: 'استكشفي مجموعتنا المختارة من مجموعات الرموش الفاخرة واختاري أسلوبك المثالي.',
      },
      {
        number: '2',
        title: 'اطلبي',
        desc: 'أضيفي رموشك المفضلة إلى سلة التسوق وأكملي الدفع ببضع نقرات.',
      },
      {
        number: '3',
        title: 'استقبلي',
        desc: 'احصلي على رموشك الفاخرة المُسلمة إلى باب منزلك. الدفع عند الاستلام، بدون رسوم مخفية.',
      },
    ]
  }
}

export default function HowToOrder() {
  const { lang } = useLang()
  const data = stepsData[lang]
  const steps = data.items

  return (
    <section id="how-to-order" style={{ background: 'linear-gradient(to bottom, var(--color-plum), var(--color-obsidian))' }} className="py-24">
      <div className="section-wrap max-w-4xl">
        <div className="text-center mb-20">
          <span className="section-label mb-4 flex items-center justify-center gap-4 relative">
            <span style={{ backgroundColor: 'var(--color-champagne)' }} className="w-12 h-px opacity-40"></span>
            <span style={{ color: 'var(--color-champagne)' }} className="uppercase tracking-widest text-xs">{data.label}</span>
            <span style={{ backgroundColor: 'var(--color-champagne)' }} className="w-12 h-px opacity-40"></span>
          </span>
          <h2 style={{ color: '#faf6f0', textAlign: 'center' }} className="font-serif text-4xl md:text-5xl font-light leading-tight mb-4">
            {data.title}
          </h2>
          <p style={{ color: 'rgba(250,246,240,.55)', textAlign: 'center' }} className="max-w-lg mx-auto text-base leading-relaxed font-light">
            {data.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div style={{ background: 'linear-gradient(90deg, transparent, rgba(212,184,150,.3), transparent)' }} className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              {/* Step number circle */}
              <div style={{ backgroundColor: 'rgba(250,246,240,.05)', borderColor: 'var(--color-champagne)', borderOpacity: 0.3 }} className="w-20 h-20 rounded-full border flex items-center justify-center mb-6 relative z-10">
                <span style={{ color: 'var(--color-champagne)' }} className="font-serif text-3xl font-light">{step.number}</span>
              </div>

              <h3 style={{ color: '#faf6f0' }} className="font-serif text-2xl font-light mb-3">{step.title}</h3>
              <p style={{ color: 'rgba(250,246,240,.5)' }} className="text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a href="https://wa.me/21650000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-4 rounded uppercase text-xs tracking-widest font-medium transition-all duration-300 hover:-translate-y-0.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.578.946-2.846 2.554-3.297 4.207-.452 1.653-.212 3.414.625 4.959.837 1.545 2.282 2.739 3.905 3.256 1.622.517 3.43.446 5.034-.201 1.604-.648 2.927-1.879 3.6-3.331.672-1.452.733-3.099.174-4.612-.56-1.513-1.707-2.773-3.16-3.5-1.453-.726-3.116-.844-4.73-.196" />
            </svg>
            {data.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
