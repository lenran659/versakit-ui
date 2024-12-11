import Theme from 'vitepress/theme'
import Versakit from '@versakit/ui' // 引入组件库
import '@versakit/ui/dist/style.css' // 引入样式

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Versakit) // 注册组件库
  },
}
