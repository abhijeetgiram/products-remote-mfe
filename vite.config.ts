import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 5001, // Port for the products remote MFE
    cors: true, // Enable CORS for development
  },
  preview: {
    port: 5001, // Port for previewing the products remote MFE
    cors: true, // Enable CORS for preview
  },
  plugins: [
    react(),
    federation({
      name: "products_remote_mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductListPage": "./src/pages/ProductListPage.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
  },
});
