import { useEffect, useRef } from 'react'

/**
 * HeaderWave — a quiet, smooth sine wave that sits at the bottom edge of
 * the header. Spiritual successor to the original CanvasAnim, but redrawn
 * for the minimal white header:
 *
 *   • 24px-tall strip, single 1px stroked line (no fill).
 *   • Two layered sine waves at different frequencies → organic motion.
 *   • Smoothed with quadratic bezier through point midpoints (Catmull-Rom-ish).
 *   • Cursor near the header eases amplitude up (3px → ~12px), then it
 *     settles back to a slow idle when the mouse leaves.
 *   • Honors prefers-reduced-motion (phase freezes; static gentle curve).
 *   • DPR-aware so the line is crisp on retina.
 */
export default function HeaderWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const POINTS = 28
    let width = 0
    let height = 0
    let amp = 3
    let targetAmp = 3
    let phase = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const overX = e.clientX >= rect.left && e.clientX <= rect.right
      // "Near" = anywhere over the header strip (~120px above the canvas).
      const overY = e.clientY <= rect.bottom + 4 && e.clientY >= rect.top - 140
      if (overX && overY) {
        // Closer to the wave → bigger amplitude (3 → ~12px).
        const dist = Math.max(0, rect.top - e.clientY)
        const closeness = 1 - Math.min(dist / 140, 1)
        targetAmp = 3 + closeness * 9
      } else {
        targetAmp = 3
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    let last = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      // Easing amplitude makes mouse-driven changes feel buttery.
      amp += (targetAmp - amp) * 0.06
      // Phase advances in seconds → constant speed regardless of fps.
      if (!reduce) phase += dt * 0.9

      ctx.clearRect(0, 0, width, height)

      const baseY = height / 2
      const points: { x: number; y: number }[] = []
      for (let i = 0; i <= POINTS; i++) {
        const t = i / POINTS
        const x = t * width
        // Two layered sines at different speeds/frequencies → organic, not mechanical.
        const y =
          baseY +
          Math.sin(phase + t * Math.PI * 2.2) * amp +
          Math.sin(phase * 1.35 + t * Math.PI * 4.1) * amp * 0.35
        points.push({ x, y })
      }

      // Smooth path: draw quadratic curves through midpoints of each
      // segment, using the original point as the control. This is the
      // standard "Catmull-Rom feel" trick — visually indistinguishable
      // from a real spline at this amplitude.
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2
        const yc = (points[i].y + points[i + 1].y) / 2
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
      }
      const last = points[points.length - 1]
      ctx.lineTo(last.x, last.y)

      ctx.strokeStyle = 'rgba(82, 84, 88, 0.55)' // ink, half-alpha
      ctx.lineWidth = 1
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.stroke()

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[24px] w-full"
    />
  )
}
