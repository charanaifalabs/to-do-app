import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/to-do-app/', // for GitHub Pages deployment
  plugins: [
    react(), // React plugin
  ],
})
