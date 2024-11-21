import type { App } from 'vue'
import VerFormItem from './src/index.vue'

VerFormItem.install = (app: App) => {
  app.component('VerFormItem', VerFormItem)
}

export default VerFormItem
