import { Link } from '@tanstack/react-router'

/**
 * Compact dark header shown on project detail pages (works/$slug).
 * Replaces the tall animated header used on the home / about pages.
 */
export default function ProjectHeader() {
  return (
    <header className="bg-header text-white">
      <div className="mx-auto max-w-[1170px] px-[30px] py-[28px] flex items-center justify-between">
        <div>
          <div className="font-pn-bold text-[22px] leading-none mb-[6px]">
            Himanshu Jariyal
          </div>
          <div className="font-pn text-[13px] text-white/70">
            UI/UX Designer &amp; Frontend Developer
          </div>
        </div>
        <Link
          to="/"
          className="font-pn text-[13px] text-white/80 no-underline hover:text-accent"
        >
          Back to Home
        </Link>
      </div>
    </header>
  )
}
