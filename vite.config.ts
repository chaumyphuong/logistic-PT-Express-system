import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/Logistic-system-PT-Express-Mobile-App",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
