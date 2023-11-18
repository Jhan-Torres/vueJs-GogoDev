import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: { //forma de incluir el preprocesador css de manera global en vite
    preprocessorOptions: {
      scss: {
        additionalData:`
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
})
