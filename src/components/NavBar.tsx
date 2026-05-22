import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const tabBase =
  'inline-block w-[110px] text-center font-pn-bold text-[14px] uppercase no-underline pt-[21px] pb-[11px] px-[5px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2'

export default function NavBar() {
  const [fixed, setFixed] = useState(false)
  const { location } = useRouterState()
  const isAbout = location.pathname === '/about'

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const wrapperClasses = [
    'h-[57px] text-center border-b border-line',
    fixed
      ? 'fixed inset-x-0 top-0 z-40 bg-[rgba(244,244,244,0.97)]'
      : 'bg-surface',
  ].join(' ')

  return (
    <div className={wrapperClasses}>
      <div className="inline-flex items-stretch h-full">
        <Link
          to="/"
          className={`${tabBase} ${!isAbout ? 'text-ink hover:text-accent' : 'text-nav hover:text-accent'}`}
        >
          <span>Work</span>
        </Link>
        <Link
          to="/about"
          className={`${tabBase} ${isAbout ? 'text-ink hover:text-accent' : 'text-nav hover:text-accent'}`}
        >
          <span>About</span>
        </Link>
      </div>
    </div>
  )
}
