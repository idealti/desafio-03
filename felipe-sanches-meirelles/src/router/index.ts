import { createRouter, createWebHistory } from 'vue-router';
import CartView from '../views/CartView.vue';
import HomeView from '../views/ProductsView.vue';
import SingleProductView from '../views/SingleProductView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    { path: '/product/:id', name: 'product', component: SingleProductView }
  ]
})

export default router
