import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  // Load .env file based on `mode` (e.g., development, production)
  const env = loadEnv(mode, process.cwd(), "");
  return {
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
        remotes: {
          products_shell_mfe: `${env.VITE_PRODUCTS_SHELL_MFE}assets/remoteEntry.js`,
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: true,
    },
  };
});
