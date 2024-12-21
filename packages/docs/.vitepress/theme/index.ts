import Theme from 'vitepress/theme'
import Versakit from '@versakit/ui' // 引入组件库
import '@versakit/ui/dist/style.css' // 引入样式
import './index.scss' // 引入样式
import Tool from '../../example/tool.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Tool', Tool)
    app.use(Versakit) // 注册组件库
  },
}
