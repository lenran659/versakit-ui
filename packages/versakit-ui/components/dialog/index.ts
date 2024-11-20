import type { App } from 'vue'
import VerDialog from './index.vue'

VerDialog.install = (app: App) => {
  app.component('VerDialog', VerDialog)
}

export default VerDialog
