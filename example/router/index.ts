import type { App } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('../layout/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/button/index.vue'),
        },
        {
          path: '/input',
          component: () => import('../views/input/index.vue'),
        },
      ],
    },
  ],
  history: createMemoryHistory(),
})

export const setupRouter = (app: App) => {
  app.use(router)
}

export default router
