import { useToken } from './../stores/accsssToken'
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
      meta: {
        requiresAuth: true
      },
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
          path: 'menus',
          name: 'menus',
          component: () => import('../views/menus/MenuIndex.vue')
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta?.requiresAuth)) {
    // 循环to.matched函数里面每一个子元素是否含有requireAuth属性并且为true
    const store = useToken()
    if (!store.token.access_token) {
      // 没有token的处理方式，跳转首页
      next({ name: 'login', query: { redirect: to.fullPath } })
      return
    }
  }
  next()
})
export default router
