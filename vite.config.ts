import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// GitHub Pages project site lives at https://<user>.github.io/hjme/
// so all built asset URLs must be prefixed with /hjme/.
// In dev (vite serves at /), keep the base as '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/hjme/' : '/',
  plugins: [
    TanStackRouterVite({ routesDirectory: './src/routes' }),
    react(),
    tailwindcss(),
  ],
}))
