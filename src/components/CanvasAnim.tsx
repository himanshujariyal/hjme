import { useEffect, useRef } from 'react'

/**
 * Replicates the original Paper.js wavy-path animation:
 * a filled sine-wave path at the bottom of the dark header.
 */
export default function CanvasAnim() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const POINTS = 10
    let width = 0
    let height = 0
    let centerY = 0
    let pathHeight = 0
    let mouseY = 0
    let frame = 0
    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      width = canvas.width
      height = canvas.height - 50
      centerY = canvas.height / 2
      mouseY = centerY / 2
      pathHeight = mouseY
    }
    resize()
    window.addEventListener('resize', resize)

    // Listen on window because the centered name overlay (z-10) sits above
    // the canvas and would otherwise swallow mousemove events.
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseY = e.clientY - rect.top
    }
    window.addEventListener('mousemove', onMove)

    let smooth = true
    const onDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        smooth = !smooth
      }
    }
    window.addEventListener('mousedown', onDown)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pathHeight += (centerY - mouseY - pathHeight) / 50

      // Compute wave points
      const points: { x: number; y: number }[] = []
      points.push({ x: 0, y: canvas.height })
      for (let i = 1; i < POINTS; i++) {
        const x = (width / POINTS) * i
        const sinSeed = frame + (i + (i % 10)) * 100
        const sinHeight = Math.sin(sinSeed / 200) * pathHeight
        const y = Math.sin(sinSeed / 100) * sinHeight + height
        points.push({ x, y })
      }
      points.push({ x: width, y: canvas.height })

      // Draw either a smooth curve or a polyline (triangular) through points
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      if (smooth) {
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2
          const yc = (points[i].y + points[i + 1].y) / 2
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
        }
        const last = points[points.length - 1]
        ctx.lineTo(last.x, last.y)
      } else {
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y)
        }
      }
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()

      ctx.fillStyle = '#3E3E3E'
      ctx.fill()

      frame++
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  )
}
