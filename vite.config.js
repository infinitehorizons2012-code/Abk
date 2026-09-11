import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Abk/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
