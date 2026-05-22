import { useEffect, useState } from 'react'

export default function Loader() {
  const [opacity, setOpacity] = useState(1)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setOpacity(0), 800)
    const hideTimer = setTimeout(() => setHidden(true), 1300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white pointer-events-none"
      style={{ opacity, transition: 'opacity 0.5s ease' }}
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gray-700 animate-spin" />
      </div>
    </div>
  )
}
