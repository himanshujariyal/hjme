import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { projects } from '../../data/projects'

export const Route = createFileRoute('/works/$slug')({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) throw notFound()
    return project
  },
  notFoundComponent: () => (
    <div className="p-[50px] text-center bg-white text-body font-pn">
      Project not found.{' '}
      <Link to="/" className="text-accent hover:text-accent-hover">
        Back to work
      </Link>
    </div>
  ),
  component: ProjectDetail,
})

function ProjectDetail() {
  const project = Route.useLoaderData()

  return (
    <div>
      <div className="bg-white pt-10 pb-[60px]">
        <div className="mx-auto max-w-[900px] px-[30px]">
          <Link
            to="/"
            className="inline-block mb-[30px] text-[11px] tracking-[0.2em] uppercase text-muted no-underline hover:text-ink"
          >
            ← Back to Work
          </Link>

          <div
            className="w-full h-[350px] bg-cover bg-center mb-10"
            style={{ backgroundImage: `url(${project.thumb})` }}
            role="img"
            aria-label={`${project.title} thumbnail`}
          />

          <h1 className="font-pn-bold font-normal text-[28px] text-ink mb-[10px]">
            {project.title}
          </h1>
          <p className="font-pn text-[15px] text-body mb-[20px]">
            {project.description}
          </p>
          <span className="block mb-10 font-pn text-[11px] text-muted tracking-[0.2em] uppercase">
            {project.tags.join('  ·  ')}
          </span>

          {project.external && project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pn text-[15px] text-accent hover:text-accent-hover"
            >
              View live project →
            </a>
          ) : (
            <p className="font-pn text-[15px] text-foot">
              Detailed case study coming soon.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
