import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // replicate any path aliases you had (e.g. src)
      "@": path.resolve(__dirname, "src"),
      // etc, if you had others
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },

  // If you have special asset settings, you can add more config
});
