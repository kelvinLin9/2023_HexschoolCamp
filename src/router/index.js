import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: 'price',
        name: 'price',
        component: () => import('../views/PricePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
