import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/presente-namorado/',
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
    port: 3000,
  },
})
