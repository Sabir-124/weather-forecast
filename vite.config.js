import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/weather-forecast/",
  plugins: [react()],
  server: {
    port: 5175,
    strictPort: true,
  },
});
