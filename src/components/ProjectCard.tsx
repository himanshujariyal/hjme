import { Link } from '@tanstack/react-router'
import type { Project } from '../data/projects'
import { asset } from '../lib/asset'

interface Props {
  project: Project
}

const linkClasses =
  'block absolute inset-0 no-underline z-[1] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-4px]'

export default function ProjectCard({ project }: Props) {
  const inner = (
    <>
      {/* Background image — scales on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[400ms] ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${asset(project.thumb)})` }}
      />
      {/* Overlay (always-on subtle tint, slightly darker on hover) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/35">
        <h3 className="m-0 mb-[6px] font-pn-bold text-[22px] text-white tracking-[1px]">
          {project.title}
        </h3>
        <p className="mx-auto max-w-[300px] font-pn text-[15px] text-white">
          {project.description}
        </p>
      </div>
    </>
  )

  const wrapperClasses =
    'group relative block h-[250px] text-center overflow-hidden'

  if (project.external) {
    return (
      <div className={wrapperClasses}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {inner}
        </a>
      </div>
    )
  }

  return (
    <div className={wrapperClasses}>
      <Link
        to="/works/$slug"
        params={{ slug: project.slug }}
        className={linkClasses}
      >
        {inner}
      </Link>
    </div>
  )
}
