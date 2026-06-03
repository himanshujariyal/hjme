import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { projects } from '../../data/projects'
import { getProjectDetail } from '../../data/projectDetails'
import { asset } from '../../lib/asset'

export const Route = createFileRoute('/works/$slug')({
  loader: ({ params }) => {
    const idx = projects.findIndex((p) => p.slug === params.slug)
    if (idx === -1) throw notFound()
    const project = projects[idx]
    const prev = idx > 0 ? projects[idx - 1] : projects[projects.length - 1]
    const next = idx < projects.length - 1 ? projects[idx + 1] : projects[0]
    return {
      project,
      prev,
      next,
      detail: getProjectDetail(params.slug),
    }
  },
  notFoundComponent: () => (
    <div className="p-[50px] text-center bg-white text-body font-pn">
      Project not found.{' '}
      <Link to="/" className="text-accent hover:text-accent-hover">
        Back to work
      </Link>
    </div>
  ),
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const { project, prev, next, detail } = Route.useLoaderData()

  // External-link projects (no internal case study) — minimal page.
  if (project.external && project.link) {
    return (
      <div className="bg-white pt-10 pb-[60px]">
        <div className="mx-auto max-w-[900px] px-[30px]">
          <h1 className="font-pn-bold font-normal text-[28px] text-ink mb-[10px]">
            {project.title}
          </h1>
          <p className="font-pn text-[15px] text-body mb-[20px]">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-pn text-[15px] text-accent hover:text-accent-hover"
          >
            View live project →
          </a>
        </div>
      </div>
    )
  }

  const arrowCls =
    'absolute top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white/15 hover:bg-white/30 text-white text-[22px] leading-none no-underline transition-colors'

  return (
    <div className="bg-white">
      {/* ─── Hero with prev/next ─── */}
      <section
        className="relative h-[280px] bg-cover bg-center"
        style={{ backgroundImage: `url(${asset(project.thumb)})` }}
        role="img"
        aria-label={`${project.title} cover`}
      >
        <div className="absolute inset-0 bg-black/45" />

        <Link
          to="/works/$slug"
          params={{ slug: prev.slug }}
          aria-label={`Previous project: ${prev.title}`}
          className={`${arrowCls} left-[20px]`}
        >
          ‹
        </Link>
        <Link
          to="/works/$slug"
          params={{ slug: next.slug }}
          aria-label={`Next project: ${next.title}`}
          className={`${arrowCls} right-[20px]`}
        >
          ›
        </Link>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-pn-bold text-white text-[32px] tracking-[1px] mb-[6px]">
            {project.title}
          </h1>
          {detail?.subtitle && (
            <p className="font-pn text-white/90 text-[16px] mb-[10px]">
              {detail.subtitle}
            </p>
          )}
          <div className="font-pn text-white/70 text-[11px] uppercase tracking-[0.25em]">
            {project.tags.join('  ·  ')}
          </div>
        </div>
      </section>

      {detail ? (
        <article className="mx-auto max-w-[960px] px-[30px] pb-[60px]">
          {/* ─── About ─── */}
          <h2 className="font-pn-bold text-ink text-[22px] mt-[40px] mb-[18px]">
            About
            <span className="block w-[40px] h-[3px] bg-accent mt-[8px]" />
          </h2>
          <section className="mb-[50px]">
            {detail.about.map((item, i) => (
              <div key={i} className={i > 0 ? 'mt-[28px]' : ''}>
                {item.heading && (
                  <h3 className="font-pn-bold text-ink text-[15px] mb-[8px]">
                    {item.heading}
                  </h3>
                )}
                <p className="font-pn text-body text-[15px] leading-[27px]">
                  {item.text}
                </p>
              </div>
            ))}
          </section>

          {/* ─── Content blocks ─── */}
          {detail.blocks.map((block, i) => (
            <section key={i} className="mb-[50px]">
              {block.heading && (
                <h3 className="font-pn-bold text-ink text-[22px] mb-[18px]">
                  {block.heading}
                  <span className="block w-[40px] h-[3px] bg-accent mt-[8px]" />
                </h3>
              )}
              {block.description && (
                <p className="font-pn text-body text-[15px] leading-[27px] mb-[18px]">
                  {block.description}
                </p>
              )}
              {block.image && (
                <figure>
                  <img
                    src={asset(block.image)}
                    alt={block.heading ?? ''}
                    loading="lazy"
                    className="block w-full h-auto"
                  />
                  {block.imageCaption && (
                    <figcaption className="font-pn italic text-muted text-[13px] mt-[8px] text-center">
                      {block.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
              {block.video && (
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    src={block.video}
                    title={block.heading ?? 'video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              )}
            </section>
          ))}
        </article>
      ) : (
        <p className="font-pn text-[15px] text-foot text-center py-[50px]">
          Detailed case study coming soon.
        </p>
      )}
    </div>
  )
}
