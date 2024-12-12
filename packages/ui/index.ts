import type { App, Component } from 'vue'
import VButton from './components/button'
import VCard from './components/card'
import VText from './components/text'
import VLink from './components/link'
import VDivider from './components/divider'
import VIcon from './components/icon'
import VRow from './components/row'
import VCol from './components/col'
import { vRipple } from './directives/index'
import 'virtual:svg-icons-register'
import './style/index.css'

const components: Component[] = [
  VButton,
  VCard,
  VText,
  VLink,
  VDivider,
  VIcon,
  VRow,
  VCol,
]
export { VButton, VCard, VText, VLink, VDivider, VIcon, VRow, VCol }

export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
      app.directive('ripple', vRipple)
    }
  },
}
