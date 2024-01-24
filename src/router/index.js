import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import employes from '../views/employes.vue'
import Listconge from '../views/Listconge.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/employes',
      name: 'employes',
      component: employes
    },
    {
      path: '/Listconge',
      name: 'Listconge',
      component: Listconge
    },
   
  ]
})

export default router
