import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        // This splits your code into smaller, more manageable pieces
        manualChunks: {
          'vendor-ui': ['framer-motion', 'swiper', 'lucide-react'],
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Optional: Increase the warning limit if you're okay with larger chunks
    chunkSizeWarningLimit: 600, 
  },
})