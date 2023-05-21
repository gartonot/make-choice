import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('@/views/Categories/Index.vue')
  },
  {
    path: '/categories/:slug',
    name: 'categoriesSlug',
    component: () => import('@/views/Categories/SlugView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
