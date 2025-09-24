import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base path to your repo name for GitHub Pages
export default defineConfig({
  base: '/to-do-app/',
  plugins: [react()],
});
