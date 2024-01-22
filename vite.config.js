// import { fileURLToPath, URL } from 'url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:
    {
      '@': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.ts', '.vue']
  }
})
