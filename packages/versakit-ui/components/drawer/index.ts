import type { App } from 'vue'
import VerDrawer from './src/index.vue'

VerDrawer.insatll = (app: App) => {
  app.component('VerDrawer', VerDrawer)
}

export default VerDrawer
