import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

/**
 * Minimal nav — right-aligned, typographic, blends with the slim header.
 *
 * • Tabs use the same micro-uppercase scale as the page's meta labels
 *   (text-[11px] tracking-[0.22em]) so the chrome reads as one system.
 * • Active item: a small accent dot precedes a darker (ink) label.
 * • Inactive items: muted, hover slides an ink underline in from the left.
 * • Default state has no background/border — the header's wave above and
 *   page whitespace below frame it. When scrolled past the header, the
 *   bar pins to top with a translucent backdrop blur for legibility.
 */
type Tab = { to: '/' | '/blog' | '/about'; label: string }

const tabs: Tab[] = [
  { to: '/',      label: 'Work' },
  { to: '/blog',  label: 'Blog' },
  { to: '/about', label: 'About' },
]

export default function NavBar() {
  const [fixed, setFixed] = useState(false)
  const { location } = useRouterState()

  useEffect(() => {
    // Pin the nav once the slim (72px) identity header has scrolled past.
    const onScroll = () => setFixed(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (to: Tab['to']) => {
    if (to === '/') {
      // "Work" stays active for the homepage and project detail routes.
      return location.pathname === '/' || location.pathname.startsWith('/works')
    }
    return location.pathname.startsWith(to)
  }

  const wrapperClasses = [
    'h-[52px] transition-colors duration-300',
    fixed
      ? 'fixed inset-x-0 top-0 z-40 bg-white/85 backdrop-blur border-b border-line'
      : 'bg-white',
  ].join(' ')

  return (
    <div className={wrapperClasses}>
      <nav className="mx-auto flex h-full max-w-[1170px] items-center justify-end gap-[36px] px-[24px]">
        {tabs.map((tab) => {
          const active = isActive(tab.to)
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className="group relative flex items-center gap-[10px] no-underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              {/* Accent dot — only present for the active item. Scales in
                  smoothly so transitions between tabs feel intentional. */}
              <span
                aria-hidden
                className={`block h-[5px] w-[5px] rounded-full bg-accent transition-transform duration-300 ease-out ${
                  active ? 'scale-100' : 'scale-0'
                }`}
              />

              <span
                className={`font-pn-bold text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  active ? 'text-ink' : 'text-muted group-hover:text-ink'
                }`}
              >
                {tab.label}
              </span>

              {/* Hover underline (inactive only) — slides in from the left. */}
              <span
                aria-hidden
                className={`pointer-events-none absolute -bottom-[6px] left-0 right-0 h-px origin-left bg-ink transition-transform duration-500 ease-out ${
                  active ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
