const linkClass =
  'text-foot no-underline hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 transition-colors'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line">
      <div className="mx-auto max-w-[1170px] px-[20px] py-[16px] flex items-center justify-between text-[11px] tracking-[0.15em] uppercase text-foot font-pn-bold max-[600px]:flex-col max-[600px]:gap-[8px]">
        <div>© {new Date().getFullYear()} Himanshu Jariyal</div>
        <div className="flex gap-[16px]">
          <a
            href="https://in.linkedin.com/in/himanshujaiyal"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/himanshujariyal"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a href="mailto:himanshujariyal@gmail.com" className={linkClass}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
