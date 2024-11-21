import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    // 启用类似 jest 的全局测试 API
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    environment: 'jsdom',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
