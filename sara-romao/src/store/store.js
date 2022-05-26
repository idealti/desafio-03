import { createStore } from "vuex";

export const useStore = createStore({
  state: {
    count: 0,
    cart: [],
    total: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },

    incrementProduct(state, item) {
      const inCart = state.cart.find((product) => product.id === item);
      inCart.qtd++;
      inCart.totalItem = inCart.qtd * inCart.price;
    },

    decrementProduct(state, item) {
      const inCart = state.cart.find((product) => product.id === item);
      if (inCart.qtd > 1) {
        inCart.qtd--;
        inCart.totalItem = inCart.qtd * inCart.price;
      }
    },

    addInCart(state, item) {
      const inCart = state.cart.find((product) => product.id === item.id);

      if (!inCart) {
        item.qtd = 1;
        item.totalItem = item.price;
        console.log("não tem");
        state.cart.push(item);
      } else {
        inCart.qtd++;
        inCart.totalItem = inCart.qtd * inCart.price;
      }

      console.log("carrinho", state.cart);
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },

    addInCart(context) {
      context.commit("addInCart");
    },

    incrementProduct(context) {
      context.commit("incrementProduct");
    },

    decrementProduct(context) {
      context.commit("incrementProduct");
    },
  },

  getters: {
    total(state) {
      return state.cart.reduce((acc, item) => {
        return (acc += item.totalItem);
      }, 0);
    },

    qtdCart(state) {
      return state.cart.reduce((acc, item) => {
        return (acc += item.qtd);
      }, 0);
    },

    remove(state, item) {
      return state.cart.find((list) => list.id !== item);
    },
  },
});
