import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The repository is deployed as the GitHub Pages project site /round-peg/.
export default defineConfig({
  base: '/round-peg/',
  plugins: [react()],
})
