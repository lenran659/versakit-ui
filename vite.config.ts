import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

console.log("--------------", path.resolve(__dirname, "./packages/versakit-ui/components"));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // dts({
    //   include: ["./packages/**"],
    // }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./packages/versakit-ui/components"),
    },
  },
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        preserveModules: false,
      },
    },
    lib: {
      entry: "./packages/versakit-ui/index.ts",
      formats: ["es", "umd"],
      name: "versakit-ui",
    },
  },
});
