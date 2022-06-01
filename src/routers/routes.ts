import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Cart from "../pages/Cart.vue";

export const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/cart", name: "Cart", component: Cart }
]
