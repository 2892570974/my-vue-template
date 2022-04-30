import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      comp: resolve(__dirname, 'src/components'),
      '@': resolve(__dirname, 'src'),
      styles: resolve(__dirname, 'src/styles')
    }
  },
})
