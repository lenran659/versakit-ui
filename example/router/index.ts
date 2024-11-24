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
        {
          path: '/tag',
          component: () => import('../views/tag/index.vue'),
        },
        {
          path: '/text',
          component: () => import('../views/text/index.vue'),
        },
        {
          path: '/link',
          component: () => import('../views/link/index.vue'),
        },
        {
          path: '/divider',
          component: () => import('../views/divider/index.vue'),
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
