import { createStore } from "vuex";

export const useStore = createStore({
  state: {
    count: 0,
    cart: [],
    total:0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },

    addInCart(state, item) {
      const inCart = state.cart.find((product) => product.id === item.id);
      

      if (!inCart) {
        item.qtd = 1;
        item.totalItem =item.price;
        console.log("não tem");
        state.cart.push(item);

      
      } else {
        inCart.qtd++
       inCart.totalItem= inCart.qtd * inCart.price;

      }
   
      console.log("carrinho", state.cart)
      
      
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },

    addInCart(context) {
      context.commit("addInCart");
    },
  },

   getters: {
      total(state) {
        return  state.cart.reduce((acc, item) =>{ return acc +=item.totalItem},0);
      },

      qtdCart(state) {
        return  state.cart.reduce((acc, item) =>{ return acc +=item.qtd},0);
      },

      
    }
});
