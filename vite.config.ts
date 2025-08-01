import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.webp",
    "**/*.gif",
    "**/*.svg",
    "**/*.mp4", // ✅ video support
  ],
});
