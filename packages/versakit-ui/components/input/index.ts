import type { App } from 'vue'
import VerInput from './index.vue'

VerInput.install = (app: App) => {
  app.component('VerInput', VerInput)
}

export default VerInput
