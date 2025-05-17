import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/AboutMe/", // 注意要加斜線
  plugins: [react()],
});
