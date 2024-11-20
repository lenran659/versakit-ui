import type { App } from 'vue'
import VerTextarea from './index.vue'

VerTextarea.install = (app: App) => {
  app.component('VerTextarea', VerTextarea)
}

export default VerTextarea
