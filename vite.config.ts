import { defineConfig } from 'vite';

export default defineConfig({
  // Göreli taban: GitHub Pages'te repo alt dizininde de sorunsuz çalışır.
  base: './',
  build: {
    target: 'es2020',
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 900
  },
  server: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    strictPort: false
  }
});
