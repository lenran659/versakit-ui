import { defineConfig } from "vitepress";
import { getNav } from "./config/nav";
import { getSidebar } from "./config/sidebar";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Versakit",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: getNav(),

    sidebar: getSidebar(),

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin);
    },
  },
  vite: {
    server: {
      host: "0.0.0.0",
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
