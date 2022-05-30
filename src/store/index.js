import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import carrinho from "./carrinho";

const store = new  Vuex.Store({
  modules: { carrinho }

});

export default store;
