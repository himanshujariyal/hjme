const linkClass =
  'text-heading no-underline hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2'

export default function Footer() {
  return (
    <footer className="text-center text-foot text-[12px] py-[50px] bg-surface border-t border-line">
      <div className="mx-auto max-w-[1170px] px-[15px]">
        <div className="mb-[30px] font-pn-bold text-[14px] uppercase">
          <div>
            <span className="inline-block pr-[10px]">
              <a
                href="https://in.linkedin.com/in/himanshujaiyal"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
            </span>
            <span className="inline-block pr-[10px]">
              <a
                href="https://github.com/mojowebdev"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Github
              </a>
            </span>
            <span className="inline-block">
              <a href="mailto:himanshujariyal@gmail.com" className={linkClass}>
                Email
              </a>
            </span>
          </div>
        </div>
        <div className="font-pn-bold text-[12px] uppercase text-foot">
          Portfolio Website of Himanshu Jariyal || CS Student, IIT Roorkee || Loves Designing &amp; Developing Web Products
        </div>
      </div>
    </footer>
  )
}
