import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Importas Tailwind

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Agregas el plugin aquí
  ],
  base: '/mariovm-portfolio/', 
})