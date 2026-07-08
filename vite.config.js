// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if using React; remove if not needed

export default defineConfig({
  plugins: [react()],
  // add other config options here
})