import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import raw from 'vite-raw-plugin'

export default defineConfig({
  plugins: [
    react(),
    raw({
      fileRegex: /\.md$/
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@c': path.resolve(__dirname, 'src/components')
    }
  },
  base: '/fws-third-step/'
})
