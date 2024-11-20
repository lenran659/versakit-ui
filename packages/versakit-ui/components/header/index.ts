import type { App } from 'vue'
import VerHeader from './index.vue'

VerHeader.install = (app: App) => {
  app.component('VerHeader', VerHeader)
}

export default VerHeader
