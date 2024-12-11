import type { App, Component } from 'vue'

/* 图标 */
import 'virtual:svg-icons-register'

/* 组件 */

/* 指令 */
import { vRipple } from './directives/index'

// css
import './style/index.css'

// 组件注册
const components: Component = []

export {}

// 全局注册
export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
      app.directive('ripple', vRipple)
    }
  },
}
