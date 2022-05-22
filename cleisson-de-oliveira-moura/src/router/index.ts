import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
     path: '/cart',
     name: 'Cart',
     component: Cart
  },
  {
     path: '/checkout',
     name: 'Checkout',
     component: Checkout
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})