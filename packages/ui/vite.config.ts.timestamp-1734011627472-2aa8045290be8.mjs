// vite.config.ts
import { defineConfig } from "file:///C:/Users/Jannik/Desktop/versakit-monorepo/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.1_sass@1.82.0/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Jannik/Desktop/versakit-monorepo/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.11_@types+node@22.10.1_sass@1.82.0__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///C:/Users/Jannik/Desktop/versakit-monorepo/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.10.1_rollup@4.28.1_typescript@5.6.3_vite@5.4.11_@types+node@22.10.1_sass@1.82.0_/node_modules/vite-plugin-dts/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/Jannik/Desktop/versakit-monorepo/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.11_@types+node@22.10.1_sass@1.82.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [
    dts({ tsconfigPath: "../../tsconfig.build.json" }),
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "./icons")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  },
  // 打包配置
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ["vue", "@vueuse/core"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "@vueuse/core": "VueUse"
        },
        preserveModules: false
      }
    },
    lib: {
      entry: "index.ts",
      formats: ["es", "umd"],
      name: "versakit-ui"
    },
    terserOptions: {
      compress: {
        // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        keep_infinity: true,
        // 生产环境去除 console
        drop_console: true,
        // 生产环境去除 debugger
        drop_debugger: true
      },
      format: {
        comments: false
        // 删除注释
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKYW5uaWtcXFxcRGVza3RvcFxcXFx2ZXJzYWtpdC1tb25vcmVwb1xcXFxwYWNrYWdlc1xcXFx1aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSmFubmlrXFxcXERlc2t0b3BcXFxcdmVyc2FraXQtbW9ub3JlcG9cXFxccGFja2FnZXNcXFxcdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0phbm5pay9EZXNrdG9wL3ZlcnNha2l0LW1vbm9yZXBvL3BhY2thZ2VzL3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgZHRzKHsgdHNjb25maWdQYXRoOiAnLi4vLi4vdHNjb25maWcuYnVpbGQuanNvbicgfSksXHJcbiAgICB2dWUoKSxcclxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4vaWNvbnMnKV0sXHJcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gXHU2MjUzXHU1MzA1XHU5MTREXHU3RjZFXHJcbiAgYnVpbGQ6IHtcclxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ0B2dWV1c2UvY29yZSddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgICAnQHZ1ZXVzZS9jb3JlJzogJ1Z1ZVVzZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogJ2luZGV4LnRzJyxcclxuICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcclxuICAgICAgbmFtZTogJ3ZlcnNha2l0LXVpJyxcclxuICAgIH0sXHJcbiAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgLy8gXHU5NjMyXHU2QjYyIEluZmluaXR5IFx1ODhBQlx1NTM4Qlx1N0YyOVx1NjIxMCAxLzBcdUZGMENcdThGRDlcdTUzRUZcdTgwRkRcdTRGMUFcdTVCRkNcdTgxRjQgQ2hyb21lIFx1NEUwQVx1NzY4NFx1NjAyN1x1ODBGRFx1OTVFRVx1OTg5OFxyXG4gICAgICAgIGtlZXBfaW5maW5pdHk6IHRydWUsXHJcbiAgICAgICAgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0IGNvbnNvbGVcclxuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0IGRlYnVnZ2VyXHJcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgY29tbWVudHM6IGZhbHNlLCAvLyBcdTUyMjBcdTk2NjRcdTZDRThcdTkxQ0FcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVixTQUFTLG9CQUFvQjtBQUM1WCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sVUFBVTtBQUVqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJLEVBQUUsY0FBYyw0QkFBNEIsQ0FBQztBQUFBLElBQ2pELElBQUk7QUFBQSxJQUNKLHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQUEsTUFDakQsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLE9BQU8sY0FBYztBQUFBLE1BQ2hDLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsUUFFUixlQUFlO0FBQUE7QUFBQSxRQUVmLGNBQWM7QUFBQTtBQUFBLFFBRWQsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUE7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
