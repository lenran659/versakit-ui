import type { App } from 'vue'
import VerCol from './src/index.vue'

VerCol.install = (app: App) => {
  app.component('VerCol', VerCol)
}

export default VerCol
