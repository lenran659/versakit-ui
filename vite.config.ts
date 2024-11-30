import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ tsconfigPath: './tsconfig.build.json' })],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/packages/versakit-ui',
      '@examp': '/example',
    },
  },
  server: {
    host: '0.0.0.0',
  },
  // 打包配置
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        preserveModules: false,
      },
    },
    lib: {
      entry: './packages/versakit-ui/index.ts',
      formats: ['es', 'umd'],
      name: 'versakit-ui',
    },
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true, // 生产环境去除 debugger
      },
      format: {
        comments: false, // 删除注释
      },
    },
  },
})
