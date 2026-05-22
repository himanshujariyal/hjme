import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const [fixed, setFixed] = useState(false)
  const { location } = useRouterState()
  const isAbout = location.pathname === '/about'

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div id="navigation" className={fixed ? 'fix-nav' : ''}>
      <div className="nav-inner">
        <Link to="/" className={`nav-tab${!isAbout ? ' active' : ''}`}>
          <span>Work</span>
        </Link>
        <Link to="/about" className={`nav-tab${isAbout ? ' active' : ''}`}>
          <span>About</span>
        </Link>
      </div>
    </div>
  )
}
