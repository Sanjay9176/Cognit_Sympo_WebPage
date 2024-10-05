import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // Set to true to allow all external devices to access
    port: 5173, // Or the port you are using
  },
  plugins: [react()],
});
