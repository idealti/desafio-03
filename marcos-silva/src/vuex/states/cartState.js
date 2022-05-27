export default {
  namespaced: true,
  state() {
    return {
      products: new Set(),
      total: 0,
    };
  },
  mutations: {
    updateTotal() {},
    addToCart(state, payload) {
      state.products.add(payload.value);
    },
  },
};
