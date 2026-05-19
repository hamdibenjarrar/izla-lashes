import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LangProvider } from '@/lib/lang-context'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://iz-la.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'IZLA LASHES — Remoush Premium · تمديد الرموش الفاخرة',
  description: 'Extensions de cils premium IZLA. Noir intense et brun naturel. Paiement à la livraison. تمديد الرموش الفاخرة – التوصيل للمنزل – الدفع عند الاستلام',
  generator: 'v0.app',
  openGraph: {
    title: 'IZLA LASHES — Premium Silk Eyelash Extensions',
    description: 'Discover luxury eyelash extensions with IZLA LASHES',
    url: siteUrl,
    siteName: 'IZLA LASHES',
    images: [
      {
        url: '/IMAGE 1 - Hero Shot Packaging (1).png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'fr_TN',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0a0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" style={{ backgroundColor: 'var(--ivoire)' }} suppressHydrationWarning>
      <body style={{ backgroundColor: 'var(--ivoire)', color: 'var(--text-dark)' }} suppressHydrationWarning>
        <LangProvider>
          {children}
        </LangProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
