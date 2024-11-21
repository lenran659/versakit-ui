import type { App } from 'vue'
import VerCard from './src/index.vue'

VerCard.intsall = (app: App) => {
  app.component('VerCard', VerCard)
}

export default VerCard
