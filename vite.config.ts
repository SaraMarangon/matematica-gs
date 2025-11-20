import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// nome do repositório no GitHub:
export default defineConfig({
  base: '/matematica-gs/',   // 👈 importante pro GitHub Pages
  build: {
    outDir: 'docs',          // 👈 build vai pra pasta docs
  },
  plugins: [react()],
});
