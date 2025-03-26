import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.', // racine du projet
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html'),
    },
  },
})
