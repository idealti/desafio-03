import { createStore } from 'vuex'
import dados from './dados.js'
import cart from  './cart'

export default createStore({
  modules: {
    dados,
    cart
  }
})
