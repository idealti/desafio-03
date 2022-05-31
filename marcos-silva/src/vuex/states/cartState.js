export default {
  namespaced: true,
  state() {
    return {
      products: [],
      showCart: false,
    };
  },
  mutations: {
    addToCart(state, payload) {
      const productIsInCart = state.products.some((value) => value.id === payload.value.id);

      if (!productIsInCart) {
        state.products.push({ ...payload.value, quantity: 1 });
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    hideCart(state) {
      state.showCart = false;
    },
    increaseQuantity(state, payload) {
      const productIndex = state.products
        .indexOf(state.products.find((product) => product.id === payload.value));

      state.products[productIndex].quantity += 1;
    },
    decreaseQuantity(state, payload) {
      const productIndex = state.products
        .indexOf(state.products.find((product) => product.id === payload.value));
      if (state.products[productIndex].quantity === 1) {
        state.products.splice(productIndex, 1);
        return;
      }

      state.products[productIndex].quantity -= 1;
    },
    removeProduct(state, payload) {
      const QUANTITY_TO_REMOVE = 1;
      const productIndex = state.products
        .indexOf(state.products.find((product) => product.id === payload.value));
      state.products.splice(productIndex, QUANTITY_TO_REMOVE);
    },
  },
  getters: {
    cartSize(state) {
      return state.products.reduce((total, current) => total + current.quantity, 0);
    },
    totalPrice(state) {
      const STARTING_TOTAL = 0;
      return (state.products.reduce((total, currentProduct) => {
        const productPrice = (parseFloat(currentProduct.price) * currentProduct.quantity);

        // converts to 2 decimal points
        return ((total + productPrice) * 100) / 100;
      }, STARTING_TOTAL));
    },
    showCart(state) {
      return state.showCart;
    },
    products(state) {
      return state.products;
    },
  },
};
