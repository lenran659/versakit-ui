import type { App } from 'vue'
import VerDivider from './index.vue'

VerDivider.install = (app: App) => {
  app.component('VerDivider', VerDivider)
}

export default VerDivider
