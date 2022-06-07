import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import ('@/views/login/index.vue')
  },
  // {
  //   path:'/',
  //   redirect: '/login',
  // },
  {
    path: '/index',
    name: 'Index',
    component:() => import ('@/views/layout/index.vue')
  }
]

const router:any = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
