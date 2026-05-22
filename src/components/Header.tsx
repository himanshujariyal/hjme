import CanvasAnim from './CanvasAnim'

export default function Header() {
  return (
    <div className="relative flex h-[300px] box-border bg-header">
      <CanvasAnim />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center font-pn-bold text-[35px]">
        <span className="block opacity-0 anim-fadein-1">
          <span className="text-white normal-case tracking-normal text-[26px]">
            Himanshu Jariyal
          </span>
        </span>
        <div className="text-profile font-pn-bold text-[15px] pb-[5px]">
          <span className="block opacity-0 anim-fadein-2">
            UI/UX Designer &amp; Frontend Developer
          </span>
        </div>
      </div>
    </div>
  )
}
