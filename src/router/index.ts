import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/AuthView.vue')
  },{
    path: '/login',
    name: 'login',
    component: () => import('@/views/AuthView.vue')
  },
    {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/AuthView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
