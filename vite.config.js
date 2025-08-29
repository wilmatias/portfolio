import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // Set the root directory
  publicDir: 'public', // Directory for static assets
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Directory for generated assets
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    // Ensure public assets are copied
    copyPublicDir: true,
    // Add additional files to copy
    assetsInlineLimit: 0, // Don't inline assets
  },
  server: {
    port: 3000, // Dev server port
    open: true, // Automatically open browser
    host: true // Allow external access
  },
  base: './' // Use relative paths for assets
})
