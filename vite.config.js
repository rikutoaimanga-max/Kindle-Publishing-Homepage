import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force rebuild for permission fix

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable network access
    // Restart trigger
  },
})
