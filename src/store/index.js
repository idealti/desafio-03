import { createStore } from "vuex";
import httpProducts from "../services/products";

export default createStore({
  state: {
    products: [],
    cart: [],
    totalPrice: [],
  },
  getters: {
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
    getTotalPrice: (state) => state.totalPrice,
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      if (state.products.length !== payload.length) {
        state.products.push(...payload);
      }
    },
    addCart(state, payload) {
      const existingProduct = state.cart.find(
        (product) => product.id === payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        payload.quantity = 1;
        state.cart.push(payload);
      }
    },
    removeCart(state, payload) {
      const productToRemove = state.cart.find(
        (product) => product.id === payload.id
      );
      state.cart = state.cart.filter((product) => {
        if (product.id != productToRemove.id) {
          return product;
        } else if (product.quantity > 1) {
          product.quantity -= 1;
          return product;
        }
      });
    },
    calculateTotalPrice(state) {
      state.totalPrice = state.cart.reduce((sum, product) => {
        if (product.quantity > 1) {
          sum = sum + product.price * product.quantity;
        } else {
          sum = sum + product.price;
        }
        return sum;
      }, 0);
    },
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
  },
  modules: {},
});
