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
    path: '/manage',
    component:() => import ('@/views/layout/index.vue'),
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index.vue')
      },
      {
        path:'/hooks',
        name:'Hooks',
        component:() => import('@/views/hooks/index.vue')
      }
    ]
  },
]

const router:any = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
