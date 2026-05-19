'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'fr' | 'ar'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextType>({
  lang: 'fr',
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = (localStorage.getItem('lang') as Lang) || 'fr'
    applyLang(saved)
    setLangState(saved)
  }, [])

  const applyLang = (newLang: Lang) => {
    const isAr = newLang === 'ar'
    // Set direction on html element so Tailwind RTL & CSS [dir=rtl] both work
    document.documentElement.lang = newLang
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
    // Also toggle body class for legacy CSS selectors
    document.body.classList.toggle('ar', isAr)
    document.body.dir = isAr ? 'rtl' : 'ltr'
  }

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
    applyLang(newLang)
  }

  if (!mounted) return <>{children}</>

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
