import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Nicolas-BIENES-Portfolio-V2/",
  // assetsInclude: [
  //   "**/*.jpg",
  //   "**/*.jpeg",
  //   "**/*.png",
  //   "**/*.gif",
  //   "**/*.svg",
  //   "**/*.JPG",
  // ],
});
