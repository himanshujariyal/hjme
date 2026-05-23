import { createFileRoute } from '@tanstack/react-router'

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
    role: 'Senior Software Engineer',
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
    role: 'Head, UI & Frontend',
    range: '2013 — 16',
  },
]

const focusAreas = ['Web Performance', 'PWA', 'TypeScript', 'React', 'Accessibility']

const socials = [
  { label: 'Email', href: 'mailto:himanshujariyal@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/himanshujariyal' },
  { label: 'GitHub', href: 'https://github.com/himanshujariyal' },
  { label: 'X', href: 'https://x.com/him_jar' },
]

function AboutPage() {
  return (
    <section className="pt-[30px] pb-[60px] bg-white">
      <div className="mx-auto w-1/2 max-lg:w-4/5 max-[600px]:w-full max-[600px]:px-4 max-[600px]:box-border">

        {/* ===== HERO ===== */}
        <header className="pt-[20px]">
          <p className="font-pn text-body text-[16px] leading-[26px]">
            Hey, I&rsquo;m Himanshu — a Senior Software Engineer at{' '}
            <span className="text-ink">Microsoft</span>, working out of Bellevue, WA. These
            days I spend most of my time chasing milliseconds on the Bing Search results
            page, where I lead the work on{' '}
            <span className="text-ink">INP &amp; responsiveness</span>. Thanks for stopping
            by.
          </p>

          {/* Focus pills inline under hero */}
          <div className="flex flex-wrap gap-[6px] mt-[20px]">
            {focusAreas.map((tag) => (
              <span
                key={tag}
                className="inline-block px-[10px] py-[4px] text-[11px] tracking-[0.05em] font-pn text-ink border border-line rounded-full hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* ===== EXPERIENCE ===== */}
        <SectionHeading>Experience</SectionHeading>
        <ul className="divide-y divide-line2 border-y border-line2">
          {experiences.map((exp) => (
            <li key={exp.company} className="group">
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between py-[14px] no-underline hover:bg-[rgba(255,164,51,0.04)] -mx-[8px] px-[8px] transition-colors"
              >
                <div className="flex items-baseline gap-[12px] min-w-0">
                  <span className="font-pn-bold text-ink text-[15px] group-hover:text-accent transition-colors truncate">
                    {exp.company}
                  </span>
                  <span className="font-pn text-muted text-[13px] truncate max-[600px]:hidden">
                    {exp.role}
                  </span>
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-muted shrink-0 ml-[12px]">
                  {exp.range}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* ===== EDUCATION + ELSEWHERE — single row ===== */}
        <div className="mt-[40px] grid grid-cols-2 max-[600px]:grid-cols-1 gap-[32px]">
          <div>
            <Label>Education</Label>
            <div className="font-pn-bold text-ink text-[14px] mt-[6px]">
              IIT Roorkee
            </div>
            <div className="font-pn text-muted text-[13px]">
              B.Tech, Computer Science · 2012–16
            </div>
          </div>
          <div>
            <Label>Elsewhere</Label>
            <div className="flex flex-wrap gap-x-[16px] gap-y-[4px] mt-[6px]">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[14px] font-pn text-ink no-underline border-b border-line2 hover:text-accent hover:border-accent transition-colors pb-[1px]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[44px] mb-[16px]">
      <h2 className="font-pn-bold text-ink text-[12px] tracking-[0.3em] uppercase inline-block">
        {children}
      </h2>
      <span className="block w-[28px] h-[2px] bg-accent mt-[6px]" />
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-pn-bold">
      {children}
    </div>
  )
}
