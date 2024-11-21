import type { App } from 'vue'
import VerSwitch from './src/index.vue'

VerSwitch.insatll = (app: App) => {
  app.component('VerSwitch', VerSwitch)
}

export default VerSwitch
