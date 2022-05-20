import Vuex from "vuex";
import Vue from "vue";
import product from './modules/productStore'
import cart from './modules/cartStore'
// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
      product,
      cart
  },
});