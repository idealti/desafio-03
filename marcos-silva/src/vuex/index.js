import { createStore } from 'vuex';
import cartState from './states/cartState';
import searchState from './states/searchState';

const store = createStore({
  modules: {
    cart: cartState,
    search: searchState,
  },
});

export default store;
