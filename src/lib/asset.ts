// Resolve a /public-relative asset path against Vite's base URL so the
// same data files work in dev (base '/') and on GitHub Pages (base '/hjme/').
export function asset(path: string): string {
  if (/^([a-z]+:)?\/\//i.test(path)) return path
  const base = import.meta.env.BASE_URL
  return base.replace(/\/$/, '') + (path.startsWith('/') ? path : '/' + path)
}
