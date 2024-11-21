import type { App } from 'vue'
import VerTextarea from './src/index.vue'

VerTextarea.install = (app: App) => {
  app.component('VerTextarea', VerTextarea)
}

export default VerTextarea
