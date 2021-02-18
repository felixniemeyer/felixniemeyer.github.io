import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Gallery from '@/views/Gallery.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }, 
  {
    path: '/project/mindalys', 
    name: 'Project', 
    component: () => import('@/projects/Mindalys.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
