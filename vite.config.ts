import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { build } from 'vite';

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
