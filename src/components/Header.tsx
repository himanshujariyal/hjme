import CanvasAnim from './CanvasAnim'

export default function Header() {
  return (
    <div id="header">
      <CanvasAnim />
      <div id="myName">
        <span className="intro__title__phrase first">
          <span id="name">Himanshu Jariyal</span>
        </span>
        <div className="profile">
          <span className="intro__title__phrase second">
            UI/UX Designer &amp; Frontend Developer
          </span>
        </div>
      </div>
    </div>
  )
}
