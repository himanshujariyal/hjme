import { Link } from '@tanstack/react-router'
import type { Project } from '../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const bgStyle = {
    backgroundImage: `url(${project.thumb})`,
  }

  const inner = (
    <>
      <div className="itemBg" style={bgStyle} />
      <div className="item-overlay">
        <h3 className="projectTitle">{project.title}</h3>
        <p className="item-desc">{project.description}</p>
        <div className="tags">{project.tags.join(', ')}</div>
      </div>
    </>
  )

  if (project.external) {
    return (
      <div className="itemWrapper">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      </div>
    )
  }

  return (
    <div className="itemWrapper">
      <Link to="/works/$slug" params={{ slug: project.slug }}>
        {inner}
      </Link>
    </div>
  )
}
