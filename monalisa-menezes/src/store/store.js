  import { createStore } from "vuex";
  import products from "./modules/products";
  import cart from "./modules/cart";

  const store = createStore({
    modules: { products, cart },

  });

  export default store;
