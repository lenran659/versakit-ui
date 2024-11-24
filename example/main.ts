import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router/index'
import VersakitUI from '../packages/versakit-ui/index'

async function bootstrap() {
  const app = createApp(App)

  setupRouter(app)

  await router.isReady()

  app.use(VersakitUI)

  app.mount('#app')
}

bootstrap()
