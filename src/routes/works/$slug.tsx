import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { projects } from '../../data/projects'

export const Route = createFileRoute('/works/$slug')({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) throw notFound()
    return project
  },
  notFoundComponent: () => (
    <div className="notfound">
      Project not found. <Link to="/">Back to work</Link>
    </div>
  ),
  component: ProjectDetail,
})

function ProjectDetail() {
  const project = Route.useLoaderData()

  return (
    <div id="mainDiv">
      <div className="project-detail">
        <div className="container">
          <Link to="/" className="project-detail__back">
            ← Back to Work
          </Link>

          <div
            className="project-detail__hero"
            style={{ backgroundImage: `url(${project.thumb})` }}
            role="img"
            aria-label={`${project.title} thumbnail`}
          />

          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__desc">{project.description}</p>
          <span className="project-detail__tags">{project.tags.join('  ·  ')}</span>

          {project.external && project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__cta"
            >
              View live project →
            </a>
          ) : (
            <p className="project-detail__placeholder">Detailed case study coming soon.</p>
          )}
        </div>
      </div>
    </div>
  )
}
