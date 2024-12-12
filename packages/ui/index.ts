import type { App, Component } from 'vue'
import VButton from './components/button/index'
import { vRipple } from './directives/index'
import 'virtual:svg-icons-register'
import './style/index.css'

const components: Component[] = [VButton]
export { VButton }

export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
      app.directive('ripple', vRipple)
    }
  },
}
