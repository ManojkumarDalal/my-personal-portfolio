import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    publicDir: 'public', // Ensure this path is correctly set
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['react-typed'],
  },
})

