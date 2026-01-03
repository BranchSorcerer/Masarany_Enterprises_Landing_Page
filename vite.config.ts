import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Masarany_Enterprises_Landing_Page/',
  base: '/Masarany_Enterprises_Landing_Page/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
