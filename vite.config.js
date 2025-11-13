import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio3D/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          framer: ["framer-motion"],
          ui: ["react-parallax-tilt", "react-vertical-timeline-component"],
          router: ["react-router-dom"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500,
  },
  server: {
    preTransformRequests: ["/src/components/canvas/*", "/src/assets/*"],
  },
});
