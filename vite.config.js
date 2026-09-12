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
        entryFileNames: `assets/[name]-[hash]-v16_0_${buildTime}.js`,
        chunkFileNames: `assets/[name]-[hash]-v16_0_${buildTime}.js`,
        assetFileNames: `assets/[name]-[hash]-v16_0_${buildTime}.[ext]`
      }
    }
  }
});
