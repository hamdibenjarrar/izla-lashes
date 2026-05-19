'use client'

import { useLang } from '@/lib/lang-context'

const content = {
  fr: {
    shop: 'Boutique',
    process: 'Processus',
    about: 'À Propos',
    announce: 'Extensions Cils Premium · Livraison Gratuite · Paiement à la Livraison'
  },
  ar: {
    shop: 'المتجر',
    process: 'العملية',
    about: 'معلومات',
    announce: 'تمديد الرموش الفاخرة · التوصيل المجاني · الدفع عند الاستلام'
  }
}

export default function Header() {
  const { lang, setLang } = useLang()

  const t = content[lang]

  return (
    <>
      {/* Announcement Bar */}
      <div style={{ backgroundColor: 'var(--espresso)', color: 'var(--nude-l)', textAlign: 'center', fontSize: '12px', letterSpacing: '0.12em', padding: '10px 16px', lineHeight: '1.6' }}>
        <span>{t.announce}</span>
      </div>

      {/* Language Toggle */}
      <div id="lang-toggle">
        <button
          onClick={() => setLang('fr')}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: `1.5px solid ${lang === 'fr' ? 'var(--espresso-m)' : 'rgba(122, 74, 40, 0.3)'}`,
            background: lang === 'fr' ? 'var(--espresso-m)' : 'var(--ivoire-w)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: lang === 'fr' ? 'var(--nude)' : 'var(--caramel)',
            transition: 'all 0.2s'
          }}
          aria-label="Français"
        >
          FR
        </button>
        <button
          onClick={() => setLang('ar')}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: `1.5px solid ${lang === 'ar' ? 'var(--espresso-m)' : 'rgba(122, 74, 40, 0.3)'}`,
            background: lang === 'ar' ? 'var(--espresso-m)' : 'var(--ivoire-w)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: lang === 'ar' ? 'var(--nude)' : 'var(--caramel)',
            transition: 'all 0.2s'
          }}
          aria-label="العربية"
        >
          AR
        </button>
      </div>

      {/* Header */}
      <header style={{ background: 'rgba(253, 249, 244, 0.95)', borderBottom: '1px solid rgba(26, 15, 8, 0.07)', position: 'sticky', top: 0, zIndex: 900 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', height: '76px' }}>
          {/* Logo */}
          <a href="#" className="logo">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '34px', fontWeight: 400, letterSpacing: '0.18em', color: 'var(--espresso)' }}>IZLA</span>
            <span style={{ fontSize: '8px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--caramel-l)', fontFamily: "'DM Sans', sans-serif", marginTop: '4px' }}>LASHES</span>
          </a>

          {/* Nav */}
          <nav className="nav">
            <a href="#products" style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--text-mid)', transition: 'color 0.2s', fontWeight: 500 }}>{t.shop}</a>
            <a href="#process" style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--text-mid)', transition: 'color 0.2s', fontWeight: 500 }}>{t.process}</a>
            <a href="#how-to-order" style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--text-mid)', transition: 'color 0.2s', fontWeight: 500 }}>{t.about}</a>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href="https://wa.me/21650000000" target="_blank" rel="noopener noreferrer" className="btn-wa">
              WhatsApp
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
