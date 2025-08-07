import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tls from 'tls';

// Ignore SSL cert verification in dev (ONLY)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend server URL
        // target: 'https://mern-crud-psjs.onrender.com', // Backend server URL
        changeOrigin: true,
        secure: false, // <-- This disables SSL cert verification
      },
    },
  },
})
