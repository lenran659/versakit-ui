import type { App, Component } from 'vue'
import VButton from './components/button'
import VCard from './components/card'
import VText from './components/text'
import { vRipple } from './directives/index'
import 'virtual:svg-icons-register'
import './style/index.css'

const components: Component[] = [VButton, VCard, VText]
export { VButton, VCard, VText }

export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
      app.directive('ripple', vRipple)
    }
  },
}
