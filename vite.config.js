import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: [
      'react-router-dom',
      // other dependencies
    ],
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});

