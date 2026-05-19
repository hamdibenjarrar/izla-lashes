'use client'

import { useLang } from '@/lib/lang-context'

const footerData = {
  fr: {
    tagline: 'Des extensions de cils en soie premium qui célèbrent votre beauté naturelle avec luxe et élégance.',
    shopLabel: 'Boutique',
    infoLabel: 'Informations',
    links: {
      collections: 'Collections',
      newArrivals: 'Nouveautés',
      bestSellers: 'Meilleures Ventes',
      specialSets: 'Coffrets Spéciaux',
      about: 'À Propos',
      careGuide: 'Guide d\'Entretien',
      contact: 'Contact',
      faq: 'FAQ',
    },
    copyright: '© 2024 IZLA LASHES. Tous droits réservés.',
    whatsapp: 'Discuter sur WhatsApp',
  },
  ar: {
    tagline: 'تمديد رموش حريرية فاخرة تحتفي بجمالك الطبيعي مع الفخامة والأناقة.',
    shopLabel: 'المتجر',
    infoLabel: 'معلومات',
    links: {
      collections: 'المجموعات',
      newArrivals: 'وصول حديث',
      bestSellers: 'الأكثر مبيعا',
      specialSets: 'مجموعات خاصة',
      about: 'من نحن',
      careGuide: 'دليل العناية',
      contact: 'اتصل بنا',
      faq: 'الأسئلة الشائعة',
    },
    copyright: '© 2024 إيزلا رموش. جميع الحقوق محفوظة.',
    whatsapp: 'دردش على واتس آب',
  }
}

export default function Footer() {
  const { lang } = useLang()
  const data = footerData[lang]
  const isRtl = lang === 'ar'

  return (
    <footer style={{ backgroundColor: 'var(--color-plum)' }} className="py-16">
      <div className="section-wrap max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="foot-col">
            <a href="#" className="flex flex-col leading-none mb-6">
              <span style={{ color: '#faf6f0' }} className="font-serif text-3xl font-light tracking-widest">IZLA</span>
              <span style={{ color: 'var(--color-champagne)' }} className="text-xs tracking-widest mt-1">LASHES</span>
            </a>
            <p style={{ color: 'rgba(250,246,240,.45)' }} className="text-sm leading-relaxed max-w-xs mb-6">
              {data.tagline}
            </p>
            <div className="flex gap-3">
              <a href="#" style={{ borderColor: 'var(--color-champagne)', color: 'var(--color-champagne)' }} className="w-10 h-10 rounded-full border border-opacity-20 flex items-center justify-center hover:border-opacity-100 transition text-sm">
                f
              </a>
              <a href="#" style={{ borderColor: 'var(--color-champagne)', color: 'var(--color-champagne)' }} className="w-10 h-10 rounded-full border border-opacity-20 flex items-center justify-center hover:border-opacity-100 transition text-sm">
                i
              </a>
              <a href="#" style={{ borderColor: 'var(--color-champagne)', color: 'var(--color-champagne)' }} className="w-10 h-10 rounded-full border border-opacity-20 flex items-center justify-center hover:border-opacity-100 transition text-sm">
                t
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="foot-col">
            <h4 style={{ color: 'var(--color-champagne)' }} className="text-xs uppercase tracking-widest font-medium mb-6">{data.shopLabel}</h4>
            <ul className="space-y-3">
              <li><a style={{ color: 'rgba(250,246,240,.45)' }} href="#products" className="text-sm hover:text-opacity-100 transition">{data.links.collections}</a></li>
              <li><a style={{ color: 'rgba(250,246,240,.45)' }} href="#" className="text-sm hover:text-opacity-100 transition">{data.links.newArrivals}</a></li>
              <li><a style={{ color: 'rgba(250,246,240,.45)' }} href="#" className="text-sm hover:text-opacity-100 transition">{data.links.bestSellers}</a></li>
              <li><a style={{ color: 'rgba(250,246,240,.45)' }} href="#" className="text-sm hover:text-opacity-100 transition">{data.links.specialSets}</a></li>
            </ul>
          </div>

          {/* Info */}
          <div className="foot-col">
            <h4 style={{ color: 'var(--color-champagne)' }} className="text-xs uppercase tracking-widest font-medium mb-6">{data.infoLabel}</h4>
            <ul className="space-y-3">
              <li><a style={{ color: 'rgba(250,246,240,.45)' }} href="#how-to-order" className="text-sm hover:text-opacity-100 transition">{data.links.about}</a></li>
              <li><a style={{ color: 'rgba(250,246,240,.45)' }} href="#" className="text-sm hover:text-opacity-100 transition">{data.links.careGuide}</a></li>
              <li><a style={{ color: 'rgba(250,246,240,.45)' }} href="#" className="text-sm hover:text-opacity-100 transition">{data.links.contact}</a></li>
              <li><a style={{ color: 'rgba(250,246,240,.45)' }} href="#" className="text-sm hover:text-opacity-100 transition">{data.links.faq}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderColor: 'var(--color-champagne)', borderOpacity: 0.1 }} className={`border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <p style={{ color: 'rgba(250,246,240,.3)' }} className="text-xs">{data.copyright}</p>
          <a href="https://wa.me/21650000000" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(250,246,240,.45)' }} className="flex items-center gap-2 text-sm hover:text-emerald-400 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.578.946-2.846 2.554-3.297 4.207-.452 1.653-.212 3.414.625 4.959.837 1.545 2.282 2.739 3.905 3.256 1.622.517 3.43.446 5.034-.201 1.604-.648 2.927-1.879 3.6-3.331.672-1.452.733-3.099.174-4.612-.56-1.513-1.707-2.773-3.16-3.5-1.453-.726-3.116-.844-4.73-.196" />
            </svg>
            {data.whatsapp}
          </a>
        </div>
      </div>
    </footer>
  )
}
