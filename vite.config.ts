import vue from "@vitejs/plugin-vue";
import ssr from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [ssr(), vue()],
});
