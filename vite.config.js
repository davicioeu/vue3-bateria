import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'



// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Directorio principal de salida
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  
})
