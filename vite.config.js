import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/personal-portfolio/', 
  plugins: [tailwindcss(), react()],
  server: {
    open: true,
    host: true
  }
})
