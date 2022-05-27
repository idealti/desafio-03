export default {
  namespaced: true,
  state() {
    return {
      products: new Set(),
    };
  },
  mutations: {
    updateTotal() {},
    addToCart(state, payload) {
      state.products.add(payload.value);
    },
  },
  getters: {
    cartSize(state) {
      return state.products.size;
    },
    totalPrice(state) {
      return [...state.product].reduce((total, currentProduct) => total + currentProduct, 0);
    },
  },
};
