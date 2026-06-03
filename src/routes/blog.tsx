import { createFileRoute } from '@tanstack/react-router'
import Reveal from '../components/Reveal'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

interface Post {
  title: string
  href: string
  publisher: string
  date: string
  year: number
  featured?: boolean
  note?: string
}

const posts: Post[] = [
  {
    title: 'Performance — Web Almanac 2025',
    href: 'https://almanac.httparchive.org/en/2025/performance',
    publisher: 'HTTP Archive',
    date: '2025',
    year: 2025,
    featured: true,
    note: 'Co-authored chapter on the state of web performance in 2025 — what changed, what stuck, and what to actually do about it.',
  },
  {
    title: 'Service Workers Explained — A Practical Map',
    href: 'https://medium.com/@him_jar/service-workers-explained-a-practical-map-%EF%B8%8F-d756a7b159aa',
    publisher: 'Medium',
    date: 'Aug 2025',
    year: 2025,
  },
  {
    title: 'Understanding Web Performance Monitoring',
    href: 'https://blog.bitsrc.io/understanding-web-performance-monitoring-2ed52f97a974',
    publisher: 'Bits and Pieces',
    date: 'Aug 2020',
    year: 2020,
  },
  {
    title: 'Is monorepo for you? — 2020',
    href: 'https://blog.bitsrc.io/is-monorepo-for-you-2020-78cc1717a4f1',
    publisher: 'Bits and Pieces',
    date: 'Jul 2020',
    year: 2020,
  },
  {
    title: 'Solving the famous Trello puzzle!',
    href: 'https://medium.com/@him_jar/solving-the-famous-trello-puzzle-88cd8fca7506',
    publisher: 'Medium',
    date: 'Jul 2020',
    year: 2020,
  },
  {
    title: 'Why taking a chill pill makes you healthier?',
    href: 'https://medium.com/series/why-taking-a-chill-pill-makes-you-healthier-6004e16a6c87',
    publisher: 'Medium · Series',
    date: 'Jul 2020',
    year: 2020,
  },
  {
    title: 'Permission based views in AngularJS',
    href: 'https://medium.com/@him_jar/permission-based-views-in-angularjs-1edfd0fd8288',
    publisher: 'Medium',
    date: 'Jul 2016',
    year: 2016,
  },
]

// Shared serif stack — the blog's signature voice. Reuses system fonts so
// nothing extra is loaded; the personality comes purely from the contrast
// with Proxima Nova used elsewhere on the site.
const SERIF = "font-['Georgia',_'Times_New_Roman',_ui-serif,_serif]"

function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)
  const groups = rest.reduce<Record<number, Post[]>>((acc, p) => {
    ;(acc[p.year] ||= []).push(p)
    return acc
  }, {})
  const years = Object.keys(groups)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    // Warm paper-cream tint that's only ever shown on /blog. Sets the
    // editorial tone without leaking into the rest of the site.
    <section className="bg-[#FAF7F2]">
      <Masthead />
      {featured && <CoverStory post={featured} />}
      <TableOfContents years={years} groups={groups} />
      <Colophon />
    </section>
  )
}

/* ───────────────────────── Masthead ───────────────────────── */

function Masthead() {
  return (
    <Reveal>
      <div className="mx-auto max-w-[1170px] px-[24px] pt-[56px] pb-[80px] md:pt-[88px] md:pb-[120px]">
        {/* Magazine-style issue line: three meta tokens separated by rules */}
        <div className="flex items-center gap-[16px] font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
          <span>Issue No. 07</span>
          <span aria-hidden className="h-px w-[28px] bg-muted/50" />
          <span>Spring 2026</span>
          <span aria-hidden className="h-px w-[28px] bg-muted/50" />
          <span>Est. 2016</span>
        </div>

        <h1
          className={`${SERIF} mt-[36px] text-ink leading-[0.98] tracking-[-0.02em] text-[56px] md:text-[96px] lg:text-[128px] max-w-[14ch]`}
        >
          The{' '}
          <em className="font-normal italic" aria-label="Slow">
            <span className="slow-letter" style={{ animationDelay: '0.3s' }}>S</span>
            <span className="slow-letter" style={{ animationDelay: '0.9s' }}>l</span>
            <span className="slow-letter" style={{ animationDelay: '1.6s' }}>o</span>
            <span className="slow-letter" style={{ animationDelay: '2.4s' }}>w</span>
          </em>
          <br />
          Web<span className="text-accent">.</span>
        </h1>

        <p
          className={`${SERIF} mt-[40px] max-w-[58ch] text-[19px] md:text-[22px] leading-[1.6] text-ink`}
        >
          Notes on performance, frontend, and the occasional detour —
          long-form pieces gathered from HTTP Archive, Medium and bits.dev.
          Mostly about making the web feel quicker, sometimes about why that
          matters at all.
        </p>
      </div>
    </Reveal>
  )
}

/* ───────────────────────── Cover story ───────────────────────── */

