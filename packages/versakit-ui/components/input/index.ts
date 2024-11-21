import type { App } from 'vue'
import VerInput from './src/index.vue'

VerInput.install = (app: App) => {
  app.component('VerInput', VerInput)
}

export default VerInput
