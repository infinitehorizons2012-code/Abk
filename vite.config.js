import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const buildTime = Date.now();

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/abk-v24_1_clean_${buildTime}-[hash].js`,
        chunkFileNames: `assets/abk-v24_1_clean_${buildTime}-[hash].js`,
        assetFileNames: `assets/abk-v24_1_clean_${buildTime}-[hash].[ext]`
      }
    }
  }
});
