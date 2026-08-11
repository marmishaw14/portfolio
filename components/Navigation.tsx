'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)

    if (id === 'sidequests') {
      router.push('/sidequests')
      return
    }

    if (pathname !== '/') {
      router.push(`/#${id}`)
      return
    }

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'sidequests', label: 'Sidequests' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        isMobileMenuOpen
          ? 'border-white/10 bg-black/95 backdrop-blur-md'
          : isScrolled
          ? 'border-white/10 bg-black/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false)
              router.push('/')
            }}
            className="text-sm font-medium text-white transition-opacity hover:opacity-75 sm:text-base"
          >
            McCauley Armishaw
          </button>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-white/45 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <span className="text-xl leading-none" aria-hidden="true">
                ×
              </span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden="true">
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </span>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="border-t border-white/10 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-md px-2 py-2 text-left text-sm text-white/65 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
