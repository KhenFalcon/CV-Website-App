import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://khenfalcon.github.io/CV-Website-App/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
