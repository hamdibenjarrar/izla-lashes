'use client'

import { useLang } from '@/lib/lang-context'

const dnaData = {
  fr: {
    label: 'NOTRE ADN',
    title: 'La Philosophie IZLA',
    desc: 'IZLA est plus que de simples cils - c\'est un engagement envers la beauté, la qualité et l\'autonomisation. Chaque produit reflète notre passion pour l\'excellence et notre dévouement pour vous.',
    points: [
      {
        label: 'Savoir-Faire',
        title: 'Qualité Sélectionnée à la Main',
        body: 'Chaque cil est méticuleusement choisi et conçu pour garantir une qualité, un confort et une longévité premium. Nous croyons en la perfection par le dévouement.',
      },
      {
        label: 'Durabilité',
        title: 'Éthique & Sans Cruauté',
        body: 'Notre engagement envers un approvisionnement éthique et des pratiques sans cruauté garantit que la beauté ne se fait jamais au détriment de notre planète ou des animaux.',
      },
      {
        label: 'Innovation',
        title: 'Luxe Moderne',
        body: 'Nous mélangeons une élégance intemporelle avec un design contemporain, créant des cils qui subliment votre beauté naturelle avec un look sophistiqué et sans effort.',
      },
      {
        label: 'Accessibilité',
        title: 'Le Luxe pour Tous',
        body: 'La qualité premium ne devrait pas être exclusive. Nous rendons les cils de luxe accessibles à tous grâce à des prix équitables et des options de paiement pratiques.',
      },
    ],
  },
  ar: {
    label: 'حمضنا النووي',
    title: 'فلسفة إيزلا',
    desc: 'إيزلا أكثر من رموش - إنها التزام بالجمال والجودة والتمكين. كل منتج يعكس شغفنا بالتميز وتفاننا لك.',
    points: [
      {
        label: 'الحرفية',
        title: 'جودة مختارة يدويًا',
        body: 'يتم اختيار كل رمش وتصنيعه بعناية فائقة لضمان جودة فاخرة وراحة وطول عمر. نؤمن بالكمال من خلال التفاني.',
      },
      {
        label: 'الاستدامة',
        title: 'أخلاقي وخالي من القسوة',
        body: 'التزامنا بالمصادر الأخلاقية والممارسات الخالية من القسوة يضمن أن الجمال لا يأتي على حساب كوكبنا أو الحيوانات.',
      },
      {
        label: 'الابتكار',
        title: 'فخامة عصرية',
        body: 'نمزج الأناقة الخالدة مع التصميم المعاصر، مما ينتج عن رموش تحسن جمالك الطبيعي بمظهر سهل وراقي.',
      },
      {
        label: 'إمكانية الوصول',
        title: 'الفخامة للجميع',
        body: 'لا يجب أن تكون الجودة الفاخرة حصرية. نحن نجعل الرموش الفاخرة في متناول الجميع من خلال التسعير العادل وخيارات الدفع المريحة.',
      },
    ],
  }
}

export default function BrandDna() {
  const { lang } = useLang()
  const data = dnaData[lang]
  const dnaPoints = data.points
  const isRtl = lang === 'ar'

  return (
    <section id="brand-dna" style={{ backgroundColor: 'var(--color-obsidian)' }} className="py-24">
      <div className="section-wrap max-w-5xl">
        <div style={{ textAlign: 'center' }} className="mb-20">
          <span className="section-label mb-4 flex items-center justify-center gap-4">
            <span style={{ backgroundColor: 'var(--gold)' }} className="w-12 h-px opacity-40"></span>
            <span style={{ color: 'var(--gold)' }} className="uppercase tracking-widest text-xs">{data.label}</span>
            <span style={{ backgroundColor: 'var(--gold)' }} className="w-12 h-px opacity-40"></span>
          </span>
          <h2 style={{ color: 'var(--cream)', textAlign: 'center' }} className="font-serif text-4xl md:text-5xl font-light leading-tight mb-4">
            {data.title}
          </h2>
          <p style={{ color: 'rgba(245, 240, 232, 0.7)', textAlign: 'center' }} className="max-w-2xl mx-auto text-base leading-relaxed font-light">
            {data.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {dnaPoints.map((point, idx) => (
            <div key={idx} style={{ backgroundColor: 'rgba(245, 240, 232, 0.05)', borderColor: 'var(--gold)', borderWidth: '2px', textAlign: isRtl ? 'right' : 'left' }} className="dna-c border rounded-lg p-8 backdrop-blur">
              <span style={{ color: 'var(--gold)' }} className="text-xs uppercase tracking-widest font-medium mb-3 block">{point.label}</span>
              <h3 style={{ color: 'var(--cream)' }} className="font-serif text-2xl font-light mb-3">{point.title}</h3>
              <p style={{ color: 'rgba(245, 240, 232, 0.7)' }} className="text-sm leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>

        {/* AI Prompts for future generations */}
        <div style={{ backgroundColor: 'rgba(250,246,240,.02)', borderColor: 'var(--color-champagne)', borderOpacity: 0.1 }} className="border rounded-lg p-8 mt-20">
          <h3 style={{ color: '#faf6f0' }} className="font-serif text-2xl font-light mb-6">Creative Direction for Future Content</h3>
          <div className="space-y-4">
            <div style={{ backgroundColor: 'rgba(250,246,240,.02)', borderColor: 'var(--color-champagne)', borderOpacity: 0.08 }} className="border rounded p-4">
              <div style={{ color: 'var(--color-rose-gold)' }} className="text-xs uppercase tracking-widest font-medium mb-2">Lifestyle Photography</div>
              <p style={{ color: 'rgba(250,246,240,.6)' }} className="text-sm font-mono">A sophisticated woman at her vanity table with marble countertop, soft golden light, luxurious lash extensions prominently visible, surrounded by premium beauty products, dried flowers, and champagne gold accents. Vogue editorial aesthetic, high-end lifestyle photography.</p>
            </div>
            <div style={{ backgroundColor: 'rgba(250,246,240,.02)', borderColor: 'var(--color-champagne)', borderOpacity: 0.08 }} className="border rounded p-4">
              <div style={{ color: 'var(--color-rose-gold)' }} className="text-xs uppercase tracking-widest font-medium mb-2">Product Close-Up</div>
              <p style={{ color: 'rgba(250,246,240,.6)' }} className="text-sm font-mono">Extreme close-up of luxurious black silk lash extensions on an eye, golden hour lighting, professional beauty photography, warm tones, emphasizing texture and quality, minimal makeup, natural skin tone.</p>
            </div>
            <div style={{ backgroundColor: 'rgba(250,246,240,.02)', borderColor: 'var(--color-champagne)', borderOpacity: 0.08 }} className="border rounded p-4">
              <div style={{ color: 'var(--color-rose-gold)' }} className="text-xs uppercase tracking-widest font-medium mb-2">Luxury Unboxing</div>
              <p style={{ color: 'rgba(250,246,240,.6)' }} className="text-sm font-mono">Flat lay of ÉLARA premium unboxing experience: forest green box with gold lettering, ivory tissue paper, champagne gold ribbon bow, white accessories, dried baby's breath and pampas grass, marble background, luxury product photography with dramatic shadows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
