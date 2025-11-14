import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import imagemin from "vite-plugin-imagemin";

export default defineConfig({
  base: "/portfolio3D/",
  plugins: [
    react(),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false,
    }),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "brotli",
      ext: ".br",
      deleteOriginFile: false,
    }),
    imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 90,
        progressive: true,
      },
      webp: {
        quality: 88, // Haute qualité (88-90 est recommandé)
        alphaQuality: 88,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          framer: ["framer-motion"],
          ui: ["react-parallax-tilt", "react-vertical-timeline-component"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
  },
  server: {
    preTransformRequests: ["/src/components/canvas/*", "/src/assets/*"],
  },
});
