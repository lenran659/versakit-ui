import type { App } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import autoLoad from './autoLoad'

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    ...autoLoad,
  ],
  history: createMemoryHistory(),
})

export const setupRouter = (app: App) => {
  app.use(router)
}

export default router
