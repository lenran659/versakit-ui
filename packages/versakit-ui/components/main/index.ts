import type { App } from 'vue'
import VerMain from './index.vue'

VerMain.install = (app: App) => {
  app.component('VerMain', VerMain)
}

export default VerMain
