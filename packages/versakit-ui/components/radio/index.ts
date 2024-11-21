import type { App } from 'vue'
import VerRadio from './src/index.vue'

VerRadio.install = (app: App) => {
  app.component('VerRadio', VerRadio)
}

export default VerRadio
