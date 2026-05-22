import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const experiences = [
  {
    duration: 'Jan 2013 - Current',
    position: 'Design Head (From April 2015)',
    company: 'IMG IIT Roorkee',
    url: 'http://img.channeli.in/',
    description:
      'IMG is a student body working directly under college administration, responsible for institute website and intranet facilities of IIT Roorkee. Have been working as UI/UX designer and developer with a team of 41, including 10 designers.',
  },
  {
    duration: 'Summer Intern 2015',
    position: 'Frontend Developer',
    company: 'Grofers',
    url: 'http://grofers.com/',
    description:
      "Grofers is an on-demand, hyper-local delivery service that connects consumers with their local merchants and is currently operating in 27 cities. My role was to carry out research on user experience and interaction, UI/UX design and implement the Frontend of Merchant Panel(POS) and Inventory Mapper(Internal tool) from scratch using Angular JS.",
  },
  {
    duration: 'Summer Intern 2014',
    position: 'Web Developer',
    company: 'Almaconnect',
    url: 'https://www.almaconnect.com/',
    description:
      "Alma Connect connects alumni & institutes through its research based platform that brings institute, alumni, students and faculty on the same platform. My project was on making an analytics system for Alma Connect using Logstash, Elasticsearch and Kibana. I contributed in the collection and visualization of data using JavaScript.",
  },
]

function AboutPage() {
  const smallHead =
    'font-pn-bold text-heading text-[16px] leading-[44px] mb-[35px] mt-[47px] tracking-[0.5px] border-b border-line2'
  const bodyText = 'font-pn text-body text-[15px] leading-[27px]'
  const positionTitle = 'font-pn text-[#808080] text-[15px] mb-[18px]'

  return (
    <section className="pt-[30px]">
      <div className="bg-white">
        <div className="mx-auto mb-[50px] w-1/2 max-lg:w-4/5 max-[600px]:w-full max-[600px]:px-4 max-[600px]:box-border">

          <div className={smallHead}>About Me</div>
          <div className={`${bodyText} mb-[30px]`}>
            I am Himanshu Jariyal, a final year Computer Science undergraduate at IIT Roorkee. I am
            passionate about designing and developing web based products.<br /><br />
            I prototype and iterate a lot, which not only gives me an opportunity to self introspect
            but also to take decisions based on thoughtful reasoning. I try to expand my views
            through valuable feedbacks, both from my juniors and seniors.<br /><br />
            Apart from designing, I am fond of Hills, Dogs &amp; Music. I like trekking &amp;
            exploring new places. A curious type, always pumped up for anything challenging, I
            take every opportunity to learn &amp; grow, explore and enhance the endless possibilities
            all around us.
          </div>

          <div className={smallHead}>Experience</div>

          {experiences.map((exp) => (
            <div className="py-[20px]" key={exp.company}>
              <div>
                <div className="text-[11px] text-muted tracking-[0.2em] leading-[1.5em]">
                  {exp.duration}
                </div>
                <div className={positionTitle}>{exp.position}</div>
                <div className="font-pn text-[19px]">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent no-underline hover:text-accent-hover"
                  >
                    {exp.company}
                  </a>
                </div>
              </div>
              <div className={bodyText}>{exp.description}</div>
            </div>
          ))}

          <div className={smallHead}>Contact</div>

          <div className="py-[20px]">
            <div>
              <div className="font-pn text-[19px]">
                <a
                  href="mailto:himanshujariyal@gmail.com"
                  className="text-accent no-underline hover:text-accent-hover"
                >
                  Email
                </a>
                <span className="text-[12px] text-muted2"> (click to send mail)</span>
              </div>
            </div>
            <div className={positionTitle}>himanshujariyal@gmail.com</div>
          </div>

        </div>
      </div>
    </section>
  )
}
