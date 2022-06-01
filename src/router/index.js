import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/carrinho",
      component: Cart,
    },
  ],
});
export default router;
