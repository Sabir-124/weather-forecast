import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  // More reliable Tauri detection
  const isTauri =
    mode === "production" && process.env.TAURI_ENV_PLATFORM !== undefined;
  const isDev = command === "dev";

  return {
    clearScreen: false,
    // Use relative path for Tauri builds, absolute for GitHub Pages
    base: isTauri || isDev ? "/" : "/weather-forecast/",
    plugins: [react()],
    server: {
      port: 5175,
      strictPort: true,
    },
    build: {
      // Ensure assets use relative paths
      assetsDir: "assets",
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
    },
  };
});
