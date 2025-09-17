import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './', // Project root is frontend/
  plugins: [react()],
  build: {
    outDir: 'dist', // Output to frontend/dist/
    assetsDir: 'assets', // Assets in dist/assets/
    assetsPublicPath: '/', // Ensure assets are referenced correctly in production
    sourcemap: false, // Disable sourcemaps in production
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Proxy to backend
        changeOrigin: true,
      },
    },
  },
});