import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutView from '@/views/LayoutView.vue'
import chuangView from '@/components/chuangView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: chuangView
    },
    {
      path: '/layout',
      name: 'layout',
      component: LayoutView
    }
  ]
})

export default router
