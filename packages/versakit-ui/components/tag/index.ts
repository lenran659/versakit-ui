import type { App } from 'vue'
import VerTag from './src/index.vue'

VerTag.install = (app: App) => {
  app.component('VerTag', VerTag)
}

export default VerTag
