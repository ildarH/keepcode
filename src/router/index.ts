import { createRouter, createWebHistory } from 'vue-router'
import { CONFIG } from '@/config'
import index from '../views/index.vue'

const ROUTE = CONFIG.ROUTE

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE.HOME,
      name: 'home',
      component: index
    }
  ]
})

export default router
