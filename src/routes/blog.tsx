import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

interface Post {
  title: string
  href: string
  publisher: string
  date: string
  featured?: boolean
  note?: string
}

const posts: Post[] = [
  {
    title: 'Performance — Web Almanac 2025',
    href: 'https://almanac.httparchive.org/en/2025/performance',
    publisher: 'HTTP Archive',
    date: '2025',
    featured: true,
    note: 'Co-authored chapter on the state of web performance in 2025.',
  },
  {
    title: 'Service Workers Explained — A Practical Map',
    href: 'https://medium.com/@him_jar/service-workers-explained-a-practical-map-%EF%B8%8F-d756a7b159aa',
    publisher: 'Medium',
    date: 'Aug 2025',
  },
  {
    title: 'Understanding Web Performance Monitoring',
    href: 'https://blog.bitsrc.io/understanding-web-performance-monitoring-2ed52f97a974',
    publisher: 'Bits and Pieces',
    date: 'Aug 2020',
  },
  {
    title: 'Is monorepo for you? — 2020',
    href: 'https://blog.bitsrc.io/is-monorepo-for-you-2020-78cc1717a4f1',
    publisher: 'Bits and Pieces',
    date: 'Jul 2020',
  },
  {
    title: 'Solving the famous Trello puzzle!',
    href: 'https://medium.com/@him_jar/solving-the-famous-trello-puzzle-88cd8fca7506',
    publisher: 'Medium',
    date: 'Jul 2020',
  },
  {
    title: 'Why taking a chill pill makes you healthier?',
    href: 'https://medium.com/series/why-taking-a-chill-pill-makes-you-healthier-6004e16a6c87',
    publisher: 'Medium · Series',
    date: 'Jul 2020',
  },
  {
    title: 'Permission based views in AngularJS',
    href: 'https://medium.com/@him_jar/permission-based-views-in-angularjs-1edfd0fd8288',
    publisher: 'Medium',
    date: 'Jul 2016',
  },
]

function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <section className="pt-[30px] pb-[60px] bg-white">
      <div className="mx-auto w-1/2 max-lg:w-4/5 max-[600px]:w-full max-[600px]:px-4 max-[600px]:box-border">

        <p className="font-pn text-body text-[16px] leading-[26px] pt-[20px]">
          Performance, frontend, and the occasional detour.
        </p>

        {/* ===== FEATURED ===== */}
        {featured && (
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block mt-[32px] pl-[16px] border-l-2 border-accent no-underline"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted font-pn-bold mb-[6px]">
              {featured.publisher} · {featured.date}
            </div>
            <div className="font-pn-bold text-ink text-[16px] leading-[1.4] group-hover:text-accent transition-colors">
              {featured.title}
            </div>
            {featured.note && (
              <div className="font-pn text-body text-[13px] leading-[20px] mt-[4px]">
                {featured.note}
              </div>
            )}
          </a>
        )}

        {/* ===== POSTS ===== */}
        <SectionHeading>All Posts</SectionHeading>
        <ul className="divide-y divide-line2 border-y border-line2">
          {rest.map((p) => (
            <li key={p.href} className="group">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between py-[14px] no-underline hover:bg-[rgba(255,164,51,0.04)] -mx-[8px] px-[8px] transition-colors gap-[12px]"
              >
                <div className="flex flex-col min-w-0">
                  <span className="font-pn-bold text-ink text-[15px] group-hover:text-accent transition-colors truncate">
                    {p.title}
                  </span>
                  <span className="font-pn text-muted text-[12px] mt-[2px]">
                    {p.publisher}
                  </span>
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-muted shrink-0">
                  {p.date}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-[28px] text-[13px] font-pn text-muted">
          More on{' '}
          <a
            href="https://medium.com/@him_jar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink no-underline border-b border-line2 hover:text-accent hover:border-accent pb-[1px] transition-colors"
          >
            Medium
          </a>
          .
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
