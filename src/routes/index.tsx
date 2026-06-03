import { createFileRoute, Link } from '@tanstack/react-router'
import { projects, type Project } from '../data/projects'
import Reveal from '../components/Reveal'
export const Route = createFileRoute('/')({
  component: WorkPage,
})

// Years displayed alongside each project in the index. Kept here (rather
// than in projects.ts) so the data file stays a thin source-of-truth and
// presentation concerns live with the view.
const YEARS: Record<string, string> = {
  jukebox: '2013',
  lectut: '2014',
  'merchant-panel': '2015',
  'inventory-mapper': '2015',
  'join-img': '2012',
  'stars-above-us': '2014',
}

function WorkPage() {
  return (
    <section className="bg-white">
      <Intro />
      <ProjectIndex />
      <Contact />
    </section>
  )
}

/* ───────────────────────── Intro ───────────────────────── */

function Intro() {
  return (
    <Reveal>
      <div className="mx-auto max-w-[1170px] px-[24px] pt-[56px] pb-[80px] md:pt-[88px] md:pb-[120px]">
        <p className="font-pn text-[12px] uppercase tracking-[0.22em] text-muted">
          Selected work · 2012 — 2026
        </p>
        <h1 className="mt-[28px] font-pn-bold text-ink leading-[1.05] tracking-[-0.02em] text-[44px] md:text-[72px] lg:text-[88px] max-w-[18ch]">
          Interfaces that feel
          <span className="text-accent">.</span>{' '}
          <span className="italic font-pn">obvious</span>,
          <br />
          built to be{' '}
          <span className="italic font-pn">fast</span>.
        </h1>
        <p className="mt-[28px] max-w-[58ch] font-pn text-[16px] md:text-[18px] leading-[1.55] text-body">
          A small index of things I've designed and shipped — music players,
          dashboards, recruitment pages, a canvas experiment or two. Mostly
          frontend, sometimes the whole thing.
        </p>
      </div>
    </Reveal>
  )
}

/* ───────────────────────── Project index ───────────────────────── */

function ProjectIndex() {
  return (
    <div className="mx-auto max-w-[1170px] px-[24px] pb-[80px]">
      <Reveal>
        <div className="flex items-baseline justify-between border-b border-line pb-[16px] mb-[8px]">
          <span className="font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
            Index
          </span>
          <span className="font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
            {projects.length.toString().padStart(2, '0')} projects
          </span>
        </div>
      </Reveal>

      <ul className="divide-y divide-line">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <ProjectRow project={p} index={i + 1} />
          </Reveal>
        ))}
      </ul>
    </div>
  )
}

interface RowProps {
  project: Project
  index: number
}

function ProjectRow({ project, index }: RowProps) {
  const num = index.toString().padStart(2, '0')
  const year = YEARS[project.slug] ?? ''

  const content = (
    <div
      className="group grid grid-cols-[48px_1fr_auto] items-baseline gap-[24px] py-[28px] md:py-[36px] cursor-pointer"
    >
      <span className="font-pn text-[12px] tracking-[0.18em] text-muted tabular-nums">
        {num}
      </span>

      <span className="flex flex-wrap items-baseline gap-x-[18px] gap-y-[6px]">
        <span
          className="font-pn-bold text-ink text-[28px] md:text-[44px] leading-[1.05] tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent"
        >
          {project.title}
        </span>
        <span className="font-pn text-[13px] md:text-[14px] text-muted opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          {project.description}
        </span>
      </span>

      <span className="flex items-baseline gap-[18px] font-pn text-[12px] uppercase tracking-[0.18em] text-muted">
        <span className="hidden md:inline tabular-nums">{year}</span>
        <span className="text-ink transition-transform duration-500 ease-out group-hover:translate-x-1">
          {project.external ? '↗' : '→'}
        </span>
      </span>
    </div>
  )

  if (project.external) {
    return (
      <li>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
        >
          {content}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link
        to="/works/$slug"
        params={{ slug: project.slug }}
        className="block no-underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      >
        {content}
      </Link>
    </li>
  )
}

/* ───────────────────────── Contact ───────────────────────── */

function Contact() {
  return (
    <Reveal>
      <div className="mx-auto max-w-[1170px] px-[24px] pt-[96px] pb-[120px] border-t border-line">
        {/* Two-column quiet sign-off: small kicker on the left, a single
            understated sentence on the right with the email tucked inline
            so it reads as a note, not another headline. */}
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-[24px] gap-y-[16px]">
          <p className="font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
            Get in touch
          </p>

          <p className="max-w-[52ch] font-pn text-body text-[16px] md:text-[18px] leading-[1.65]">
            Always happy to chat about web performance, frontend at scale, or
            anything in between —{' '}
            <a
              href="mailto:himanshujariyal@gmail.com"
              className="group inline-flex items-baseline gap-[6px] text-ink no-underline border-b border-ink/20 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              himanshujariyal@gmail.com
              <span
                aria-hidden
                className="text-[12px] translate-y-[-1px] transition-transform duration-500 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            .
          </p>
        </div>
      </div>
    </Reveal>
  )
}
