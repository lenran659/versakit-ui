import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ tsconfigPath: '../../tsconfig.build.json' }), vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  // 打包配置
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@vueuse/core': 'VueUse',
        },
        preserveModules: false,
      },
    },
    lib: {
      entry: 'index.ts',
      formats: ['es', 'umd'],
      name: 'versakit-ui',
    },
    terserOptions: {
      compress: {
        // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        keep_infinity: true,
        // 生产环境去除 console
        drop_console: true,
        // 生产环境去除 debugger
        drop_debugger: true,
      },
      format: {
        comments: false, // 删除注释
      },
    },
  },
})
