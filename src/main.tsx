import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'

// Match Vite's base so client-side route URLs are correct on GitHub Pages
// (project page is served from /hjme/).
const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
