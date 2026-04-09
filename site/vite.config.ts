import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  build: {
    target: 'es2020',
  },
  server: {
    host: true,
    port: 3010,
    allowedHosts: ['lp-leticia.shflox.easypanel.host'],
    hmr: {
      protocol: 'wss',
      clientPort: 443,
      host: 'lp-leticia.shflox.easypanel.host',
    },
  },
})
