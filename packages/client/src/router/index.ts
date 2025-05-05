import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventList.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts.vue'),
    },
    {
      path: '/create',
      name: 'create post',
      component: () => import('../views/CreateEvent.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/Event.vue'),
    },
    {
      path: '/testUpload',
      name: 'test upload',
      component: () => import('../views/testUpload.vue'),
    },
  ],
})

export default router
