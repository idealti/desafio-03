import { http } from "../../services/config";
import { createStore } from "vuex";

export default {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
   getProducts({ commit }) {
      return http
        .get("/products")
        .then((response) => commit("setProducts", response.data))
        .catch((err) => console.log(err));
    },
  },
};
