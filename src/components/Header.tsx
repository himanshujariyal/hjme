import { Link } from '@tanstack/react-router'
import HeaderWave from './HeaderWave'

/**
 * Minimal header — a slim identity bar to match the typographic homepage.
 *
 * Left:   monogram + name + role (name links back to /).
 * Right:  a tiny "available for work" status with a pulsing dot.
 * Bottom: HeaderWave canvas — a smooth low-amplitude sine line that
 *         eases bigger when the cursor is in the header area.
 */
export default function Header() {
  return (
    <header className="relative bg-white">
      <div className="mx-auto flex max-w-[1170px] items-center justify-between gap-[24px] px-[24px] h-[72px]">
        {/* Identity */}
        <Link
          to="/"
          className="group flex items-baseline gap-[14px] no-underline text-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
        >
          <span
            aria-hidden
            className="font-pn-bold text-[15px] leading-none tracking-[-0.02em] inline-flex h-[28px] w-[28px] items-center justify-center bg-ink text-white transition-colors duration-300 group-hover:bg-accent"
          >
            HJ
          </span>
          <span className="flex items-baseline gap-[10px]">
            <span className="font-pn-bold text-[15px] tracking-[-0.01em] opacity-0 anim-fadein-1">
              Himanshu Jariyal
            </span>
            <span className="hidden sm:inline font-pn text-[11px] uppercase tracking-[0.22em] text-muted opacity-0 anim-fadein-2">
              UI/UX · Frontend
            </span>
          </span>
        </Link>

        {/* Status */}
        <span className="hidden md:inline-flex items-center gap-[10px] font-pn text-[11px] uppercase tracking-[0.22em] text-muted opacity-0 anim-fadein-2">
          <span aria-hidden className="relative inline-flex h-[8px] w-[8px]">
            <span className="absolute inset-0 rounded-full bg-accent opacity-60 animate-pulse-slow" />
            <span className="absolute inset-0 rounded-full bg-accent scale-50" />
          </span>
          Available for work
        </span>
      </div>

      <HeaderWave />
    </header>
  )
}
