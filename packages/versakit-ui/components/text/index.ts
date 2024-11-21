import type { App } from 'vue'
import VerText from './src/index.vue'

VerText.install = (app: App) => {
  app.component('VerText', VerText)
}

export default VerText