function CoverStory({ post }: { post: Post }) {
  return (
    <Reveal>
      <article className="mx-auto max-w-[1170px] px-[24px] pb-[120px]">
        {/* Rule + section label, like the start of a magazine feature */}
        <div className="flex items-baseline justify-between border-t border-ink/15 pt-[20px] mb-[40px]">
          <span className="font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
            ✦  Cover Story
          </span>
          <span className="font-pn text-[11px] uppercase tracking-[0.22em] text-muted tabular-nums">
            {post.date}
          </span>
        </div>

        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block no-underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
        >
          <p className="font-pn text-[12px] uppercase tracking-[0.22em] text-muted">
            {post.publisher} · Feature
          </p>

          <h2
            className={`${SERIF} mt-[16px] text-ink leading-[1.05] tracking-[-0.02em] text-[30px] md:text-[48px] lg:text-[60px] max-w-[18ch] transition-colors duration-300 group-hover:text-accent`}
          >
            {post.title}
          </h2>

          {/* Pullquote, set off with a tall accent rule on the left */}
          {post.note && (
            <blockquote
              className={`${SERIF} mt-[40px] max-w-[52ch] border-l-2 border-accent pl-[20px] text-[20px] md:text-[24px] leading-[1.5] italic text-ink/85`}
            >
              "{post.note}"
            </blockquote>
          )}

          <span className="mt-[40px] inline-flex items-center gap-[10px] font-pn-bold text-[13px] uppercase tracking-[0.22em] text-ink group-hover:text-accent">
            Read the chapter
            <span className="transition-transform duration-500 ease-out group-hover:translate-x-2">
              ↗
            </span>
          </span>
        </a>
      </article>
    </Reveal>
  )
}

/* ───────────────────────── Table of contents ───────────────────────── */

interface TOCProps {
  years: number[]
  groups: Record<number, Post[]>
}

function TableOfContents({ years, groups }: TOCProps) {
  const total = years.reduce((n, y) => n + groups[y].length, 0)

  return (
    <div className="mx-auto max-w-[1170px] px-[24px] pb-[80px]">
      <Reveal>
        <div className="flex items-baseline justify-between border-t border-ink/15 pt-[20px] mb-[8px]">
          <span className="font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
            Table of Contents
          </span>
          <span className="font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
            {total.toString().padStart(2, '0')} entries
          </span>
        </div>
      </Reveal>

      {years.map((year) => (
        <YearChapter key={year} year={year} posts={groups[year]} />
      ))}
    </div>
  )
}

function YearChapter({ year, posts }: { year: number; posts: Post[] }) {
  return (
    <section className="pt-[40px] pb-[8px]">
      <Reveal>
        {/* Chapter heading: rule — small-caps year — rule (centered) */}
        <div className="flex items-center gap-[20px] my-[24px]">
          <span aria-hidden className="h-px flex-1 bg-ink/15" />
          <h3
            className={`${SERIF} text-ink text-[18px] md:text-[20px] tabular-nums tracking-[0.06em]`}
          >
            ·  {year}  ·
          </h3>
          <span aria-hidden className="h-px flex-1 bg-ink/15" />
        </div>
      </Reveal>

      <ul>
        {posts.map((p, i) => (
          <Reveal key={p.href} delay={i * 50}>
            <TOCRow post={p} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function TOCRow({ post }: { post: Post }) {
  return (
    <li>
      <a
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-baseline gap-[12px] py-[18px] md:py-[22px] no-underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      >
        <span
          className={`${SERIF} shrink-0 text-ink text-[20px] md:text-[26px] leading-[1.15] tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent`}
        >
          {post.title}
        </span>

        {/* Leader dots — classic TOC convention. flex-1 + dotted border
            grows between title and date and shifts color on hover. */}
        <span
          aria-hidden
          className="hidden md:block flex-1 translate-y-[-4px] border-b border-dotted border-ink/30 transition-colors duration-300 group-hover:border-accent/60"
        />

        <span className="shrink-0 flex items-baseline gap-[14px] font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
          <span>{post.publisher}</span>
          <span aria-hidden className="hidden md:inline h-[10px] w-px bg-muted/40" />
          <span className="hidden md:inline tabular-nums">{post.date}</span>
          <span className="text-ink transition-transform duration-500 ease-out group-hover:translate-x-1">
            ↗
          </span>
        </span>
      </a>
    </li>
  )
}

/* ───────────────────────── Colophon ───────────────────────── */

function Colophon() {
  return (
    <Reveal>
      <div className="mx-auto max-w-[1170px] px-[24px] py-[160px] border-t border-ink/15">
        <p className="font-pn text-[11px] uppercase tracking-[0.22em] text-muted">
          Colophon
        </p>

        <p
          className={`${SERIF} mt-[28px] max-w-[28ch] text-ink leading-[1.08] tracking-[-0.02em] text-[36px] md:text-[60px]`}
        >
          More on <em className="italic font-normal">Medium</em>.
        </p>

        <a
          href="https://medium.com/@him_jar"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-baseline gap-[8px] mt-[32px] font-pn text-[12px] uppercase tracking-[0.22em] text-muted hover:text-ink no-underline"
        >
          @him_jar
          <span className="transition-transform duration-500 ease-out group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </Reveal>
  )
}
