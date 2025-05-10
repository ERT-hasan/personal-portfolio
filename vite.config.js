import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react(), ],
  server: {
    open: true, // यदि यह true है तो यह default ब्राउज़र में खोलेगा
    host: true
  }
})
