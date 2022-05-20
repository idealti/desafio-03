import { createStore } from 'vuex'
import products from "./modules/products";

const store = createStore({
  modules: { products },
});

export default store;