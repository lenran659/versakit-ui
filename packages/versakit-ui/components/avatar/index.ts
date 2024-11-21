import type { App } from 'vue'
import VerAvatar from './src/index.vue'

VerAvatar.install = (app: App) => {
  app.component('VerAvatar', VerAvatar)
}

export default VerAvatar
