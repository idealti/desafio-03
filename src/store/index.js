import { createStore } from "vuex";
import httpProducts from "../services/products";

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    getProducts: (state) => state.products,
    getCart: (state) => state.cart
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    UPDATE_CART(state, payload) {
      state.cart = payload
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await httpProducts.list().then((res) => {
          return res.data;
        });
        commit("SET_PRODUCTS", data);
      } catch (err) {
        console.log(err);
      }
    },
    addCart(context, payload) {
      const cart = context.state.cart
      cart.push(payload);
    },
  },
  modules: {},
});
