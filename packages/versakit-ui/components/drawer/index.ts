import type { App } from 'vue'
import VerDrawer from './index.vue'

VerDrawer.insatll = (app: App) => {
  app.component('VerDrawer', VerDrawer)
}

export default VerDrawer
