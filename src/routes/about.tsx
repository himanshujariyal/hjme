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
  return (
    <section className="abtsec" id="section-underline-2">
      <div className="container aboutBack">
        <div className="container" id="leftInfo">

          <div className="smallHead">About Me</div>
          <div className="textme">
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

          <div className="smallHead">Experience</div>

          {experiences.map((exp) => (
            <div className="oneExperience" key={exp.company}>
              <div className="company">
                <div className="duration">{exp.duration}</div>
                <div className="position-title">{exp.position}</div>
                <div className="companyName">
                  <a href={exp.url} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                </div>
              </div>
              <div className="desc-company">{exp.description}</div>
            </div>
          ))}

          <div className="smallHead">Contact</div>

          <div className="oneExperience">
            <div className="company">
              <div className="companyName">
                <a href="mailto:himanshujariyal@gmail.com">Email</a>
                <span> (click to send mail)</span>
              </div>
            </div>
            <div className="position-title">himanshujariyal@gmail.com</div>
          </div>

        </div>
      </div>
    </section>
  )
}
