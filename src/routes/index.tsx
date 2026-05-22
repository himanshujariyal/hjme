import { createFileRoute } from '@tanstack/react-router'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export const Route = createFileRoute('/')({
  component: WorkPage,
})

function WorkPage() {
  const [jukebox, lectut, merchant, inventory, joinImg, starsAbove] = projects

  const col4 = 'basis-full md:basis-1/3 md:max-w-[33.3333%]'
  const col8 = 'basis-full md:basis-2/3 md:max-w-[66.6666%]'
  const row = 'flex flex-wrap'

  return (
    <div>
      <section>
        <div className="mx-auto max-w-[1170px] px-[15px] text-center font-pn-bold text-head-text p-[50px] bg-white">
          A little selection of projects I've done so far.
        </div>

        <div>
          {/* Row 1 — 2/3 + 1/3 */}
          <div className={row}>
            <div className={col8}>
              <ProjectCard project={jukebox} />
            </div>
            <div className={col4}>
              <ProjectCard project={lectut} />
            </div>
          </div>

          {/* Row 2 — 1/3 + 1/3 + 1/3 */}
          <div className={row}>
            <div className={col4}>
              <ProjectCard project={merchant} />
            </div>
            <div className={col4}>
              <ProjectCard project={inventory} />
            </div>
            <div className={col4}>
              <ProjectCard project={joinImg} />
            </div>
          </div>

          {/* Row 3 — 1/3 */}
          <div className={row}>
            <div className={col4}>
              <ProjectCard project={starsAbove} />
            </div>
          </div>

          <div className="mx-auto max-w-[1170px] px-[15px] text-center font-pn-bold text-head-text py-[100px]">
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
