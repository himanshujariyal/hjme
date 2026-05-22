import { createFileRoute } from '@tanstack/react-router'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export const Route = createFileRoute('/')({
  component: WorkPage,
})

function WorkPage() {
  const [jukebox, lectut, merchant, inventory, joinImg, starsAbove] = projects

  return (
    <div id="mainDiv">
      <section id="section-underline-1">
        <div className="container" id="headPro">
          A little selection of projects I've done so far.
        </div>

        <div id="grid-gallery">
          {/* Row 1 — 2/3 + 1/3 */}
          <div className="proj-row">
            <div className="col-8">
              <ProjectCard project={jukebox} />
            </div>
            <div className="col-4">
              <ProjectCard project={lectut} />
            </div>
          </div>

          {/* Row 2 — 1/3 + 1/3 + 1/3 */}
          <div className="proj-row">
            <div className="col-4">
              <ProjectCard project={merchant} />
            </div>
            <div className="col-4">
              <ProjectCard project={inventory} />
            </div>
            <div className="col-4">
              <ProjectCard project={joinImg} />
            </div>
          </div>

          {/* Row 3 — 1/3 */}
          <div className="proj-row">
            <div className="col-4">
              <ProjectCard project={starsAbove} />
            </div>
          </div>

          <div className="container moreProjects">
            <div>
              I'm also looking for UI/UX &amp; Frontend roles in Startups. Please feel free to{' '}
              <a href="mailto:himanshujariyal@gmail.com">contact</a> me.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
