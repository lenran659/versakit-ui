import type { App } from 'vue'
import VerDivider from './src/index.vue'

VerDivider.install = (app: App) => {
  app.component('VerDivider', VerDivider)
}

export default VerDivider
