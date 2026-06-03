import { createFileRoute } from '@tanstack/react-router'
import Reveal from '../components/Reveal'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

interface Experience {
  company: string
  url?: string
  role: string
  range: string
}

const experiences: Experience[] = [
  {
    company: 'Microsoft',
    url: 'https://www.microsoft.com/',
    role: 'Senior Software Engineer · Bing',
    range: '2018 — Now',
  },
  {
    company: 'Headout',
    url: 'https://www.headout.com/',
    role: 'Software Engineer',
    range: '2016 — 17',
  },
  {
    company: 'Blinkit',
    url: 'https://blinkit.com/',
    role: 'Software Developer',
    range: '2015 — 16',
  },
  {
    company: 'IMG, IIT Roorkee',
    url: 'https://channeli.in/',
    role: 'Head — UI & Frontend',
    range: '2013 — 16',
  },
]

const socials = [
  { label: 'Email',    href: 'mailto:himanshujariyal@gmail.com',           handle: 'himanshujariyal@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/himanshujariyal', handle: 'in/himanshujariyal' },
  { label: 'GitHub',   href: 'https://github.com/himanshujariyal',          handle: '@himanshujariyal' },
  { label: 'X',        href: 'https://x.com/him_jar',                       handle: '@him_jar' },
]

// Monospace stack — kept as the about page's quiet signature (used only
// on the left-rail labels and a couple of meta values). Just enough
// contrast against Proxima Nova to give the page a "field notes" feel
// without taking over.
const MONO =
  "font-['ui-monospace',_'SFMono-Regular',_Menlo,_Consolas,_'Liberation_Mono',_monospace]"

function AboutPage() {
  return (
    <section className="bg-white">
      <Intro />
      <Experiencee />
      <Education />
      <Elsewhere />
      <Signoff />
    </section>
  )
}

/* ───────────────────────── Row primitive ───────────────────────── */

interface RowProps {
  label: string
  children: React.ReactNode
  first?: boolean
}

/**
 * Every section is a quiet two-column row: small monospace label on the
 * left (sticky), content on the right. Hairline rule between rows.
 */
function Row({ label, children, first }: RowProps) {
  return (
    <div
      className={`mx-auto max-w-[1170px] px-[24px] py-[48px] md:py-[64px] ${
        first ? '' : 'border-t border-line'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-[32px] gap-y-[20px]">
        <div
          className={`${MONO} text-[11px] uppercase tracking-[0.22em] text-muted md:pt-[8px] md:sticky md:top-[80px] md:self-start`}
        >
          {label}
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

/* ───────────────────────── Intro ───────────────────────── */

function Intro() {
  return (
    <Reveal>
      <Row label="intro" first>
        <p className="font-pn text-ink text-[24px] md:text-[34px] leading-[1.3] tracking-[-0.01em] max-w-[34ch]">
          <span className="font-pn-bold">Himanshu</span>, building quieter,
          quicker interfaces<span className="text-accent">.</span>
        </p>
        <p className="mt-[16px] font-pn text-muted text-[14px] md:text-[15px] tracking-[-0.005em]">
          Currently at Microsoft, Redmond.
        </p>
        <p className="mt-[24px] font-pn text-body text-[15px] md:text-[16px] leading-[1.65] max-w-[58ch]">
          These days I spend most of my time chasing milliseconds on the Bing
          Search results page, where I lead the work on INP and runtime
          responsiveness. Before that — a smaller startup, a quick-commerce
          stint, and four good years of student-run web teams at IIT Roorkee.
        </p>
      </Row>
    </Reveal>
  )
}

/* ───────────────────────── Experience ───────────────────────── */

function Experiencee() {
  return (
    <Reveal>
      <Row label="experience">
        <ul className="-mt-[8px]">
          {experiences.map((e, i) => (
            <Reveal key={e.company} delay={i * 50}>
              <ExperienceRow exp={e} />
            </Reveal>
          ))}
        </ul>
      </Row>
    </Reveal>
  )
}

function ExperienceRow({ exp }: { exp: Experience }) {
  return (
    <li className="border-b border-line last:border-b-0">
      <a
        href={exp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid grid-cols-[1fr_auto] items-baseline gap-[16px] py-[18px] md:py-[22px] no-underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      >
        <div className="flex flex-wrap items-baseline gap-x-[16px] gap-y-[4px] min-w-0">
          <span className="font-pn-bold text-ink text-[18px] md:text-[22px] leading-[1.2] tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent">
            {exp.company}
          </span>
          <span className="font-pn text-muted text-[13px] md:text-[14px]">
            {exp.role}
          </span>
        </div>
        <div
          className={`${MONO} flex items-baseline gap-[12px] text-[11px] uppercase tracking-[0.18em] text-muted`}
        >
          <span className="tabular-nums">{exp.range}</span>
          <span className="text-ink transition-transform duration-500 ease-out group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </a>
    </li>
  )
}

/* ───────────────────────── Education ───────────────────────── */

function Education() {
  return (
    <Reveal>
      <Row label="education">
        <div className="flex flex-wrap items-baseline gap-x-[16px] gap-y-[4px]">
          <span className="font-pn-bold text-ink text-[18px] md:text-[22px] leading-[1.2] tracking-[-0.01em]">
            IIT Roorkee
          </span>
          <span className="font-pn text-muted text-[14px]">
            B.Tech · Computer Science &amp; Engineering
          </span>
          <span
            className={`${MONO} text-[11px] uppercase tracking-[0.18em] text-muted tabular-nums`}
          >
            2012 — 16
          </span>
        </div>
      </Row>
    </Reveal>
  )
}

/* ───────────────────────── Elsewhere ───────────────────────── */

function Elsewhere() {
  return (
    <Reveal>
      <Row label="elsewhere">
        <ul className="-mt-[8px]">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 40}>
              <li className="border-b border-line last:border-b-0">
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group grid grid-cols-[110px_1fr_auto] items-baseline gap-[16px] py-[14px] md:py-[16px] no-underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                >
                  <span
                    className={`${MONO} text-[11px] uppercase tracking-[0.22em] text-muted`}
                  >
                    {s.label}
                  </span>
                  <span className="font-pn text-ink text-[15px] md:text-[16px] transition-colors duration-300 group-hover:text-accent truncate">
                    {s.handle}
                  </span>
                  <span className="text-ink transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {s.href.startsWith('mailto:') ? '→' : '↗'}
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </Row>
    </Reveal>
  )
}

/* ───────────────────────── Signoff ───────────────────────── */

function Signoff() {
  return (
    <Reveal>
      <div className="mx-auto max-w-[1170px] px-[24px] py-[96px] border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-[32px] gap-y-[8px]">
          <span
            className={`${MONO} text-[11px] uppercase tracking-[0.22em] text-muted`}
          >
            signed
          </span>
          <p
            className={`${MONO} text-[12px] uppercase tracking-[0.22em] text-muted`}
          >
            H. J. · Redmond · 2026
          </p>
        </div>
      </div>
    </Reveal>
  )
}
