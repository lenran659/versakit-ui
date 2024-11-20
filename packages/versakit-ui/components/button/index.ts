import type { App } from 'vue'
import VerButton from './index.vue'

VerButton.install = (app: App) => {
  app.component('VerButton', VerButton)
}

export default VerButton
