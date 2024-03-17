import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/FrontView.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/application',
          component: () => import('@/views/ApplicationView.vue')
        },
        {
          path: '/resume',
          component: () => import('@/views/ResumeView.vue')
        }
      ]
    }
  ]
})

export default router
