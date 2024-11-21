import type { App } from 'vue'
import VerButton from './src/index.vue'

VerButton.install = (app: App) => {
  app.component('VerButton', VerButton)
}

export default VerButton
