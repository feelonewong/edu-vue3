import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/Layouts/AppLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children: [
        {
          path: 'menus',
          name: 'menus',
          component: () => import('../views/menus.vue')
        },
        {
          path: 'resources',
          name: 'resources',
          component: () => import('../views/resources.vue')
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('../views/user.vue')
        },
        {
          path: 'course',
          name: 'course',
          component: () => import('../views/course.vue')
        },
        {
          path: '/:xxx(.*)*',
          name: 'error-page',
          component: () => import('@/views/error-page.vue')
        }
      ]
    }
  ]
})

export default router
