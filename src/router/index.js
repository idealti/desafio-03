import { createRouter, createWebHistory } from "vue-router";

import Products from "../components/Products.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Products,
    },
    {
      path: "/products",
      component: Products,
    },
    {
      path: "/products/:category/:electronics",
      component: Products,
    },
    {
      path: "/products/:category/:jewelery",
      component: Products,
    },
    {
      path: "/products/:category/:men's clothing",
      component: Products,
    },
  ],
});
export default router;
