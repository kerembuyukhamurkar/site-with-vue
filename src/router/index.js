import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/homePage.vue';
import productsPage from '../views/productsPage.vue';
import cartPage from '../views/cartPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path:'/products',
    name:'products',
    component: productsPage
  },
  {
    path:'/cart',
    name:'cart',
    component: cartPage
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
