import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/RandomEvents.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/RandomEvents.vue'),
    },
    {
      path: '/myEvents',
      name: 'my events',
      component: () => import('../views/MyEvents.vue'),
    },
    {
      path: '/joined',
      name: 'joined events',
      component: () => import('../views/JoinedEvents.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue'),
    },
    {
      path: '/create/:id?',
      name: 'create post',
      component: () => import('../views/CreateEvent.vue'),
    },
    {
      path: '/event/:id',
      name: 'event',
      component: () => import('../views/Event.vue'),
    },
    {
      path: '/testUpload',
      name: 'test upload',
      component: () => import('../views/testUpload.vue'),
    },
    {
      path: '/announce/:id',
      name: 'announce',
      component: () => import('../views/AddAnnounce.vue'),
    },
  ],
})

export default router
