import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import { getNav } from './config/nav'
import { getComponentsSidebar } from './config/getComponentsSidebar'
import { getGuideSidebar } from './config/getGuideSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Versakit/',
  title: 'Versakit',
  description: 'A VitePress Site',
  themeConfig: {
    nav: getNav(),
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/components/': getComponentsSidebar(),
    } as any,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lenran659/Versakit' },
      { icon: 'gitee', link: 'https://gitee.com/dragon_water/versakit' },
    ],
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      open: true,
    },
  },
})
