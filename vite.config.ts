import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/viikko-info/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
