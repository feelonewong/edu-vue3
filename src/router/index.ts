import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AppLayout from "@/components/Layouts/AppLayout.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout
    }
  ]
})

export default router
