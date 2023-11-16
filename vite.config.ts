import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // envPrefix: ""       // default: "VITE"
  // was trying to remove the prefix, but VITE wont just allow it.
});
